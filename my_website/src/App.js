import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
     <Router>
      <div className="App">
        <Navbar />


      </div>
     </Router>
    );
  }
}

export default App;
