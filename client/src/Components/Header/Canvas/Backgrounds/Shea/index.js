import React from 'react';
import { motion } from 'framer-motion';
import { paths } from './content';
const Path = React.lazy(() => import('../../../../SVG'));

const Shea = () => {
  const trans = (defDuration, defDelay, fillDuration, fillDelay) => {
    return {
      default: {
        duration: defDuration,
        delay: defDelay,
      },
      fill: {
        duration: fillDuration,
        ease: [1, 0, 0.8, 0],
        delay: fillDelay,
      },
    };
  };
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1060 1900'
      initial={{ y: -4000 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <rect width='100%' height='100%' fill='#00b6ce' />
      <Path group={paths(trans)} />
    </motion.svg>
  );
};

export default Shea;
