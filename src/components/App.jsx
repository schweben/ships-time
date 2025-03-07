import React from 'react';
import CurrentWatch from './CurrentWatch';
import Watches from './Watches';

import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Ship's Time</h1>
      <CurrentWatch/>
      <Watches/>
    </div>
  );
}

export default App;
