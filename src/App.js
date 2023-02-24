import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Components/Header';
import AppBody from './Components/AppBody';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Widgets from './Components/Widgets';

function App() {
  return (
    <div className="app">

      {/* HEADER  */}
      <Header />


      <div className="app_body">
        {/* SIDEBAR */}
        <Sidebar />


        {/* APP BODY */}
        <AppBody />


        {/* FEED */}
        <Feed />


        {/* WIDGETS */}
        <Widgets />
              
      </div>




    </div>
  );
}

export default App;
