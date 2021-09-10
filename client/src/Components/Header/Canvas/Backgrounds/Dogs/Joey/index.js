import React from 'react';
import { motion } from 'framer-motion';
import { joey } from '../../../../../../data/svg/dogs';
import Path from '../../../../../SVG';

const Joey = () => {
  return (
    <motion.div
      className='joey-container'
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1060 1900'
        className='joey'
      >
        <g>
          <Path group={joey} />
        </g>
      </svg>
    </motion.div>
  );
};

export default Joey;
