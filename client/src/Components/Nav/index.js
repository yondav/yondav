import React, { useState, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import YDIcon from '../Icons/YD';
import NavLink from './NavLink';
import './nav.css';
const ContactModal = React.lazy(() => import('../Contact_Modal'));

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

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
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ ease: 'easeIn', duration: 0.5, delay: 0 }}
        >
          <NavLink link='dev' />
        </motion.div>
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ ease: 'easeIn', duration: 0.5, delay: 0.5 }}
        >
          <NavLink link='portraits' />
        </motion.div>
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ ease: 'easeIn', duration: 0.5, delay: 1 }}
        >
          <NavLink link='about' />
        </motion.div>
        <Suspense fallback=''>
          <ContactModal open={open} handleClose={handleClose} />
        </Suspense>
      </div>
    </nav>
  );
};

export default Nav;
