import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => (
  <div className="navigation">
    <div className="logoWrapper">
      <img src="https://www.techtranz.com/wp-content/uploads/2018/05/1000px-React-icon.svg.png" height="60" alt="logo" />
    </div>
    <nav>
      <ul className="nav">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/button">Button</NavLink></li>
        <li><NavLink to="/icon">Icon</NavLink></li>
        <li><NavLink to="/input">Input</NavLink></li>
        <li><NavLink to="/modal">Modal</NavLink></li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
