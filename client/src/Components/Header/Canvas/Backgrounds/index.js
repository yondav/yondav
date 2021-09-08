import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './backgrounds.css';
import { backgrounds } from './backgrounds';
import { BsChevronLeft } from 'react-icons/bs';

const Ces = React.lazy(() => import('./Ces/Ces/index'));
const Joey = React.lazy(() => import('./Dogs/Joey'));
const Leo = React.lazy(() => import('./Dogs/Leo'));
const BGInfo = React.lazy(() => import('../BGInfo'));

const Background = ({ bg, info, setInfo }) => {
  const [viewPort, setViewPort] = useState(false);
  // const [info, setInfo] = useState(false);

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

  useEffect(() => {
    if (info) {
      window.scrollTo({
        top: document.querySelector('.canvas').offsetTop,
        left: 0,
      });
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = 'auto';
    }
  }, [info]);

  return (
    <>
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
                className: 'color-bg',
              })
            )}
          {bg === 'ces' && (
            <Suspense fallback=''>
              <Ces />
            </Suspense>
          )}
          {bg === 'dogs' && (
            <Suspense fallback=''>
              <Joey />
              <Leo />
            </Suspense>
          )}
          {(bg === 'shea' ||
            bg === 'ces' ||
            bg === 'big_snow' ||
            bg === 'tape' ||
            bg === 'dogs') && (
            <AnimatePresence>
              <motion.div
                layout
                className='bg-info'
                // animate={{ opacity: [0.5, 1, 0.5] }}
                // transition={{ repeat: Infinity, duration: 2, ease: 'easeIn' }}
              >
                <motion.div
                  style={{ display: 'flex', flexDirection: 'column' }}
                  onTap={() => setInfo(true)}
                >
                  <BsChevronLeft />
                  <BsChevronLeft />
                  <BsChevronLeft />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
      {/* <AnimatePresence>
        {info && <BGInfo bg={bg} setInfo={setInfo} />}
      </AnimatePresence> */}
    </>
  );
};

export default Background;
