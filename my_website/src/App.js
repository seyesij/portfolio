import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';

class App extends Component {
  render() {
    return (
     <Router>
      <div className="App">
        <Navbar />
        <Homepage />


      </div>
     </Router>
    );
  }
}

export default App;
