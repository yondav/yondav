import React from 'react';
import { motion } from 'framer-motion';

const Grass = () => {
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      initial={{ x: 1000 }}
      animate={{
        x: 0,
        y: [0, 100, 0],
        rotate: [30, 0, -30, 0],
        borderRadius: ['50%', '0%'],
      }}
      transition={{ duration: 1.5 }}
      viewBox='0 0 1060 1900'
    >
      <rect width='1060' height='1900' fill='#78a863' />
    </motion.svg>
  );
};

export default Grass;
