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
      <h1>Hello World</h1>

      {/* HEADER  */}
      <Header />



      {/* APP BODY */}
      <AppBody />
      {/* SIDEBAR */}
      <Sidebar />
      {/* FEED */}
      <Feed />
      {/* WIDGETS */}
      <Widgets />

      
    </div>
  );
}

export default App;
