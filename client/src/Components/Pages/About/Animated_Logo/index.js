import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedLogo = () => {
  const [mouse, setMouse] = useState(false);

  const handleMouseMove = (e) => {
    let mouseX = e.clientX;
    let centerX = e.currentTarget.offsetWidth / 2;
    let currentXoffset = Math.abs(centerX - mouseX);

    setMouse(currentXoffset);
  };

  const handleMouseLeave = (e) => setMouse(false);

  const yon = ['.', 'y', 'o', 'n'];
  const dav = ['d', 'a', 'v'];
  return (
    <motion.div
      initial={{ x: -800 }}
      animate={{
        x: 0,
        rotate: [0, 5, 0],
        transition: { duration: 1, ease: 'anticipate', delay: 1.2 },
      }}
      exit={{
        x: -800,
        rotate: [0, -5, 0],
        transition: { duration: 1, ease: 'anticipate' },
      }}
      className='logo-container'
    >
      <div
        className='about-container'
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.2 }}
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
    </motion.div>
  );
};

export default AnimatedLogo;
