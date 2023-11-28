// NavigationBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/Fitness" activeClassName="active">Fitness</NavLink></li>
        <li><NavLink to="/Nutrition" activeClassName="active">Nutrition</NavLink></li>
        <li><NavLink to="/TimeManagement" activeClassName="active">Time Management</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
