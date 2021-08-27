import React, { useState } from 'react';
import {
  motion,
  useViewportScroll,
  useTransform,
  AnimatePresence,
} from 'framer-motion';

const Grid = React.lazy(() => import('@material-ui/core/Grid'));

const Thumbnails = ({ app, isDesktop, opacityAnim, saturate, xPosAnim }) => {
  const [hover, setHover] = useState(false);
  return (
    <Grid item xs={12} sm={6} key={app.id}>
      <motion.div
        className='thumb-wrap'
        style={{
          opacity: opacityAnim,
          filter: saturate,
          x: isDesktop ? xPosAnim : 0,
        }}
      >
        <div
          className='thumbnail'
          onMouseEnter={(e) => {
            e.currentTarget.firstChild.src = app.gif;
            setHover(true);
          }}
          onMouseLeave={(e) => {
            e.currentTarget.firstChild.src = app.thumbnail;
            setHover(false);
          }}
        >
          <img src={app.thumbnail} alt={app.app} />
          <AnimatePresence>
            {hover && (
              <>
                <motion.div
                  className='thumb-id'
                  initial={{ x: 1000 }}
                  animate={{ x: 0 }}
                  exit={{ x: -4000 }}
                  transition={{ duration: 1, delay: 0.5, ease: 'anticipate' }}
                >
                  <h1>{app.id}</h1>
                </motion.div>
                <motion.div
                  key={`${app.app}-overlay`}
                  className='thumbnail-overlay'
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.25,
                    ease: 'anticipate',
                  }}
                >
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    {app.app}
                  </motion.h1>
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                  >
                    {app.tag}
                  </motion.h2>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </Grid>
  );
};

export default Thumbnails;
