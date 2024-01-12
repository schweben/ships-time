import React from 'react';
import CurrentWatch from './components/CurrentWatch';
import Watches from './components/Watches';

import anchor from './35840.jpg';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>Ship's Time</h1>
      </div>
      <CurrentWatch/>
      <Watches/>
      <img className="backgroundImage" src={anchor} alt="Anchor"/>
      <div className="imageAttribution">
        <a href="https://www.freepik.com/free-vector/realistic-anchor-with-rope_9462235.htm#query=anchor&position=10&from_view=keyword&track=sph&uuid=30d7bf2e-0859-48a9-9b24-eb5d2a576375">Image by macrovector</a> on Freepik
      </div>
    </div>
  );
}

export default App;
