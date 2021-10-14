import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

import './App.css';

function App() {
  return (
    <div className="app">

       <Header /> 
       
      {/* <AppBody /> */}
      <div className="app__body">
         <Sidebar /> 
      <Feed /> 
      {/* <Widget /> */}


      </div>
      


    </div>
  );
}

export default App;
