import React from 'react';
import { motion } from 'framer-motion';
import { links } from './links';
import { IoIosPaw } from 'react-icons/io';

const Grid = React.lazy(() => import('@material-ui/core/Grid'));

const DogInfo = () => {
  return (
    <>
      <Grid item xs={12}>
        <motion.div
          className='title'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 2 } }}
          exit={{ opacity: 0.5, y: 100, transition: { duration: 1 } }}
          style={{ justifyContent: 'flex-end' }}
        >
          {['d', 'o', 'g', 'd', 'a', 'z', 'e'].map((letter, i) => (
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
            src='https://res.cloudinary.com/yup-schlepp/image/upload/v1630818162/yondav/yoni_dog_2_vjpln7.jpg'
            alt='joey'
          />
        </motion.div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className='text-content'>
          <div className='tag-wrap'>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 2, delay: 0.25 },
              }}
              exit={{
                opacity: 0.5,
                x: 100,
                transition: { duration: 1, delay: 0.2 },
              }}
              className='tag'
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  scale: [2.2, 1],
                  transition: { duration: 1, delay: 0.5 },
                }}
                exit={{
                  opacity: 0,
                  scale: 2.2,
                  transition: { duration: 1, delay: 0.2 },
                }}
              >
                our furry friends are always there for us
              </motion.span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 2, delay: 0.5 },
              }}
              exit={{
                opacity: 0.5,
                x: -100,
                transition: { duration: 1, delay: 0.2 },
              }}
              className='tag-2'
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1, delay: 1.75 },
                }}
                exit={{ opacity: 0, transition: { duration: 1, delay: 0.5 } }}
                transition={{ duration: 1, delay: 1.75 }}
              >
                be there for them
              </motion.span>
            </motion.div>
          </div>
          <div className='adopt-links'>
            <span className='tag'>Resources</span>
            <ul>
              {links.map((link, i) => (
                <li key={i}>
                  <IoIosPaw />
                  <a
                    href={link.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='nav-link'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default DogInfo;
