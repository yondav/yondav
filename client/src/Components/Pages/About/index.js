import React, { useState, Suspense } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Title from '../../Title';
import * as All from '../../Logos';
import './about.css';

const ContactModal = React.lazy(() => import('../../Contact_Modal'));

const About = ({ darkMode }) => {
  const [contact, setContact] = useState(false);

  const handleClose = () => setContact(false);

  const { scrollYProgress } = useViewportScroll();
  const opacityAnim = useTransform(
    scrollYProgress,
    [0, 0.75, 0.8],
    [0, 0.3, 1]
  );
  const saturate = useTransform(
    scrollYProgress,
    [0.79, 0.8],
    ['grayscale(100%)', 'grayscale(0%)']
  );
  const xPosAnim = useTransform(
    scrollYProgress,
    [0, 0.75, 0.8],
    [-1000, -500, 0]
  );
  return (
    <section id='about'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={6}
          style={{
            margin: 0,
            width: '100%',
          }}
        >
          <Grid item xs={12}>
            <Title word={['a', 'b', 'o', 'u', 't']} y={0.8} start={0.75} />
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              className='headshot'
              style={{
                opacity: opacityAnim,
                x: xPosAnim,
                filter: saturate,
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
              style={{ opacity: opacityAnim, x: xPosAnim }}
            >
              <p>
                I’m Yoni David - Full Stack Developer living in Queens, New
                York. I'm passioniate about design and animation while I
                prioritize intuitive and dynamic user experiences.
              </p>
              <p>
                I have a background in a range industries from music as a
                performer and audio engineer to real estate as a broker and
                co-founder of a boutique Brooklyn based agency.
              </p>
              <p>
                Motivated person, problem solver, independent employee and
                enthusiastic collaborator. My time away from the web is spent
                with my family, playing music or complaining about the New York
                Mets. Interested in the entire development spectrum and
                expanding my understanding of the technologies we use every day.
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
              style={{ opacity: opacityAnim, x: xPosAnim }}
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
      {contact && (
        <Suspense fallback=''>
          <ContactModal open={contact} handleClose={handleClose} />
        </Suspense>
      )}
    </section>
  );
};

export default About;