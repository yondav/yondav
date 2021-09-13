import React from 'react';
import { motion } from 'framer-motion';
import Icons from '../Icons/Icons';
import './footer.css';

const Footer = ({ updateMode, setResume }) => {
  return (
    <motion.footer
      layout
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      transition={{ duration: 0.3, ease: 'anticipate' }}
    >
      <p className='copy'>&#169; {new Date().getFullYear()} Yoni David</p>
      <Icons
        updateMode={updateMode}
        className='footer-socials'
        setResume={setResume}
      />
    </motion.footer>
  );
};

export default Footer;
