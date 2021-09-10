import React from 'react';
import { motion } from 'framer-motion';
import { crowd } from '../../../../../../data/svg/ces';
const Path = React.lazy(() => import('../../../../../SVG'));

const Crowd = () => {
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewBox='0 0 1060 1900'
    >
      <Path group={crowd} />
    </motion.svg>
  );
};

export default Crowd;
