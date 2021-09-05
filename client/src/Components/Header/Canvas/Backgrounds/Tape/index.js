import React from 'react';
import { motion } from 'framer-motion';
import { stand, left, right, heads } from './content';
import Path from '../../../../SVG';

const Tape = () => {
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      initial={{ x: 4000 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      viewBox='0 0 1060 1900'
    >
      <rect width='1060' height='1900' fill='var(--pr-white)' />
      <g>
        <Path group={stand} />
      </g>
      {/* left */}
      <motion.g
        initial={{ rotate: 0 }}
        animate={{ rotate: -4320 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Path group={left} />
      </motion.g>
      {/* right */}
      <motion.g
        initial={{ rotate: 0 }}
        animate={{ rotate: -4320 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Path group={right} />
      </motion.g>
      <g>
        <Path group={heads} />
      </g>
    </motion.svg>
  );
};

export default Tape;
