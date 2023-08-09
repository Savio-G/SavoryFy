import React from 'react';
import '../Styles/Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='main-nav-container'>
      <div className="menu-link">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
        </ul>
      </div>
      <div className='Logo'>
        <h1><span>S</span>avoryfy</h1>
      </div>
      <div className='auth'>
        <button className="auth-dekstop">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Header;