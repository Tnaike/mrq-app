import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/mrq_logo.png';
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
            <NavLink to='/users'>Profile</NavLink>
          </li>
          <li>
            <NavLink to='/rq-users'>QR Profile</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
