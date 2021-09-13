import React from 'react';
import { motion } from 'framer-motion';
import {
  RiContrastLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiGithubLine,
  MdPictureAsPdf,
} from 'react-icons/all';
import { icons, icon } from '../../../Utils/animations';

const socials = [
  {
    name: 'github',
    link: 'https://github.com/yondav',
    el: RiGithubLine,
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/yondav/',
    el: RiInstagramLine,
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/yoni-david-5965b6149/',
    el: RiLinkedinLine,
  },
];

const Icons = ({ updateMode, className, setResume }) => {
  return (
    <motion.div
      className={className}
      variants={icons}
      initial='hidden'
      animate='visible'
    >
      <motion.div className='icon' variants={icon} title='contrast'>
        <RiContrastLine className='contrast' onClick={updateMode} />
      </motion.div>
      {socials.map((social, i) => (
        <a
          key={i}
          className='social-link'
          href={social.link}
          target='_blank'
          rel='noopener noreferrer'
        >
          <motion.div className='icon' variants={icon} title={social.name}>
            {React.createElement(social.el, { className: social.name })}
          </motion.div>
        </a>
      ))}
      {className === 'footer-socials' && (
        <motion.div
          className='icon'
          variants={icon}
          title='resume'
          onTap={() => setResume(true)}
        >
          <MdPictureAsPdf className='resume' />
        </motion.div>
      )}
    </motion.div>
  );
};

export default Icons;
