import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { backgrounds } from './backgrounds';
import './backgrounds.css';
import Ces from './Ces';

const Background = ({ bg }) => {
  const [viewPort, setViewPort] = useState(false);

  const updateMedia = () => {
    if (window.innerWidth > 989) {
      setViewPort({ width: 990, height: 990, rect: 1060 });
    }
    if (window.innerWidth > 767) {
      setViewPort({ width: 767, height: 767, rect: 1060 });
    }
    if (window.innerWidth < 767) {
      setViewPort({ width: 415, height: 415, rect: 1060 });
    }
  };

  let color = backgrounds.colors.filter(
    (background) => background.state === bg
  );

  let illustration = backgrounds.illustrations.filter(
    (background) => background.state === bg
  );

  useEffect(() => {
    console.log(bg, color, illustration);
    if (window.innerWidth) {
      updateMedia();
    }

    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, [bg]);

  return (
    <div className='background-container'>
      <div className='background'>
        {color &&
          color.map((el) => (
            <AnimatePresence key={el.name}>
              <motion.div
                initial={el.element.initial}
                animate={el.element.animate}
                transition={el.element.transition}
                exit={{ opacity: 0 }}
                style={el.element.style}
                className='color-bg'
              />
            </AnimatePresence>
          ))}
        {illustration &&
          illustration.map((el, index) =>
            React.createElement(el.element, {
              key: index,
              width: viewPort.width,
              height: viewPort.height,
              rect: viewPort.rect,
            })
          )}
        {bg === 'ces' && <Ces />}
      </div>
    </div>
  );
};

export default Background;
