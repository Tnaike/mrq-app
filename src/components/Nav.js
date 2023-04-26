import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/index.css';

const Nav = () => {
  return (
    <div className='nav-wrap'>
      <nav className='nav container'>
        <div className='logo'>
          <img src={logo} alt='MRQ' />
        </div>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/profile'>Profile</NavLink>
          </li>
          <li>
            <NavLink to='/menu'>Menu</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
