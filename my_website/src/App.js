import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
     <Router>
      <div className="App">
        <Navbar />
        <Route exact path='/' render={() => <Homepage /> } />
        <Route exact path='/contact' render={() => <Contact /> } />


      </div>
     </Router>
    );
  }
}

export default App;
