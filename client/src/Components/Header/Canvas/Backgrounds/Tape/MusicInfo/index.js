import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../../../../../data/pages/music';

const Grid = React.lazy(() => import('@material-ui/core/Grid'));

const MusicInfo = () => {
  return (
    <>
      {projects.map((project, i) => (
        <Grid item xs={12} key={i}>
          <Grid container spacing={6} style={{ margin: 0, width: '100%' }}>
            <Grid item xs={12}>
              <motion.div
                className='title'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 2 } }}
                exit={{ opacity: 0.5, y: 100, transition: { duration: 1 } }}
                style={{ justifyContent: 'flex-end' }}
              >
                {project.band.map((letter, i) => (
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
            <Grid item xs={12}>
              <div className='albums'>
                {project.albums.map((album, i) => (
                  <motion.div
                    key={i}
                    className='album-wrap'
                    initial={{ filter: 'grayscale(100%)', opacity: 0, x: -400 }}
                    animate={{
                      filter: [
                        'grayscale(100%)',
                        'grayscale(50%)',
                        'grayscale(0%)',
                      ],
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
                    <img src={album.thumb} alt={album.name} className='album' />
                    <div className='album-info-wrap'>
                      <div className='album-info'>
                        <span className='tag'>{album.name}</span>
                        <div className='album-name'>
                          <span>{album.release.date}</span>
                          <div className='album-medium'>
                            {album.release.medium.map((med, i) => (
                              <span key={i}>{med}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className='album-stream'>
                        {album.listen.map((el, i) => (
                          <a
                            key={i}
                            href={el.link}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            {React.createElement(el.el, {
                              className: 'streams',
                              style: {
                                margin: '0 .25rem',
                                color: el.color,
                              },
                            })}
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default MusicInfo;
