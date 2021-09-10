import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { path } from '../../../../../data/svg/big_snow';

const Path = React.lazy(() => import('../../../../SVG'));

const BigSnow = () => {
  return (
    <div className='big-snow-wrap'>
      <motion.svg
        xmlns='http://www.w3.org/2000/svg'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewBox='0 0 1060 1900'
      >
        <g>
          <Suspense fallback=''>
            <Path group={path} />
          </Suspense>
        </g>
      </motion.svg>
    </div>
  );
};

export default BigSnow;
