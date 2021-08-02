import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import Nav from '../Nav';
import Icons from './Icons';
import Yoni from './Yoni';
import './header.css';
import ContactModal from '../Contact_Modal';

const Header = ({ updateMode }) => {
  const [open, setOpen] = useState(false);
  const [arrow, setArrow] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <header>
      <Nav />
      <Icons updateMode={updateMode} />
      <Yoni />
      <motion.button
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{ delay: 8, ease: 'easeInOut', duration: 0.5 }}
        className='about-btn'
        onMouseEnter={() => setArrow(true)}
        onMouseLeave={() => setArrow(false)}
        onClick={() => setOpen(true)}
      >
        CLICK {arrow && <BsArrowRight className='bounce' />}
      </motion.button>
      <ContactModal open={open} handleClose={handleClose} />
    </header>
  );
};

export default Header;
