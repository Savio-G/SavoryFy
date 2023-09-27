import React, { useContext, useState } from 'react';
import '../Styles/Header.css'
import { Link, NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { AuthContext } from '../Authentication/AuthProvider';
const Header = () => {
  const [isOpen, setisOpen] = useState(false)
  const { user, handleLogout } = useContext(AuthContext)
  return (
    <nav className='main-nav-container'>
      <div className={isOpen ? `mobile-menu-link` : `menu-link`}>
        <ul className='text-[1.15rem]'>
          <li className='navigation'>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'text-[#D4A373]' : 'text-black')}
            >Home</NavLink>
          </li>
          <li className='navigation'>
            <NavLink
              to="/About"
              className={({ isActive }) => (isActive ? 'text-[#D4A373]' : 'text-black')}
            >About Us</NavLink>
          </li>
          <li className='navigation'>
            <NavLink
              to="/Blog"
              className={({ isActive }) => (isActive ? 'text-[#D4A373]' : 'text-black')}
            >Blog</NavLink>
          </li>
        </ul>
      </div>
      <div className='Logo'>
        <h1><span>S</span>avoryfy</h1>
      </div>
      <div className='auth'>
        {user ?
          <button onClick={handleLogout} className="auth-button auth-dekstop ">
            Logout
          </button>
          :
          <Link to="/Login">
            <button className="auth-button auth-dekstop ">
              Login
            </button>
          </Link>
        }
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