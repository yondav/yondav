import React from 'react';
import { motion } from 'framer-motion';
import YoutubeEmbed from '../../../../../YoutubeEmbed';

const Grid = React.lazy(() => import('@material-ui/core/Grid'));

const CesInfo = () => {
  return (
    <>
      <Grid item xs={12}>
        <motion.div
          className='title'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0.5, y: 100 }}
          transition={{ duration: 2 }}
          style={{ justifyContent: 'flex-end' }}
        >
          {['c', 'e', 's', 'p', 'e', 'd', 'e', 's'].map((letter, i) => (
            <motion.span
              key={i}
              initial={{ scale: 4.4 }}
              animate={{ scale: [2.2, 1] }}
              exit={{ scale: [1, 2.2] }}
              transition={{ duration: 2 }}
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
            transition: { duration: 1.5 },
          }}
        >
          <YoutubeEmbed embedId='69ts-dFvGGg' />
        </motion.div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className='text-content'>
          <div className='tag-wrap'>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0.5, x: 100 }}
              transition={{ duration: 2, delay: 0.25 }}
              className='tag'
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: [2.2, 1] }}
                exit={{ opacity: 0, scale: 2.2 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <em>That guy's phone is going to blow up.</em>
              </motion.span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0.5, x: -100 }}
              transition={{ duration: 2, delay: 1.5 }}
              className='tag-2'
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: 1.75 }}
              >
                'DUDE, you just got ran over by Cespedes!'
              </motion.span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0.5, x: 100 }}
              transition={{ duration: 2, delay: 1.75 }}
              className='tag'
              style={{ justifyContent: 'flex-end' }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: [2.2, 1] }}
                exit={{ opacity: 0, scale: 2.2 }}
                transition={{ duration: 1, delay: 2 }}
              >
                -Ron Darling
              </motion.span>
            </motion.div>
          </div>
          <div className='ces-desc'>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 3 } }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              ...and that it did. Perhaps the most personally notable moment of
              my fandom came when star outfielder Yoenis Cespedes went diving
              for a foul ball that should have fallen in my lap. While neither
              of us made the play, I walked away with a <em>different</em> ball,
              signed by La Potencia himself and I made my way onto a pretty
              notable highlight reel that persisted through most of the season.
            </motion.p>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default CesInfo;
