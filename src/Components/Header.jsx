import React, { useState } from 'react';
import '../Styles/Header.css'
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
const Header = () => {
  const [isOpen, setisOpen] = useState(false)
  return (
    <nav className='main-nav-container'>
      <div className={isOpen ? `mobile-menu-link` : `menu-link`}>
        <ul className='text-[1.15rem]'>
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
        <button className="auth-button auth-dekstop ">
          Login
        </button>
        <div className='hamburger-menu'>
          {
            isOpen ? <AiOutlineClose onClick={() => { setisOpen(!isOpen) }}></AiOutlineClose>
              :
              <RxHamburgerMenu onClick={() => { setisOpen(!isOpen) }}></RxHamburgerMenu>
          }
        </div>
      </div>
    </nav>
  );
};

export default Header;