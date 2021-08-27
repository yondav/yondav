import React, { useState, useEffect, useRef, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiGithubLine, VscLinkExternal, AiOutlineClose } from 'react-icons/all';

const Grid = React.lazy(() => import('@material-ui/core/Grid'));

const Thumbnails = ({
  app,
  isDesktop,
  opacityAnim,
  saturate,
  xPosAnim,
  darkMode,
  position,
}) => {
  const [hover, setHover] = useState(false);
  const [feature, setFeature] = useState(false);
  const featured = useRef();

  useEffect(() => {
    if (feature) {
      window.scrollTo({ top: position.offsetTop, left: 0 });
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = 'auto';
    }
    // feature && window.scrollTo({ top: position.offsetTop - 90, left: 0 });
  }, [feature, position]);
  return (
    <>
      {!feature && (
        <Suspense>
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
                onClick={() => setFeature(true)}
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
                        transition={{
                          duration: 1,
                          delay: 0.5,
                          ease: 'anticipate',
                        }}
                      >
                        <h1>{app.id}</h1>
                      </motion.div>
                      <motion.div
                        key={`${app.app}-overlay`}
                        className='thumbnail-overlay'
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: '30%', opacity: 1 }}
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
                          <em>{app.tag}</em>
                        </motion.h2>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </Grid>
        </Suspense>
      )}
      <AnimatePresence>
        {feature && (
          <Suspense>
            <Grid item xs={12}>
              <motion.div
                ref={featured}
                className='featured-app'
                style={{ top: position.offsetTop }}
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  height: '100vh',
                  transition: { duration: 1, ease: 'anticipate' },
                }}
                exit={{ y: 800, transition: { duration: 1, delay: 1 } }}
              >
                <AiOutlineClose
                  className='close'
                  onClick={() => setFeature(false)}
                />
                <motion.div
                  className='featured-logo'
                  initial={{ opacity: 0, scale: 4 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ scale: 4, opacity: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  {app.logo()}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className='featured-body'
                >
                  <div className='mockup'>
                    <img src={app.mockup} alt={app.app} />
                  </div>
                  <div className='desc'>
                    <div className='featured-header'>
                      <div className='featured-title'>
                        <motion.h1
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: 1,
                            transition: { duration: 1, delay: 0.5 },
                          }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1 }}
                        >
                          {app.app}
                        </motion.h1>
                        <motion.h6
                          initial={{ x: 1000 }}
                          animate={{ x: 0 }}
                          exit={{ x: 1000 }}
                          transition={{ duration: 1, delay: 0.5 }}
                        >
                          <em>{app.tag}</em>
                        </motion.h6>
                      </div>
                    </div>
                    {app.desc()}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className='featured-icons'
                >
                  <div className='featured-links'>
                    <a
                      className='nav-link'
                      href={app.repo}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <div className='repo'>
                        <RiGithubLine />
                        <span>Repo</span>
                      </div>
                    </a>
                    <a
                      className='nav-link'
                      href={app.deployed}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {app.deployed && (
                        <div className='deployed'>
                          <VscLinkExternal />
                          <span>Deployed</span>
                        </div>
                      )}
                    </a>
                  </div>
                  <div className='featured-tech'>
                    {app.tech.map((icon, i) =>
                      React.createElement(icon, {
                        key: i,
                        width: !isDesktop ? '1.2rem' : '2rem',
                        height: !isDesktop ? '1.2rem' : '2rem',
                        color: false,
                        theme: darkMode,
                        primaryDark: '#f4f4f4',
                        primaryWhite: '#343434',
                        hover: 'colorize',
                        transition: 'ease-in',
                      })
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </Grid>
          </Suspense>
        )}
      </AnimatePresence>
    </>
  );
};

export default Thumbnails;
