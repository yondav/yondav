import React from 'react';
import { motion } from 'framer-motion';
import {
  RiContrastLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiGithubLine,
  FiDownload,
} from 'react-icons/all';
import { icons, icon } from '../../Utils/animations';
import resume from '../../Assets/yoni_david_resume_placeholder.pdf';
import './footer.css';

const Footer = ({ updateMode }) => {
  return (
    <motion.footer
      layout
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      transition={{ duration: 0.3, ease: 'anticipate' }}
    >
      <p className='copy'>&#169; {new Date().getFullYear()} Yoni David</p>
      <motion.div
        className='footer-socials'
        variants={icons}
        initial='hidden'
        animate='visible'
      >
        <motion.div variants={icon} className='icon' onClick={updateMode}>
          <RiContrastLine />
        </motion.div>
        <a
          className='social-link'
          href='https://github.com/yondav'
          target='_blank'
          rel='noopener noreferrer'
        >
          <motion.div variants={icon} className='icon'>
            <RiGithubLine className='github' />
          </motion.div>
        </a>
        <a
          className='social-link'
          href='https://www.instagram.com/yondav/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <motion.div className='icon' variants={icon}>
            <RiInstagramLine className='instagram' />
          </motion.div>
        </a>
        <a
          className='social-link'
          href='https://www.linkedin.com/in/yoni-david-5965b6149/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <motion.div className='icon' variants={icon}>
            <RiLinkedinLine className='linkedin' />
          </motion.div>
        </a>
        <a
          href={resume}
          download='yoni_david_resume_2021'
          className='resume-link'
          title='resume'
        >
          <motion.div className='icon' variants={icon}>
            <FiDownload className='resume' />
          </motion.div>
        </a>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
