import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <motion.div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '5em',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className='y'
        animate={{ y: [-50, 0] }}
        transition={{ duration: 1, delay: 0.2, repeat: Infinity }}
      >
        .
      </motion.div>
      <motion.div
        className='y'
        animate={{ y: [-50, 0] }}
        transition={{ duration: 1, delay: 0.4, repeat: Infinity }}
      >
        y
      </motion.div>
      <motion.div
        className='y'
        animate={{ y: [-50, 0] }}
        transition={{ duration: 1, delay: 0.6, repeat: Infinity }}
      >
        o
      </motion.div>
      <motion.div
        className='y'
        animate={{ y: [-50, 0] }}
        transition={{ duration: 1, delay: 0.8, repeat: Infinity }}
      >
        n
      </motion.div>
      <motion.div
        className='d'
        animate={{ y: [-50, 0] }}
        transition={{ duration: 1, delay: 1, repeat: Infinity }}
      >
        d
      </motion.div>
      <motion.div
        className='d'
        animate={{ y: [-50, 0] }}
        transition={{ duration: 1, delay: 1.2, repeat: Infinity }}
      >
        a
      </motion.div>
      <motion.div
        className='d'
        animate={{ y: [-50, 0] }}
        transition={{ duration: 1, delay: 1.4, repeat: Infinity }}
      >
        v
      </motion.div>
    </motion.div>
  );
};

export default Loading;
