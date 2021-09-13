import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import YDIcon from '../Icons/YD';
import NavLink from './NavLink';
import './nav.css';

const links = [
  { name: 'dev', delay: 0 },
  { name: 'portraits', delay: 0.2 },
  { name: 'about', delay: 0.4 },
];
const Nav = () => {
  return (
    <nav>
      <div className='inner-nav'>
        <Link
          to='/'
          style={{ textDecoration: 'none' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <YDIcon />
        </Link>
        {links.map((link, i) => (
          <motion.div
            key={i}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ ease: 'easeIn', duration: 0.5, delay: link.delay }}
          >
            <NavLink link={link.name} />
          </motion.div>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
