import React from 'react';
import { NavLink } from 'react-router-dom';
import YDIcon from '../Icons/YD';
import './nav.css';

const Nav = () => {
  return (
    <nav>
      <div className='inner-nav'>
        <NavLink to='/' style={{ textDecoration: 'none' }}>
          <YDIcon />
        </NavLink>
        <NavLink to='/dev' className='nav-link'>
          dev
        </NavLink>
        <NavLink to='/portraits' className='nav-link'>
          portraits
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
