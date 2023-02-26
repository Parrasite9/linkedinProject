import React, { useEffect } from 'react';
// import { Counter } from './features/Counter';
import './App.css';
import Header from './Components/Header';
import AppBody from './Components/AppBody';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Widgets from './Components/Widgets';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './Firebase/Firebase';

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //USER IS LOGGED IN
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        //USER IS LOGGED OUT
        dispatch(logout())
      }
    })

    if (user && user.displayName) {
      console.log(`Welcome ${user.displayName}!`);
    } else {
      console.log("User is not logged in.");
    }
    
  }, [])

  return (
    <div className="app">

      <Header />
      {!user ? (
        <Login />

      ) : (
        <div className="app_body">
        <Sidebar />
        <Feed />

        {/* <AppBody /> */}


        {/* <Widgets /> */}
              
      </div>

      )}







    </div>
  );
}

export default App;
