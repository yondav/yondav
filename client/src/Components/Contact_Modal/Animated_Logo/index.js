import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedLogo = ({ mouse }) => {
  useEffect(() => console.log(mouse), [mouse]);
  const yon = ['.', 'y', 'o', 'n'];
  const dav = ['d', 'a', 'v'];
  return (
    <div className='logo-container'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        style={{ letterSpacing: mouse * 0.1 }}
        className='logo'
      >
        {yon.map((letter, i) => (
          <motion.div
            style={{
              rotate: Math.floor(Math.random() * mouse * 0.03),
              fontSize: mouse
                ? `${Math.floor(Math.random() * mouse * 0.05)}rem`
                : '1em',
            }}
            key={i}
            className='yon'
          >
            {letter}
          </motion.div>
        ))}
        {dav.map((letter, i) => (
          <motion.div
            style={{
              rotate: Math.floor(Math.random() * mouse * -0.03),
              fontSize: mouse
                ? `${Math.floor(Math.random() * mouse * 0.05)}rem`
                : '1em',
            }}
            key={i}
            className='dav'
          >
            {letter}
          </motion.div>
        ))}
        {/* <p style={{ color: 'var(--pr-white)' }}>{mouse}</p> */}
      </motion.div>
    </div>
  );
};

export default AnimatedLogo;
