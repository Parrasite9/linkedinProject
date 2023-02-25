import React from 'react';
// import { Counter } from './features/Counter';
import './App.css';
import Header from './Components/Header';
import AppBody from './Components/AppBody';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Widgets from './Components/Widgets';
import { selectUser } from './features/userSlice';
import Login from './Components/Login';
import { useSelector } from 'react-redux';

function App() {

  const user = useSelector(selectUser)

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
