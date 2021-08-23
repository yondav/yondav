import React from 'react';
import { motion } from 'framer-motion';
import {
  RiContrastLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiGithubLine,
} from 'react-icons/ri';
import { icons, icon } from '../../../Utils/animations';

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
