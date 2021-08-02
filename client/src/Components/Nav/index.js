import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import YDIcon from '../Icons/YD';
import './nav.css';

const Nav = () => {
  return (
    <nav>
      <div className='inner-nav'>
        <NavLink to='/' style={{ textDecoration: 'none' }}>
          <YDIcon />
        </NavLink>
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ ease: 'easeIn', duration: 0.5 }}
        >
          <NavLink to='/dev' className='nav-link'>
            dev
          </NavLink>
        </motion.div>
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ ease: 'easeIn', duration: 1 }}
        >
          <NavLink to='/portraits' className='nav-link'>
            portraits
          </NavLink>
        </motion.div>
      </div>
    </nav>
  );
};

export default Nav;
