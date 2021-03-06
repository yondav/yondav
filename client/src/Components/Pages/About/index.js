import React, { useState, useRef, useEffect, Suspense } from 'react';
import {
  motion,
  AnimatePresence,
  useViewportScroll,
  useTransform,
} from 'framer-motion';
import { AiOutlineClose, FiDownload } from 'react-icons/all';
import Title from '../../Title';
import * as All from '../../Logos';
import './about.css';
import Contact from './Contact';
import AnimatedLogo from './Animated_Logo';
import Loading from '../../Loading';
import res from '../../../Assets/yondav-dev-resume-2021.pdf';

const Resume = React.lazy(() => import('../../Resume'));
const Box = React.lazy(() => import('@material-ui/core/Box'));
const Grid = React.lazy(() => import('@material-ui/core/Grid'));

const About = ({ darkMode, isDesktop, resume, setResume }) => {
  const ref = useRef(100);
  const [contact, setContact] = useState(false);
  const [position, setPosition] = useState();

  useEffect(
    () =>
      window.addEventListener(
        'scroll',
        (e) =>
          ref.current !== 100 &&
          setPosition(
            (ref.current.offsetTop / document.body.clientHeight + 0.18).toFixed(
              2
            ) - 0
          )
      ),
    [setPosition, position, ref]
  );

  useEffect(() => {
    if (contact || resume) {
      window.scrollTo({ top: ref.current.offsetTop, left: 0 });
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = 'auto';
    }
  }, [contact, resume, ref]);

  const handleClose = () => setContact(false);

  const { scrollYProgress } = useViewportScroll(0);
  const opacityAnim = useTransform(
    scrollYProgress,
    [0, position - 0.25, position],
    [0, 0.3, 1]
  );
  const saturate = useTransform(
    scrollYProgress,
    [position - 0.25, position],
    ['grayscale(100%)', 'grayscale(0%)']
  );
  const xPosAnim = useTransform(
    scrollYProgress,
    [0, position - 0.25, position],
    [-1000, -500, 0]
  );
  return (
    <>
      <section ref={ref} id='about'>
        {position !== undefined && (
          <Suspense fallback={<Loading />}>
            <Box xs={{ flexGrow: 1 }}>
              <Grid container spacing={6} style={{ margin: 0, width: '100%' }}>
                <Grid item xs={12}>
                  <Title
                    word={['a', 'b', 'o', 'u', 't']}
                    y={position}
                    start={position / 2}
                    align={'flex-end'}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <motion.div
                    className='headshot'
                    style={{
                      opacity: !isNaN(opacityAnim) && opacityAnim,
                      filter: saturate,
                      x: isDesktop ? xPosAnim : 0,
                    }}
                  >
                    <img
                      src='https://res.cloudinary.com/yup-schlepp/image/upload/v1629773834/yondav/IMG_8005_3_s8bzue.jpg'
                      alt='yoni'
                    />
                  </motion.div>
                </Grid>
                <Grid item xs={12} md={6} className='bio-cont'>
                  <motion.div
                    className='bio'
                    style={{ opacity: !isNaN(opacityAnim) && opacityAnim }}
                  >
                    <p>
                      I???m Yoni David - Full Stack Developer living in Queens,
                      New York. I'm passionate about design and animation while
                      I prioritize intuitive and dynamic user experiences.
                    </p>
                    <p>
                      I have a background in a range industries from music as a
                      performer and audio engineer to real estate as a broker
                      and co-founder of a boutique Brooklyn based agency.
                    </p>
                    <p>
                      Motivated person, problem solver, independent employee and
                      enthusiastic collaborator. My time away from the web is
                      spent with my family, playing music or complaining about
                      the New York Mets. Interested in the entire development
                      spectrum and expanding my understanding of the
                      technologies we use every day.
                    </p>
                  </motion.div>
                  <div className='btn-cont'>
                    <motion.button
                      className='btn contact-btn'
                      onClick={() => setContact(true)}
                    >
                      Let's Chat
                    </motion.button>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <motion.div
                    className='bullets tech-cont'
                    style={{ opacity: !isNaN(opacityAnim) && opacityAnim }}
                  >
                    <div className='tech'>
                      {Object.values(All).map((logo, index) =>
                        React.createElement(logo, {
                          key: index,
                          width: '1.2rem',
                          height: '1.2rem',
                          color: false,
                          theme: darkMode,
                          primaryDark: '#f4f4f4',
                          primaryWhite: '#343434',
                          hover: 'colorize',
                          transition: 'ease-in',
                        })
                      )}
                    </div>
                    <p>
                      <a
                        href='https://github.com/yondav/react-logos'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='nav-link'
                      >
                        React Logo Library
                      </a>{' '}
                      coming soon
                    </p>
                  </motion.div>
                </Grid>
              </Grid>
            </Box>
          </Suspense>
        )}
      </section>
      <AnimatePresence>
        {contact && (
          <motion.div
            className='featured-app'
            style={{ top: ref.current.offsetTop, width: '100vw', padding: 0 }}
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: '100vh',
              transition: { duration: 1, ease: 'anticipate' },
            }}
            exit={{ height: 0, transition: { duration: 1, delay: 0.5 } }}
          >
            <Suspense fallback={<Loading />}>
              <Grid
                container
                spacing={0}
                style={{
                  margin: 0,
                  width: '100%',
                  height: '100%',
                }}
              >
                <AiOutlineClose
                  className='close contact-close'
                  onClick={() => setContact(false)}
                />
                <Grid
                  item
                  xs={12}
                  md={6}
                  style={isDesktop ? { height: '100%' } : { height: '50%' }}
                >
                  <AnimatedLogo />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  style={isDesktop ? { height: '100%' } : { height: '50%' }}
                >
                  <Contact handleClose={handleClose} />
                </Grid>
              </Grid>
            </Suspense>
          </motion.div>
        )}
        {resume && (
          <motion.div
            className='featured-app'
            style={{ top: ref.current.offsetTop, width: '100vw', padding: 0 }}
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: '100vh',
              transition: { duration: 1, ease: 'anticipate' },
            }}
            exit={{ height: 0, transition: { duration: 1, delay: 0.5 } }}
          >
            <AiOutlineClose
              className='close'
              onClick={() => setResume(false)}
            />
            <a
              href={res}
              download='yoni_david_resume_2021'
              className='resume-link'
              title='resume'
            >
              <FiDownload className='download' />
            </a>
            <Suspense fallback={<Loading />}>
              <Resume />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default About;
