import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import './title.css';

const Title = ({ word, y, start }) => {
  const { scrollYProgress } = useViewportScroll();
  const opacityAnim = useTransform(scrollYProgress, [0, start, y], [0, 0.1, 1]);
  const scaleAnim = useTransform(scrollYProgress, [0, start, y], [4.4, 2.2, 1]);
  const yPosAnim = useTransform(scrollYProgress, [0, start, y], [200, 100, 0]);

  return (
    <motion.div className='title' style={{ opacity: opacityAnim }}>
      {word.map((letter, i) => (
        <motion.span key={i} style={{ scale: scaleAnim, y: yPosAnim }}>
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default Title;
