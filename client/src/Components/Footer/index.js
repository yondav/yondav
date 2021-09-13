import React from 'react';
import { motion } from 'framer-motion';
import {
  RiContrastLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiGithubLine,
  MdPictureAsPdf,
} from 'react-icons/all';
import { icons, icon } from '../../Utils/animations';
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
      <motion.div
        className='footer-socials'
        variants={icons}
        initial='hidden'
        animate='visible'
      >
        <motion.div
          variants={icon}
          className='icon'
          onClick={updateMode}
          title='contrast'
        >
          <RiContrastLine />
        </motion.div>
        <a
          className='social-link'
          href='https://github.com/yondav'
          target='_blank'
          rel='noopener noreferrer'
        >
          <motion.div variants={icon} className='icon' title='github'>
            <RiGithubLine className='github' />
          </motion.div>
        </a>
        <a
          className='social-link'
          href='https://www.instagram.com/yondav/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <motion.div className='icon' variants={icon} title='instagram'>
            <RiInstagramLine className='instagram' />
          </motion.div>
        </a>
        <a
          className='social-link'
          href='https://www.linkedin.com/in/yoni-david-5965b6149/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <motion.div className='icon' variants={icon} title='linkedin'>
            <RiLinkedinLine className='linkedin' />
          </motion.div>
        </a>
        <motion.div
          className='icon'
          variants={icon}
          title='resume'
          onTap={() => setResume(true)}
        >
          <MdPictureAsPdf className='resume' />
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
