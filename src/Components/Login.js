import React, { useState } from 'react'
import '../CSS/Login.css'; // import the Login component's styles
import { login } from '../features/userSlice';
import { auth } from '../Firebase/Firebase';
import { useDispatch } from 'react-redux'



function Login() {

    const [name, setName] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const loginToApp = (e) => {
        e.preventDefault()
        // register()
        
        auth.signInWithEmailAndPassword(email, password).then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,
            }))
        })
        .catch((error) => alert(error))
    }
    
    const register = () => {
        if (!name) {
            return alert('Please enter a full name!')
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic,
                }))
                // console.log('Logged in user: ', user);
            })
        }).catch(error => alert(error))
    }

  return (
    <div className='login'>
      <img src='https://i.imgur.com/GMxxdwO.png' alt='' />

      <form>
        <input type='text' placeholder='Full Name (required if registering)' className="login_input" value={name} onChange={e => setName(e.target.value)} />
        <input type="text" placeholder='Profile pic URL (optional)' className="login_input" value={profilePic} onChange={e => setProfilePic(e.target.value)} />
        <input type="email" placeholder='Email' className="login_input" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder='Password' className="login_input" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" onClick={loginToApp} >Sign In</button>
      </form>

      <p>Not a member? 
        <span className='login_register'>
            Register Now
        </span> 
      </p>

    </div>
  )
}

export default Login
