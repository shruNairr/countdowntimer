import logo from './logo.svg';
import React from 'react';
import Timer from './Timer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="First">WE'RE LAUNCHING <br/> SOON
      <br/>
      </div>
      <div className="Second">
      <Timer duration={2 * 24 * 60 * 60 * 1000}/>
      
      <div className= "Third">DAYS HOURS MINUTES SECONDS<br/></div>
      <br/>
      <div>
      <span className = "IconImage1"></span>
      <span className = "IconImage2"></span>
      <span className = "IconImage3"></span>
      </div>
      </div>
    </div>
  );
}

export default App;
