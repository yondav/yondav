import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { icon } from '../../../../../Utils/animations';

const Path = ({ group, customize, erase }) => {
  const cursor = customize === 'color' ? (!erase ? 'bucket' : 'eraser') : '';

  return (
    <>
      {group.map((path) => (
        <Suspense>
          <motion.path
            className={cursor}
            variants={icon}
            transform='translate(-199.49 -165.5)'
            initial='hidden'
            //
            onTap={path.tap ? path.tap : null}
            stroke={path.stroke}
            d={path.d}
            animate={icon.visible(path.animate)}
            transition={path.transition}
          ></motion.path>
        </Suspense>
      ))}
    </>
  );
};

export default Path;
