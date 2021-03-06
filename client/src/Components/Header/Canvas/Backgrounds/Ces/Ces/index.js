import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ces } from '../../../../../../data/svg/ces';
import Loading from '../../../../../Loading';

const Path = React.lazy(() => import('../../../../../SVG'));

const Ces = () => {
  return (
    <motion.div
      initial={{ y: 4000, x: 4000 }}
      animate={{ y: 0, x: 75 }}
      transition={{ duration: 1, delay: 0.3 }}
      className='ces-container'
    >
      <motion.svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1060 1060'
        className='cespedes'
      >
        <Suspense fallback={<Loading />}>
          <Path group={ces} />
        </Suspense>
      </motion.svg>
    </motion.div>
  );
};

export default Ces;
