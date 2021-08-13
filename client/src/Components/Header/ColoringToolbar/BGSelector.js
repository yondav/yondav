import React from 'react';
import { motion } from 'framer-motion';
import { backgrounds } from './backgrounds';

const BGSelector = ({ setBg }) => {
  return (
    <div className='bg-selector'>
      {backgrounds.map((bg) => {
        return (
          <motion.div
            className='bg-opt'
            onTap={() => setBg(bg.state)}
            initial={{ y: -600 }}
            animate={{ y: 0 }}
            transition={{ ease: 'easeIn', duration: 1 }}
          >
            <div className='bg-thumb-cont'>
              {bg.thumbnail && (
                <img
                  className='bg-thumbnail'
                  src={bg.thumbnail}
                  alt={bg.name}
                />
              )}
            </div>
            <span>{bg.name}</span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default BGSelector;
