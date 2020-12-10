import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Heading from './Heading/Heading';
import Count from './MetalMeta/MetalMeta';
import Band from './Band/Band'
import Banddis from './Band-dis/Band-dis';

function App() {
  return (
  <Router>
  <div className="App">
  <Heading/> 
  <Count />
  <Banddis />
  <Count />
  </div>
  </Router>
  );
}

export default App;