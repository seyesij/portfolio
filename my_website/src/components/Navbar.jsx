import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = (props) => {
  return(
    <div className="navbar">
          <div className="nav">
            <ul>
              <h2>My Portfolio</h2>
              <div className="links">
              <li><a href="https://www.linkedin.com/in/seyesijuwade/" target="_blank" rel="noopener noreferrer" className="navlink"><h3>linkedin</h3></a></li>
              <li><a href="https://github.com/seyesij" target="_blank" rel="noopener noreferrer" className="navlink"><h3>github</h3></a></li>
              <li><NavLink className="navlink" exact to='/contact'><h3>contact</h3></NavLink></li>
              <li><NavLink className="navlink" exact to='/about'><h3>about me</h3></NavLink></li>
              <li><NavLink className="navlink" exact to='/'><h3>home</h3></NavLink></li>
              </div>
            </ul>
          </div>
    </div>
  )
}

export default Navbar;
