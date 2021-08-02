import React from 'react';
import { motion } from 'framer-motion';
import {
  RiContrastLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiGithubLine,
} from 'react-icons/ri';

const icons = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const icon = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Icons = ({ updateMode }) => {
  return (
    <motion.div
      className='icons'
      variants={icons}
      initial='hidden'
      animate='visible'
    >
      <motion.div className='icon' variants={icon}>
        <RiContrastLine className='contrast' onClick={updateMode} />
      </motion.div>
      <a
        className='social-link'
        href='https://github.com/yondav'
        target='_blank'
        rel='noopener noreferrer'
      >
        <motion.div className='icon' variants={icon}>
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
    </motion.div>
  );
};

export default Icons;
