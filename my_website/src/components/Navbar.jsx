import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = (props) => {
  return(
    <div className="navbar">
          <div className="nav">
            <ul>
              <h3>My Portfolio</h3>
              <li><a href="https://www.linkedin.com/in/seyesijuwade/" target="_blank"><h3>linkedin</h3></a></li>
              <li><a href="https://github.com/seyesij" target="_blank"><h3>github</h3></a></li>
              <li><NavLink className="navlink" exact to='/contact'><h3>contact</h3></NavLink></li>
              <li><NavLink className="navlink" exact to='/profile'><h3>about me</h3></NavLink></li>
              <li>
                <NavLink className="navlink" exact to='/'><h3>home</h3></NavLink>
              </li>
            </ul>
          </div>
    </div>
  )
}

export default Navbar;
