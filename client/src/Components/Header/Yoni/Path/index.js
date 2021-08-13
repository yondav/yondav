import React from 'react';
import { motion } from 'framer-motion';
import { icon } from '../../../../Utils/animations';

const Path = ({ tap, stroke, d, animate, transition, clear, erase }) => {
  const classification =
    clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : 'move';

  return (
    <motion.path
      className={classification}
      onTap={tap}
      stroke={stroke}
      d={d}
      variants={icon}
      initial='hidden'
      animate={icon.visible(animate)}
      transition={transition}
      transform='translate(-199.49 -165.5)'
    ></motion.path>
  );
};

export default Path;
