import React from 'react'
import '../CSS/Login.css'; // import the Login component's styles



function Login() {

    const loginToApp = () => {

    }
    
    const register = () => {

    }

  return (
    <div className='login'>
      <img src='https://i.imgur.com/GMxxdwO.png' alt='' />

      <form>
        <input type='text' placeholder='Full Name (required if registering)' className="login_input" />
        <input type="text" placeholder='Profile pic URL (optional)' className="login_input" />
        <input type="email" placeholder='Email' className="login_input" />
        <input type="password" placeholder='Password' className="login_input" />
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
