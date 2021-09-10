import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { leo } from '../../../../../../data/svg/dogs';

const Path = React.lazy(() => import('../../../../../SVG'));

const Leo = () => {
  return (
    <motion.div
      className='leo-container'
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 1, delay: 1.8 }}
    >
      <svg
        className='leo'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1060 1900'
      >
        <Suspense fallback=''>
          <Path group={leo} />
        </Suspense>
      </svg>
    </motion.div>
  );
};

export default Leo;
