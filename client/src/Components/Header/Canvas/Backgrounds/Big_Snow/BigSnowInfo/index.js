import React, { Suspense } from 'react';
import { motion } from 'framer-motion';

const Grid = React.lazy(() => import('@material-ui/core/Grid'));

const BigSnowInfo = () => {
  return (
    <>
      <Suspense fallback=''>
        <Grid item xs={12}>
          <motion.div
            className='title'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 2 } }}
            exit={{ opacity: 0.5, y: 100, transition: { duration: 1 } }}
            style={{ justifyContent: 'flex-end' }}
          >
            {['b', 'i', 'g', '\xa0', 's', 'n', 'o', 'w'].map((letter, i) => (
              <motion.span
                key={i}
                initial={{ scale: 4.4 }}
                animate={{ scale: [2.2, 1], transition: { duration: 2 } }}
                exit={{ scale: [1, 2.2], transition: { duration: 1 } }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            className='media-wrap'
            initial={{ filter: 'grayscale(100%)', opacity: 0, x: -400 }}
            animate={{
              filter: ['grayscale(100%)', 'grayscale(50%)', 'grayscale(0%)'],
              opacity: 1,
              x: 0,
              transition: { duration: 2.5 },
            }}
            exit={{
              filter: 'grayscale(100%)',
              opacity: 0,
              x: -600,
              transition: { duration: 1.2 },
            }}
          >
            <img
              src='https://res.cloudinary.com/yup-schlepp/image/upload/v1631125404/yondav/big_snow/solo_o3aelz.jpg'
              alt='stage'
            />
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className='text-content' style={{ justifyContent: 'center' }}>
            <motion.p
              className='big-snow-desc'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              In August of 2011, I signed a lease for a storefront in East
              Williamsburg with a few of my closest friends and collaborators
              with the goal of creating an all ages art space that would allow
              us to further emerce ourselves in a community of artists and
              musicians throughout Brooklyn. Our goal was to provide a space
              that would embrace and prioritize artists, hosting their events
              and offering the space as a canvas at no cost to the artist.
              Rather we found ways to generate revenue to pay the artists as
              much as possible.
            </motion.p>
            <motion.p
              className='big-snow-desc'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 1.5 } }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              The space was also our home with a full residence in the back of
              the building complete with three bedrooms and a closed off
              bathroom. We spent our days maintaining the space and working on
              programming or hosting a variety of productions from music video
              shoots to recording sessions or even TV shoots for networks like
              MTV.
            </motion.p>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className='text-content' style={{ justifyContent: 'center' }}>
            <motion.p
              className='big-snow-desc'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 2 } }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              All of us having a background in audio, we set out to establish a
              high quality audio experience for all of our performers in a
              modest space and even recorded a few records in the building. We
              managed to fill our calendar with events almost every night,
              hosting bands and artists from around the world.
            </motion.p>
            <motion.p
              className='big-snow-desc'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 1.5 } }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              A revolving door of visual artists used the space at their will to
              work on their installations and paintings throughout the space. We
              went so far as to open up the ceiling of the space to artists
              everywhere, providing them with the size of the tiles in our drop
              ceiling and encouraging them to bring or send us paintings on
              ceiling tiles.
            </motion.p>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            className='media-wrap'
            initial={{ filter: 'grayscale(100%)', opacity: 0, x: -400 }}
            animate={{
              filter: ['grayscale(100%)', 'grayscale(50%)', 'grayscale(0%)'],
              opacity: 1,
              x: 0,
              transition: { duration: 2.5, delay: 1 },
            }}
            exit={{
              filter: 'grayscale(100%)',
              opacity: 0,
              x: -600,
              transition: { duration: 1.2 },
            }}
          >
            <img
              src='https://res.cloudinary.com/yup-schlepp/image/upload/v1631125404/yondav/big_snow/stage_view_lht675.jpg'
              alt='crowd'
            />
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            className='media-wrap'
            initial={{ filter: 'grayscale(100%)', opacity: 0, x: -400 }}
            animate={{
              filter: ['grayscale(100%)', 'grayscale(50%)', 'grayscale(0%)'],
              opacity: 1,
              x: 0,
              transition: { duration: 2.5, delay: 1.5 },
            }}
            exit={{
              filter: 'grayscale(100%)',
              opacity: 0,
              x: -600,
              transition: { duration: 1.2 },
            }}
          >
            <img
              style={{ width: '70%' }}
              src='https://res.cloudinary.com/yup-schlepp/image/upload/v1631125404/yondav/big_snow/peace_f8gztj.jpg'
              alt='peace'
            />
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className='text-content' style={{ justifyContent: 'center' }}>
            <motion.p
              className='big-snow-desc'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 2 } }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              In July of 2013 during a sunday night show, I was told about some
              suspicious activity on the street so I took a step outside to take
              a look for myself. I had one foot out the door when I heard a
              blast and realized I had been hit in the arm by a bullet. Of
              course we promptly shut down the show and I was taken to the
              hospital.
            </motion.p>
            <motion.p
              className='big-snow-desc'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 2.3 } }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              Unfortunately that would mark the end of our run. It was clear
              that we weren't a target but it felt wrong to bring people back to
              the space after such a public scare. I walked away with three
              wounds from a single gunshot, a shattered left forearm and quite a
              bit of nerve damage and embarked on what would be a successful
              recovery. You can read more about it{' '}
              <a
                href='https://www.villagevoice.com/2013/07/22/big-snow-buffalo-lodge-closes-for-good-after-co-owner-yoni-david-is-shot/'
                target='_blank'
                rel='noopener noreferrer'
                className='nav-link'
              >
                here
              </a>
              .
            </motion.p>
            <motion.p
              className='big-snow-desc'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 2.3 } }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              Big Snow opened on October 27, 2011 and closed on July 17, 2013.
            </motion.p>
          </div>
        </Grid>
      </Suspense>
    </>
  );
};

export default BigSnowInfo;
