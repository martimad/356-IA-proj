// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Fitness">Fitness</Link></li>
        <li><Link to="/Nutrition">Nutrition</Link></li>
        <li><Link to="/TimeManagement">Time Management</Link></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
