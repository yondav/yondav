import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const bubbles = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const bubble = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const Bubbles = ({ isLoaded, setAbout }) => {
  const test = () => (isLoaded ? setAbout(true) : console.log('fuck off'));

  return (
    <div className='bubbles' onClick={test}>
      <motion.svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 262.79 239.86'
        variants={bubbles}
        initial='hidden'
        animate='visible'
      >
        <motion.path
          d='M12.89,595.74c5.05-.06,13.2,5.35,15.13,10.06a8.4,8.4,0,0,1-4.69,11.14c-2.61,1.11-4.84,2.13-6.65,4.61-2.3,3.16-8.36,3.36-12.5,1.14-3.8-2-4.93-5.09-3.71-9.21a10.22,10.22,0,0,0,.25-3.94C-.18,601.41,4.69,595.85,12.89,595.74ZM6.8,612.68c-.26,3.07.74,4.9,2.9,5.59,2.93.92,3.29-1.23,3.86-3.17.7-2.39,2.74-1.27,4.21-1.52,4.94-.85,7-5.9,3.91-9.74-2.39-3-7.64-3.74-12-1.71-3.74,1.76-5.59,4.14-2.81,8.21C7.26,610.86,6.85,611.89,6.8,612.68Z'
          variants={bubble}
          transform='translate(0 -384.3)'
          fill='var(--pr-black)'
        />
        <motion.path
          d='M39.8,598.4c-8.39,0-12.06-4.21-10.92-12.69a3.68,3.68,0,0,0-.41-2.32c-2.06-4-.91-7.44,2.21-10.28,3.34-3,7.29-4.15,11.45-2a11.7,11.7,0,0,0,5.68,1.13,12.49,12.49,0,0,1,11.72,7.06,8.2,8.2,0,0,1-3.75,11.4c-3.23,1.55-6.53,2.65-9,5.58C45.15,598.16,42.36,598.43,39.8,598.4Zm13.93-14.75c0-5.93-4.73-8.6-9.79-5.65-1.68,1-3.28,2.13-4.36-.55-.75-1.87-1.67-3.49-4-2.45s-2.2,3.22-1.76,5.2c.51,2.26,1.5,4.12,1,6.86-.44,2.49,2.44,4.84,5.5,5.51,1.49.33,3.38.72,3.48-1.43.19-4.06,3-3.64,5.61-3.72S54.18,586.79,53.73,583.65Z'
          variants={bubble}
          transform='translate(0 -384.3)'
          fill='var(--pr-black)'
        />
        <motion.path
          d='M50.26,418.05c6.9,2.61,7.27-3.86,9.11-8,5.83-13.17,25-23.55,39-21a14.69,14.69,0,0,1,7.28,3c3.09,2.67,6.07,2.19,8.94-.24,12.68-10.74,26.11-8.48,39.62-2.13a4.57,4.57,0,0,0,4.86-.12c11.34-5.87,22.51-5.38,33,1.85,5.33,3.66,10.27,7.92,15.25,12.08,3.21,2.69,3.58,6.78,3.77,10.53.21,4,2,5.34,5.68,5.91A110.55,110.55,0,0,1,229,422.82c22.65,6.27,31.08,23,30.67,44.41-.15,7.52-1.64,14.48,1.1,22.4,3.88,11.25,1.85,23.24-2.55,34.58-6,15.49-21.55,25.68-39.26,25.37-1.82,0-3.41-.38-4.67,1.73-8.69,14.51-22.77,19.88-38.51,21.61-13.44,1.49-26.63-.15-38.78-6.64-2.37-1.26-3.91-.35-5.9.59-15.15,7.15-31,11.11-47.84,9.3-7.66-.83-14.78-3.74-21.69-7.11-9-4.38-14.85-11.1-16.22-21.22-.48-3.6-2-5.37-5.82-6.58C22.6,535.91,12,524.29,8,507c-2.47-10.69,1.46-20.12,7.67-28.49a13.46,13.46,0,0,0,2.57-12.27,46.8,46.8,0,0,1,2.61-29.82C26.24,424.22,36.21,417.83,50.26,418.05ZM173.5,566.19A51.41,51.41,0,0,0,192.17,563c8-2.93,14.44-7.64,17-16.19.68-2.23,1.86-2.66,3.92-2.84,5.62-.51,11.28-1,16.83-2,8.7-1.62,16.77-4.54,20.94-13.4a66.89,66.89,0,0,0,6.35-24.47c.37-5.7-.66-11-4.25-15.5-2.46-3.07-2.74-6-1.24-9.62s1.81-7.77,2.09-11.75c1.68-23.45-17-44.13-39-43.1-7.78.36-8.64-.25-9.58-8.28-.71-6-2.47-11.31-7.43-15.21a47,47,0,0,0-15.64-8.56c-8-2.39-15.78-3-22.33,3.53-1.69,1.71-3.18,1.15-4.88.26-3.83-2-7.66-4.12-11.93-4.95-9.9-1.9-19.71-1.95-27.85,5.05-4.79,4.12-5.75,4.74-11.07,1.23-3.52-2.31-7-4.23-11.46-4.16-13.22.2-25.74,9.12-30.58,23.24-1.74,5-3.9,6.39-9.14,6.55-25,.79-39,23.94-28.58,47,1.49,3.29.9,5.62-1.65,7.94-5.61,5.1-8.1,11.68-8.41,19.1-.85,20.39,9.82,34.66,30.52,40.44,3.42,1,5.24,2.46,5.42,5.89.64,12.37,8.32,19,18.92,23.22,12,4.78,24.38,5.1,36.87,3.39,8.54-1.16,17.4-2.48,23.94-8.76,3.23-3.11,5.84-3.62,9.65-1.82C149.73,564,160.43,566.13,173.5,566.19Z'
          variants={bubble}
          transform='translate(0 -384.3)'
          fill='var(--pr-black)'
        />
        <g>
          <motion.path
            d='M94.79,493.91a.47.47,0,0,1-.16.39,1,1,0,0,1-.42.2,3.35,3.35,0,0,1-.71.06,3.59,3.59,0,0,1-.72-.06,1.08,1.08,0,0,1-.47-.2.5.5,0,0,1-.16-.39V491.4a11.48,11.48,0,0,1-3.35,2.54,8.47,8.47,0,0,1-3.79.89,10.13,10.13,0,0,1-3.18-.46,6.47,6.47,0,0,1-2.38-1.32A5.84,5.84,0,0,1,78,491a6.9,6.9,0,0,1-.52-2.74,6.27,6.27,0,0,1,3-5.56,10.78,10.78,0,0,1,3.41-1.38,19.57,19.57,0,0,1,4.43-.46h3.59V478.9a9.75,9.75,0,0,0-.3-2.55,4.47,4.47,0,0,0-1-1.86,4.13,4.13,0,0,0-1.74-1.12A8,8,0,0,0,86.2,473a9.36,9.36,0,0,0-2.69.36,13,13,0,0,0-2.09.81,14.33,14.33,0,0,0-1.48.81,2,2,0,0,1-.84.36.76.76,0,0,1-.27,0,.54.54,0,0,1-.21-.19,1,1,0,0,1-.13-.35,4.71,4.71,0,0,1,0-1.34,1.36,1.36,0,0,1,.39-.63,4.76,4.76,0,0,1,1.11-.73,13.24,13.24,0,0,1,1.83-.78,14.1,14.1,0,0,1,2.22-.59,13,13,0,0,1,2.4-.22,11.65,11.65,0,0,1,3.9.56,6.2,6.2,0,0,1,2.58,1.6,6,6,0,0,1,1.41,2.58,13.14,13.14,0,0,1,.42,3.47Zm-3-10.63H87.72a13.86,13.86,0,0,0-3.14.32,6.88,6.88,0,0,0-2.24.95A4,4,0,0,0,81,486a4.46,4.46,0,0,0-.44,2,4,4,0,0,0,1.24,3.1,4.88,4.88,0,0,0,3.47,1.15,6.4,6.4,0,0,0,3.3-.9,14.81,14.81,0,0,0,3.25-2.81Z'
            variants={bubble}
            transform='translate(0 -384.3)'
          />
          <motion.path
            d='M122.68,482.36a19.65,19.65,0,0,1-.62,5.19,11.13,11.13,0,0,1-1.85,3.92,8.4,8.4,0,0,1-3,2.49,9.48,9.48,0,0,1-4.15.87,8.33,8.33,0,0,1-1.93-.21,6.84,6.84,0,0,1-1.73-.68,12.05,12.05,0,0,1-1.73-1.2c-.59-.48-1.22-1.06-1.91-1.74v2.91a.56.56,0,0,1-.07.3.47.47,0,0,1-.25.2,1.61,1.61,0,0,1-.42.11,3.77,3.77,0,0,1-.63,0,3.85,3.85,0,0,1-.63,0,1.34,1.34,0,0,1-.42-.11.42.42,0,0,1-.23-.2.67.67,0,0,1-.06-.3V460.35a.64.64,0,0,1,.06-.28.51.51,0,0,1,.24-.21,1.5,1.5,0,0,1,.46-.13,7,7,0,0,1,.71,0,7.18,7.18,0,0,1,.73,0,1.43,1.43,0,0,1,.45.13.63.63,0,0,1,.24.21.53.53,0,0,1,.07.28v14.07a20,20,0,0,1,2-1.89,11.35,11.35,0,0,1,1.89-1.22,8.41,8.41,0,0,1,1.83-.66,8.88,8.88,0,0,1,1.88-.19,8.57,8.57,0,0,1,4.17.94A7.88,7.88,0,0,1,120.6,474a11.31,11.31,0,0,1,1.59,3.78A20.69,20.69,0,0,1,122.68,482.36Zm-3.11.47a21.87,21.87,0,0,0-.3-3.66,10.53,10.53,0,0,0-1-3.14,6.12,6.12,0,0,0-1.92-2.2,5,5,0,0,0-3-.83,6.45,6.45,0,0,0-1.73.24,6.75,6.75,0,0,0-1.75.83,12.14,12.14,0,0,0-1.86,1.48,22.62,22.62,0,0,0-2,2.25v9.81a19.21,19.21,0,0,0,3.6,3.48,6.26,6.26,0,0,0,3.6,1.2,5,5,0,0,0,2.94-.83,6.53,6.53,0,0,0,2-2.18,9.91,9.91,0,0,0,1.12-3A17,17,0,0,0,119.57,482.83Z'
            variants={bubble}
            transform='translate(0 -384.3)'
          />
          <motion.path
            d='M149.45,482.41a16.92,16.92,0,0,1-.69,4.95,11.33,11.33,0,0,1-2.08,3.94,9.52,9.52,0,0,1-3.45,2.6,11.63,11.63,0,0,1-4.81.93,11.76,11.76,0,0,1-4.62-.83,8.79,8.79,0,0,1-3.31-2.39,10.14,10.14,0,0,1-2-3.77,17.57,17.57,0,0,1-.66-5,17.27,17.27,0,0,1,.68-4.95,11.19,11.19,0,0,1,2.07-3.93,9.36,9.36,0,0,1,3.45-2.57,11.69,11.69,0,0,1,4.83-.92,12,12,0,0,1,4.62.82,8.55,8.55,0,0,1,3.3,2.38,10.36,10.36,0,0,1,2,3.77A17.1,17.1,0,0,1,149.45,482.41Zm-3.13.27a17.33,17.33,0,0,0-.38-3.66A9,9,0,0,0,144.7,476a6.22,6.22,0,0,0-2.34-2.12,7.74,7.74,0,0,0-3.66-.78,7.85,7.85,0,0,0-3.49.72,6.42,6.42,0,0,0-2.4,2,8.79,8.79,0,0,0-1.39,3,15,15,0,0,0-.44,3.76,17.72,17.72,0,0,0,.37,3.7,8.88,8.88,0,0,0,1.24,3.07,6.25,6.25,0,0,0,2.35,2.09,8.82,8.82,0,0,0,7.14.05,6.5,6.5,0,0,0,2.41-2,8.77,8.77,0,0,0,1.38-3A15.15,15.15,0,0,0,146.32,482.68Z'
            variants={bubble}
            transform='translate(0 -384.3)'
          />
          <motion.path
            d='M174.28,493.91a.67.67,0,0,1-.06.28.45.45,0,0,1-.24.2,1.79,1.79,0,0,1-.45.12,4.08,4.08,0,0,1-.67.05,4.48,4.48,0,0,1-.72-.05,1.53,1.53,0,0,1-.42-.12.54.54,0,0,1-.22-.2.67.67,0,0,1-.06-.28v-3.18a13.81,13.81,0,0,1-3.8,3.13,7.86,7.86,0,0,1-3.69,1,8.4,8.4,0,0,1-3.74-.74,6.61,6.61,0,0,1-2.45-2,8.55,8.55,0,0,1-1.35-3A17.76,17.76,0,0,1,156,485V471.38a.67.67,0,0,1,.06-.28.63.63,0,0,1,.24-.21,1.34,1.34,0,0,1,.46-.12,4.78,4.78,0,0,1,.71,0,5,5,0,0,1,.74,0,1.11,1.11,0,0,1,.44.12.63.63,0,0,1,.24.21.57.57,0,0,1,.08.28v13.34a14.58,14.58,0,0,0,.32,3.42,6.61,6.61,0,0,0,1,2.25,4.36,4.36,0,0,0,1.66,1.44,5.12,5.12,0,0,0,2.35.51,5.77,5.77,0,0,0,3.42-1.22,19.17,19.17,0,0,0,3.63-3.58V471.38a.67.67,0,0,1,.06-.28.51.51,0,0,1,.24-.21,1.28,1.28,0,0,1,.46-.12,4.9,4.9,0,0,1,.73,0,4.78,4.78,0,0,1,.71,0,1.22,1.22,0,0,1,.45.12.63.63,0,0,1,.24.21.55.55,0,0,1,.07.28Z'
            variants={bubble}
            transform='translate(0 -384.3)'
          />
          <motion.path
            d='M193.46,492.57a3.3,3.3,0,0,1-.09.85,1.15,1.15,0,0,1-.28.51,1.67,1.67,0,0,1-.54.34,4.86,4.86,0,0,1-.84.28,9.71,9.71,0,0,1-1,.17,9,9,0,0,1-1,.07,7.91,7.91,0,0,1-2.84-.45,4.53,4.53,0,0,1-1.92-1.36,5.59,5.59,0,0,1-1.08-2.3,13.86,13.86,0,0,1-.34-3.29v-14h-3.36a.61.61,0,0,1-.55-.31,1.8,1.8,0,0,1-.2-.94,3.06,3.06,0,0,1,.05-.56,1.06,1.06,0,0,1,.15-.39.61.61,0,0,1,.24-.24.62.62,0,0,1,.31-.08h3.36v-5.52a.67.67,0,0,1,.06-.28.51.51,0,0,1,.24-.21,1.28,1.28,0,0,1,.46-.12,4.78,4.78,0,0,1,.71,0,4.9,4.9,0,0,1,.73,0,1.22,1.22,0,0,1,.45.12.63.63,0,0,1,.24.21.55.55,0,0,1,.07.28v5.52h6.23a.65.65,0,0,1,.31.08.69.69,0,0,1,.24.24,1.59,1.59,0,0,1,.15.39,3.06,3.06,0,0,1,.05.56,1.69,1.69,0,0,1-.22.94.62.62,0,0,1-.53.31h-6.23V487a8.33,8.33,0,0,0,.74,3.91,2.77,2.77,0,0,0,2.67,1.35,4.59,4.59,0,0,0,1.09-.13,7,7,0,0,0,1.49-.55,1.16,1.16,0,0,1,.46-.12.43.43,0,0,1,.23.05.35.35,0,0,1,.16.19,1.75,1.75,0,0,1,.1.34A3.74,3.74,0,0,1,193.46,492.57Z'
            variants={bubble}
            transform='translate(0 -384.3)'
          />
        </g>
      </motion.svg>
    </div>
  );
};

export default Bubbles;
