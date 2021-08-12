import React from 'react';
import Draggable from 'react-draggable';
import { motion } from 'framer-motion';
import { fills } from './fills';

const icon = {
  hidden: {
    opacity: 1,
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: (fill) => {
    return {
      opacity: 1,
      pathLength: 1,
      fill: fill,
    };
  },
};

const Yoni = ({ clear, customColors, onCustomColor, erase }) => {
  const trans = (defDuration, defDelay, fillDuration, fillDelay) => {
    return clear === 'start'
      ? {
          default: { duration: defDuration, delay: defDelay },
          fill: {
            duration: fillDuration,
            ease: [1, 0, 0.8, 0],
            delay: fillDelay,
          },
        }
      : {
          default: { duration: 0, delay: 0 },
          fill: {
            duration: 0.5,
            delay: 0,
          },
        };
  };

  const fill = (color, i) => {
    switch (clear) {
      case 'clear':
        return '#f4f4f4';
      case 'start':
        return color;
      case 'color':
        return color;
      case 'customize':
        return customColors[i];
      default:
        break;
    }
  };

  return (
    <Draggable bounds={`parent`}>
      <div className='yoni-container'>
        <motion.svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 802.13 915.65'
          className='yoni'
        >
          <g id='shadow'>
            <motion.polygon
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(0) : () => ''
              }
              fill={() => fill(fills.shadow, 0)}
              points='497.01 367 501.01 367 510.01 375 512.01 383 513.01 394 508.01 404 505.01 410 502.01 414 498.01 410 491.01 371 497.01 367'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.shadow, 0))}
              transition={trans(1, 4, 2, 4)}
            />
          </g>
          <g id='hair'>
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(1) : () => ''
              }
              stroke={fills.black}
              d='M478.15,465.14a20.85,20.85,0,0,1-5.88-8.08,24.29,24.29,0,0,1-1-7.7c-.16-5.73-.26-11.47-.69-17.19-.45-6-2.19-12-1.22-17.95,3.43-21.28-7.76-43.13-14.56-62.74a16.05,16.05,0,0,1-1-3.72c-1-10.5,3.78-24.07,6.63-34.1a219.24,219.24,0,0,1,11-29.55c3.88-8.65,7.63-18.61,13.44-26.16a57.27,57.27,0,0,1,7.17-7.44c14.36-13,33-20.59,51.7-24.8A396.15,396.15,0,0,1,584.46,219c16.36-1.89,36.16-.35,51.61,5.77a63.09,63.09,0,0,1,8.89,4.55c15.59,9.26,27.22,25.56,44.8,31a11.62,11.62,0,0,1,3.54,1.51,10.23,10.23,0,0,1,2.71,3.73c3.74,7.24,7,14.76,11.06,21.78,4.19,7.24,8.07,14.91,9,23.34a42.82,42.82,0,0,1-.21,10.18c-1,7.42-6.15,13.14-7.78,20.19-1.93,8.37-.4,17.73,1.35,26,3.48,16.42,8,32.47,6.19,49.43-.17,1.55-91.28-.88-100.84-1h-.26l-96,11c-7.1,5.94-13.52,13-20.2,19.37s-14.25,12.42-19.93,19.46Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.black, 1))}
              transition={trans(1, 2, 2, 2)}
              transform='translate(-199.49 -165.5)'
            />
          </g>
          <g id='skin'>
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(2) : () => ''
              }
              stroke={fills.black}
              d='M460.19,367.1a35.32,35.32,0,0,0-3.85-4.73c-1.65-1.8-4.1-.61-5.9.45-1.54.9-4.62,5.13-3.63,7.07.34.66,1.19.92,1.53,1.57a2.49,2.49,0,0,1,.19,1.21,146,146,0,0,0,.47,16.47,16.52,16.52,0,0,0,.6,3.27,18.43,18.43,0,0,0,1.1,2.5c1.16,2.32,2.39,4.62,3.48,7a17.1,17.1,0,0,1,1,3.91c.45,2.24.89,4.47,1.34,6.71,1.46,3.3,3.61,6.81,4.25,10.36,1,5.52,2.12,11,3.31,16.44.57,2.61.79,5.23-.28,7.69a11.13,11.13,0,0,0-.53,7.42,18.12,18.12,0,0,0,4.36,8.06,9.07,9.07,0,0,0,4.61,2.23,23.7,23.7,0,0,0,2.52.44,24,24,0,0,0,2.41,0,31.12,31.12,0,0,1-3.2-5.3l-1.74-4.27c-1-2.4-.8-4.86-.87-7.4-.07-2.8-.16-5.59-.45-8.37-.88-8.55-.23-17.16-.69-25.73,0-.67-.18-1.32-.21-2a147.84,147.84,0,0,0-3.26-26.36,88.05,88.05,0,0,0-5.36-16.47A19,19,0,0,0,460.19,367.1Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.skin, 2))}
              transition={trans(1, 1, 2, 1)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(2) : () => ''
              }
              stroke={fills.black}
              d='M716.26,325.11a12.35,12.35,0,0,1,6.32-4.52,6.23,6.23,0,0,1,6.13,1.84,12.19,12.19,0,0,1,2.26,5.44L734,340.81a43.57,43.57,0,0,1,1.51,9.4,37.92,37.92,0,0,1-.83,7.43c-2.31,12.42-4.49,25.34-3.28,38,.92,9.66,4.29,23.66-6.32,29.65-10.24,5.8-8.9-3.68-8.9-7.44,0-9.26.51-18-1.09-27.27-1.93-11.16-5.67-22-6.87-33.26C707.16,347,707.33,336.31,716.26,325.11Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.skin, 2))}
              transition={trans(1, 1, 2, 1)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(2) : () => ''
              }
              stroke={fills.black}
              d='M509.75,542.79a26.33,26.33,0,0,1,4.86-3.45c1.79.19,6.13,6.81,7.31,8.13,3.89,4.35,7.78,8.7,12.08,12.66,9.6,8.85,20.52,16.11,31.49,23.14a79.07,79.07,0,0,0,12.93,7.14c4.31,1.73,9.11,1.4,13.78,1.32a144.7,144.7,0,0,0,32-4.15c13.56-3.33,24.39-14.23,33.55-24.31,15-16.56,26.53-42.81,39.95-60.69-1.22,19.87,2.9,46.72,3.92,66.61.33,6.55,0,13.16-3.76,18.73-3.23,4.73-6.28,9.66-9.32,14.58l-14,28-83.57,14.75L535.5,630.5l-41-68C499.2,556.23,503.64,548.19,509.75,542.79Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.skin, 2))}
              transition={trans(1, 2, 2, 2)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(2) : () => ''
              }
              stroke={fills.black}
              d='M1000.93,1078.79c1.2-.9-3.73-2.94-3.32-8.23,2.19-28.24-4.23-59.77-7.7-87.79-2.39-19.24-.37-38.68-3.77-57.78-2.78-15.57-22.62-26.21-34.14-36l-63,14c-2.94,32,2.91,63.35,5.54,95.42,2,24.23,2.74,50,8.46,73.58l-4,8h59.71c11.44,0,24,1.47,35.33,0C997.91,1079.5,999.86,1079.59,1000.93,1078.79Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.skin, 2))}
              transition={trans(1, 6, 2, 6)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(2) : () => ''
              }
              stroke={fills.black}
              d='M208,918.73c-4.16,10.19-4.85,22.76-6.25,33.61-1.62,12.49-2.46,25.14-1.18,37.71.61,5.94,1.68,11.83,2.31,17.78,1.17,11.17.88,22.45.65,33.66-.2,10.46,1.72,20.85,3.35,31.17,1.33,8.34,7,6.84,13.57,6.84h88c-2.29-16.59-5.09-33.11-6.74-49.78-1.4-14.14-3.07-29.67-.06-43.68,3.2-14.89,6.54-29.76,9.81-44.64l-84-46.9c-5.33,6.39-11.76,11.82-16.51,18.71A28.84,28.84,0,0,0,208,918.73Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.skin, 2))}
              transition={trans(1, 6, 2, 6)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(2) : () => ''
              }
              stroke={fills.black}
              d='M483.31,453.2a8.33,8.33,0,0,1-3.91-.11c-4.85-1.54-3-13.95-3.62-18.2-1.2-8-3.27-15.86-4-23.93-1.54-16.27-1.33-32.62-1.27-48.94.06-13.28-1-26.64.75-39.86,1.53-11.82,3-25.4,9-35.84,3.8-6.63,8.82-12.48,13.81-18.28,8.13-9.47,15.45-16,28.64-16.38,8.5-.24,16.89,1.73,25.29,3a10.63,10.63,0,0,0,3.51.14,11.7,11.7,0,0,0,4.27-2.11c18.07-12,48-20.72,68.93-12.86,13.38,5,25.81,6.4,33.7,19.68a8.86,8.86,0,0,0,2,2.64,8.13,8.13,0,0,0,2.52,1.15l7.45,2.42a4.56,4.56,0,0,1,1.59.75,4.72,4.72,0,0,1,1.19,1.83c3.11,7.05,3.83,13.61,4.32,21.2a8.21,8.21,0,0,0,.32,2.1c.55,1.6,2,2.66,3.32,3.75,4.59,3.9,7.65,9.36,9.59,15.06,5.54,16.29,7.12,33.53,9.44,50.48,2.69,19.64,10.31,37,15.74,55.82.46,1.61.86,3.44,0,4.87-1.32,2.17-4.47,1.95-7,1.54-7-1.16-17.5-3.68-24.19-1a12.21,12.21,0,0,0-3.7,2.36c-4.93,4.55-7.6,13.07-10.72,19-.69,1.29-1.66,2.76-3.12,2.74a3.92,3.92,0,0,1-2.37-1.25c-5.63-5-10.49-11.33-17.5-14.53-8.1-3.7-17.51-3.26-26.16-2.51-7.94.69-15,9.42-20.85,14.13a8.94,8.94,0,0,0-2.45,2.57,18.24,18.24,0,0,1-1.19,2.48,5.45,5.45,0,0,1-2.15,1.46,16.63,16.63,0,0,1-6.49,1.67c-5.33.07-12-5.94-16.52-8.5a19.86,19.86,0,0,1-3.82-2.58c-1.79-1.69-4.51-6-7.37-3.31-1.08,1-1.52,2.54-2.14,3.9a14.23,14.23,0,0,1-4.69,5.73l-8-2.44c-3.8-1.15-7.62,3.08-10.36,5-4.55,3.26-9.33,6.25-14,9.37a3.79,3.79,0,0,1-1.57.74,3.84,3.84,0,0,1-1.6-.23c-5.49-1.61-10.07-5.51-15.57-7.06-6.28-1.76-12.06.86-18.18,2.13Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.skin, 2))}
              transition={trans(1, 0, 2, 0)}
              transform='translate(-199.49 -165.5)'
            />
          </g>
          <g id='skin-shadows'>
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(3) : () => ''
              }
              stroke={clear === 'customize' ? fills.black : ''}
              d='M452.5,372.5h0a1.33,1.33,0,0,1,2-1.17,7.76,7.76,0,0,1,3.87,5.24,15.48,15.48,0,0,1,.18,2.89l0,8'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.skin_shadow[3], 3))}
              transition={trans(1, 0, 2, 0)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(4) : () => ''
              }
              stroke={clear === 'customize' ? fills.black : ''}
              d='M465,397h-1.86a3.51,3.51,0,0,0-3.49,3.12L459,406'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.skin_shadow[0], 4))}
              transition={trans(1, 0, 2, 0)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(5) : () => ''
              }
              stroke={clear === 'customize' ? fills.black : ''}
              d='M719.52,335.51c1.45-2.35,3.08-5.58,5.32-7.3,4.31-3.31,3.55,2.59,3.86,5.23a60.73,60.73,0,0,0,1.92,9.15c.75,2.78,2.06,5.62,1.43,8.54a21.47,21.47,0,0,1-1.63,4.34'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.skin_shadow[1], 5))}
              transition={trans(1, 0, 2, 0)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(5) : () => ''
              }
              stroke={clear === 'customize' ? fills.black : ''}
              d='M713,354l-.51,1.54a9,9,0,0,0,1.33,8.22L717,368'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.skin_shadow[1], 5))}
              transition={trans(1, 0, 2, 0)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(5) : () => ''
              }
              stroke={clear === 'customize' ? fills.black : ''}
              d='M716,348h0a2.24,2.24,0,0,0,1,3h0'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.skin_shadow[1], 5))}
              transition={trans(1, 0, 2, 0)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(5) : () => ''
              }
              stroke={clear === 'customize' ? fills.black : ''}
              d='M729,386l-2.51,2.48a1,1,0,0,0-.31.44c-.23.79.82,4.07,2.05,4.59,2,.85.84,4.25.77,6.42a3.43,3.43,0,0,1-.17,1.19,3.71,3.71,0,0,1-.49.77c-.78,1-1.57,2.06-2.34,3.1'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.skin_shadow[1], 5))}
              transition={trans(1, 0, 2, 0)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.polyline
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(6) : () => ''
              }
              stroke={clear === 'customize' ? fills.black : ''}
              points='699.01 797 730.01 797 775.01 784'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.skin_shadow[2], 6))}
              transition={trans(1, 7, 2, 7)}
            />
            <motion.polyline
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(6) : () => ''
              }
              stroke={clear === 'customize' ? fills.black : ''}
              points='29.51 841.5 52.51 845.5 64.51 843.5 88.51 845.5 90.51 848.5'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.skin_shadow[2], 6))}
              transition={trans(1, 7, 2, 7)}
            />
          </g>
          <g id='eye-backs'>
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(7) : () => ''
              }
              stroke={fills.black}
              d='M504.62,379.51c.77.14,4.24-3.3,4.92-3.81,2-1.5,3.94-3,6-4.35a31.21,31.21,0,0,1,13.83-5.29c6.9-.69,13.74,1.46,20.34,3.59,1.6.52,3.44,1.29,3.81,2.93-.09-.42-21.11,6.32-23.26,6.73A71.84,71.84,0,0,1,504.62,379.51Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.white, 7))}
              transition={trans(1, 1, 2, 1)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(7) : () => ''
              }
              stroke={fills.black}
              d='M611.54,362.5c-.25-.77,6.77-5.74,7.68-6.39A37.86,37.86,0,0,1,628.3,351c5.22-1.93,10.7-1.52,16-.33s9.81,3.81,15.07,4.85c-.23-.05-3,2.77-3.41,3a17.23,17.23,0,0,1-5.15,2.18c-11.52,3.15-24,5-36,3.67C613.52,364.29,612,363.79,611.54,362.5Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.white, 7))}
              transition={trans(1, 1, 2, 1)}
              transform='translate(-199.49 -165.5)'
            />
          </g>
          <g id='Pupils'>
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(8) : () => ''
              }
              stroke={fills.black}
              d='M519.1,371c-.73,2.23.42,4.44,1.77,5.91s3.18,3,5.13,2.58c1.47-.28,2.85-.9,4.31-1.23,1.7-.37,3.5-.33,5.16-.9,3.29-1.13,3.93-6.21,3.55-9.28,0-.41-.13.17-.36-.18-1.24-2-7.17-.95-9.1-.95a21.13,21.13,0,0,0-3.47.19C523.9,367.54,519.88,368.66,519.1,371Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.pupils, 8))}
              transition={trans(1, 1, 2, 1)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(8) : () => ''
              }
              stroke={fills.black}
              d='M625.34,353.45a8.09,8.09,0,0,0-.81,3.5c.37,2.92,3.59,5.57,6.26,6.26a10.88,10.88,0,0,0,2.48.32c2.78.07,6.28-.55,8.44-2.45a10.08,10.08,0,0,0,2.33-3.6c.81-1.83.47-4.14.48-6,0-1.34-8.15-1-9.15-1a25.45,25.45,0,0,0-9.13,1.75,1.39,1.39,0,0,0-.49.28,1.42,1.42,0,0,0-.29.59Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.pupils, 8))}
              transition={trans(1, 1, 2, 1)}
              transform='translate(-199.49 -165.5)'
            />
          </g>
          <g id='beard'>
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(9) : () => ''
              }
              stroke={clear === 'customize' ? fills.black : ''}
              d='M601.3,594.73c-15.09,0-30.4-4.92-45.51-14.62-7.27-4.68-13.81-11-18.7-16a214,214,0,0,1-20-23.59c-4.16-5.68-8.1-11.65-11.7-17.73a62.81,62.81,0,0,0-3.66-5.32,45.73,45.73,0,0,1-4.74-7.33q-1.32-2.81-2.65-5.59c-5.16-10.88-10.51-22.13-14.27-34-.14-.46-.31-1-.5-1.56-.77-2.34-1.82-5.53-2.54-8.75-.94-4.21-1.06-7.37-.36-9.42a4.38,4.38,0,0,0,2.62,2.66,7.3,7.3,0,0,0,2.15.31,11.46,11.46,0,0,0,2-.19l.9-.17c1.49-.31,3-.7,4.4-1.08a36.14,36.14,0,0,1,9.26-1.63,15.42,15.42,0,0,1,4.28.58A38,38,0,0,1,510,454.9a40.62,40.62,0,0,0,7.79,3.54,5.34,5.34,0,0,0,1.45.27l.36,0a4.37,4.37,0,0,0,1.78-.82c1.55-1,3.11-2.06,4.67-3.08,3.08-2,6.28-4.12,9.32-6.3.58-.41,1.19-.92,1.84-1.45,2.11-1.73,4.51-3.69,6.9-3.69a3.92,3.92,0,0,1,1.18.17l8.25,2.51.2-.14a14.8,14.8,0,0,0,4.86-5.94c.14-.3.27-.61.4-.93a7.92,7.92,0,0,1,1.62-2.81,2.32,2.32,0,0,1,1.59-.73c1.4,0,2.84,1.6,4,2.88.39.44.76.84,1.1,1.16a19.87,19.87,0,0,0,3.92,2.65c1.24.7,2.65,1.68,4.16,2.71,4,2.75,8.52,5.86,12.51,5.86h.1a16.83,16.83,0,0,0,6.68-1.72,4.75,4.75,0,0,0,3.16-3.21,8.86,8.86,0,0,1,.42-.95,8.56,8.56,0,0,1,2.32-2.41c1.48-1.19,3-2.61,4.65-4.12,4.75-4.4,10.15-9.4,15.93-9.9,2.9-.25,6.32-.51,9.74-.51,6.59,0,11.72.94,16.17,3,5,2.27,8.93,6.21,12.76,10,1.49,1.49,3,3,4.62,4.44a4.31,4.31,0,0,0,2.7,1.38c1.75,0,2.82-1.61,3.56-3,.9-1.71,1.76-3.61,2.66-5.62,2.22-4.93,4.52-10,8-13.21a11.63,11.63,0,0,1,3.55-2.26,19.46,19.46,0,0,1,7.27-1.16,78.9,78.9,0,0,1,13.55,1.64l3.1.54a17.57,17.57,0,0,0,2.82.27,6.39,6.39,0,0,0,3.4-.79c.36,13.56.44,26.81-1.86,39.84-2.4,13.58-8,26.54-13.39,39.08l-.25.56a257.31,257.31,0,0,1-31.89,54.61C648.83,581.76,625.89,594.73,601.3,594.73Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.beard, 9))}
              transition={trans(1, 0.5, 2, 0.5)}
              transform='translate(-199.49 -165.5)'
            />
          </g>
          <g id='eyebrows'>
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(10) : () => ''
              }
              stroke={clear === 'customize' ? fills.black : ''}
              d='M487.58,352.6a21.51,21.51,0,0,1,3.61-2.31c4.4-2.56,6.92-6.53,12.1-7.42,5.64-1,11.05-2.12,16.79-2.27,6.8-.18,13.61-.16,20.42-.1,4,0,8,0,12,0a6.78,6.78,0,0,1,1.68.14,5.36,5.36,0,0,1,1.33.56,28.31,28.31,0,0,1,6.53,4.7c3,3,2.14,4.69-1.22,7.06a7.93,7.93,0,0,1-7.45,2.11c-8.58-1.29-17.24-2.63-25.94-2.2-7.54.37-17.09,1.77-23.19,6.51-2.27,1.77-5.51,1.15-8.27,1.17-3.31,0-6.62,0-9.93,0a2.64,2.64,0,0,1-1.78-.46c-1.85-1.73,2-6.23,3.21-7.35Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.eyebrows, 10))}
              transition={trans(1, 2, 2, 2)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(10) : () => ''
              }
              stroke={clear === 'customize' ? fills.black : ''}
              d='M675.54,329.11a3,3,0,0,0-.76-1,5,5,0,0,0-1.74-.78c-13-3.77-28.32-6.67-41.81-4.56A71.1,71.1,0,0,0,600,336c-2.45,1.83-5.61,3.6-7.5,5.9a15.47,15.47,0,0,0,15.14,1.54,135.89,135.89,0,0,1,33.79-9.52,125.67,125.67,0,0,1,21.25-.75c3.18.09,7.57,1.06,10.66.32,1.93-.47,1.73.44,2.48-1.42A4,4,0,0,0,675.54,329.11Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.eyebrows, 10))}
              transition={trans(1, 2, 2, 2)}
              transform='translate(-199.49 -165.5)'
            />
          </g>
          <g id='facial-details'>
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              stroke={fills.black}
              d='M526.7,483.18c-3.61-2.54-2.89-7.79-2.1-12.14,2.64-14.51,12.7-23.91,21.9-34.54'
              variants={icon}
              initial='hidden'
              animate={icon.visible('none')}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              stroke={fills.black}
              d='M628.5,415.5c8.13,4.11,12.34,12,20.33,16.42a41.57,41.57,0,0,1,8.35,5.56c4.6,4.22,7.25,10.23,8.45,16.36s1.06,12.43.81,18.66'
              variants={icon}
              initial='hidden'
              animate={icon.visible('none')}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              stroke={fills.black}
              d='M608.41,405.56a18.18,18.18,0,0,0,8.24,6.58c8.61,3.47-15.46,29.73-19.8,34.69-4.81,5.49-11.85,3.89-16.79.25-3.22-2.37-4.65-4.23-8.19-6s-5.32-3.94-8.4-6.56c-1.69,1.82-4.73-.37-4.94-2.82-.16-2-.38-2.93.5-4.65a7.66,7.66,0,0,1,1.12-1.58l7.27-8'
              variants={icon}
              initial='hidden'
              animate={icon.visible('none')}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              stroke={fills.black}
              d='M500.5,389.5c6.52,2.38,11.39,4.22,18.54,4,10.38-.34,18.37-2,27.46-7'
              variants={icon}
              initial='hidden'
              animate={icon.visible('none')}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              stroke={fills.black}
              d='M506.5,396.5c6.19-.06,12.39,0,18.59,0,3.7,0,8-.24,10.22-3.17'
              variants={icon}
              initial='hidden'
              animate={icon.visible('none')}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              stroke={fills.black}
              d='M606.5,371.5c19.54,9,40.82,11.82,59.78-.35'
              variants={icon}
              initial='hidden'
              animate={icon.visible('none')}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              stroke={fills.black}
              d='M497.69,379.62l4.35-7.13c3.23-5.3,9-8,14.66-10.09,8.45-3.06,16-4,24.8-1.9l7,2'
              variants={icon}
              initial='hidden'
              animate={icon.visible('none')}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              stroke={fills.black}
              d='M611.5,349.5c4.46-3.35,8-5.43,13.57-6.63,13.81-3,28.79,2.3,40.42,9.64'
              variants={icon}
              initial='hidden'
              animate={icon.visible('none')}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
          </g>
          <g id='sleeve-body'>
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(11) : () => ''
              }
              stroke={fills.black}
              d='M872.17,898a17,17,0,0,0,1.63,4.16l8.45,16.22c2.08,4,4,7.1,7.58,9.84A64.43,64.43,0,0,0,901.06,935c10.47,5,23.69,7.64,35.22,6.08C944,940.06,952.6,938.65,959,934c10.49-7.62,20.13-17.11,26.37-28.7,5.33-9.92,7.3-21.38,7.19-32.62-.05-4.67-.54-9.46-2.64-13.62-2.65-.37-5.29-.72-7.94-1L882,888l-5,1-5,4c-.23.18-.09,2.84-.06,3.3A10,10,0,0,0,872.17,898Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.shirt.band_body, 11))}
              transition={trans(1, 4, 2, 4)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(11) : () => ''
              }
              stroke={fills.black}
              d='M207.8,915.38A98.38,98.38,0,0,0,266,973.49c5.2,1.93,9.25,3.18,14.91,3.18,8.51,0,19.66-1,26.91-5.76,8-5.19,15.3-15,18.29-24,.7-2.11,1.64-5.76.65-7.93-.77-1.69-.85-1.21-2.54-.9-2.92.53-5.82,1.35-8.71,2L301,943.43a49.79,49.79,0,0,1-33.57-4l-14.05-7a40.66,40.66,0,0,1-10.53-7.59l-14.4-14.4a58,58,0,0,1-10-13.34c-3-5.5-5.93-11-9-16.46-4.27.61-7.29,4.84-7.92,9.1s.62,8.57,1.91,12.69c.35,1.11.7,2.24,1.06,3.37C205.57,909,206.63,912.18,207.8,915.38Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.shirt.band_body, 11))}
              transition={trans(1, 4, 2, 4)}
              transform='translate(-199.49 -165.5)'
            />
          </g>
          <g id='sleeve-accent'>
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(12) : () => ''
              }
              stroke={clear === 'customize' ? '#343434' : fills.shirt.primary}
              strokeWidth={clear === 'customize' ? '1px' : '2px'}
              d='M281.93,966.66l-.83-.06c-6.49-.44-13.43-3-19.21-5.9C241.58,950.56,225.72,934,214,915c-2.61-4.24-7.74-14.75-8-20,0-.78-1-11-1-9,0,6.91,12.49,24.71,17,30,4,4.68,7.67,9.27,12.55,13,4.69,3.6,10,6.43,14.61,10a75,75,0,0,0,33.06,14.86,62.2,62.2,0,0,0,40.85-7.11c-3.52,7.41-9,14.59-16.66,18S290.08,967.25,281.93,966.66Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.shirt.band_accent, 12))}
              transition={trans(1, 5, 2, 5)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(12) : () => ''
              }
              stroke={clear === 'customize' ? '#343434' : fills.shirt.primary}
              strokeWidth={clear === 'customize' ? '1px' : '2px'}
              d='M875,898a39.12,39.12,0,0,0,6,7c3.93,3.93,9.44,7,14.07,10.07,6.47,4.21,14.24,5.69,21.84,6.08,5.54.28,11.09,0,16.64-.19,15-.37,29.37-12.88,39.45-23l10-10c2-3.76,6.69-9.33,6-13.76.11,8,0,16.68-4.79,23.08a99.52,99.52,0,0,1-12.93,13.75c-4.33,3.93-8.73,8.63-13.9,11.41-6.44,3.46-14.64,6.86-21.93,7.71a97.14,97.14,0,0,1-24.92-.29c-7.62-1.07-13.09-4.52-18.78-9.59C884.64,914.05,880.57,905.61,875,898Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.shirt.band_accent, 12))}
              transition={trans(1, 5, 2, 5)}
              transform='translate(-199.49 -165.5)'
            />
          </g>
          <g id='shirt-body'>
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(13) : () => ''
              }
              stroke={fills.black}
              d='M476.11,558.83a5.89,5.89,0,0,0-4.82.3Q420,586.88,366.12,609.53c-28.62,12-52.6,21.88-74.28,44.66a222.27,222.27,0,0,0-47.2,75.2c-9.13,24.4-13.8,50.09-20.51,75.18C214,842.48,193.37,871.42,220.5,907c23.37,30.67,77.73,62.9,111,29.42,1.49-1.5,3.06-3.19,3.17-5.29.11-1.92-1.06-3.67-1.52-5.54s.35-4.45,2.28-4.5a105.19,105.19,0,0,0,26,1.34c3.55,52.56,12.11,104.85,19.09,157,94.74.74,189.52,0,284.27,0,69.18,0,140.77,1.39,211.1,0,3.67-28.52-5-63.54-6-92.83-1-27.83-10.12-67.55,1.81-93.53,8.24,4.25,14.25,12.88,22.79,17.58,14.79,8.16,33.26,8.26,49.05,2.25,29.65-11.29,47.52-33.24,44.81-65.75-1.83-21.93-11.67-36.17-8.59-58.77,3.13-23,0-46.6-6.26-68.83-8.63-30.53-23.94-58.18-37.84-86.56-2.63-5.39-5.3-10.82-9-15.54-7-8.91-17.23-14.72-27.72-19-32.55-13.29-68.94-16.78-102.41-27.77-23.78-7.81-44.57-19.85-67.12-29.89a4.12,4.12,0,0,0-1.7-.36h-7.4a1.7,1.7,0,0,0-1.21.5h0c-.32.32-.51-.25-.53.21l-2,55.29-96,61-107-44C507.3,603.28,489.17,563.11,476.11,558.83Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.shirt.primary, 13))}
              transition={trans(1, 1, 2, 1)}
              transform='translate(-199.49 -165.5)'
            />
          </g>
          <g id='collar-body'>
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(11) : () => ''
              }
              stroke={fills.black}
              d='M512.46,540.5c-.45.14,0,16.19,0,17.77a75.06,75.06,0,0,0,1.71,17.88c2.51,10.29,9.54,17.78,17.52,24.35,11.86,9.77,25.2,17.5,39,24.23,6.76,3.3,13.54,6.82,20.87,8.65a73.23,73.23,0,0,0,23.69,1.92c15.13-1.24,29.34-7.84,42-15.91a157.19,157.19,0,0,0,21.67-16.73c5.84-5.38,12.11-10.79,16.89-17.17A74.75,74.75,0,0,0,704.11,571c2.94-6.64,6.13-13.85,6.15-21.24a14.66,14.66,0,0,0-3.27-10c-2.39-2.7-8.42-4.09-8.48-8.29a28.14,28.14,0,0,1,0-4c.2-.64,10.39,8,11.08,9,2.08,3,3,2.81,6.47,3.09a21.78,21.78,0,0,1,10.34,3.61c9.67,6.53,13,19.42,12.76,30.47-.25,14.38-6.57,27.77-15,39.18-8.56,11.67-19.35,22.28-30.35,31.64-9.68,8.24-19.22,15.22-31,20.22-11,4.7-23,8.67-35,9.75a137.48,137.48,0,0,1-24.43-.24c-7.65-.66-15.72-1.16-23.21-2.8-27.64-6-55.14-17.85-73.84-39.78a173.82,173.82,0,0,1-18.9-27.38c-2.73-4.84-5.24-9.8-7.69-14.79-2.53-5.19-2.9-11.52-3.7-17.22-.51-3.62-1.41-9.26.31-12.71a14.35,14.35,0,0,1,6.34-7,15.07,15.07,0,0,1,4.79-1.41,59.58,59.58,0,0,0,13.47-3.91C505.1,545.44,508.34,541.77,512.46,540.5Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.shirt.band_body, 11))}
              transition={trans(1, 0, 2, 0)}
              transform='translate(-199.49 -165.5)'
            />
          </g>
          <g id='collar-accent'>
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(13) : () => ''
              }
              stroke={clear === 'customize' ? fills.black : ''}
              d='M493.29,552.42a19.91,19.91,0,0,0-2,6.55,52.12,52.12,0,0,0-.62,13.14c.49,6.65,3.63,12,6.31,18,2.89,6.41,5.47,13,9.11,19,4.36,7.25,10.33,13.33,16.45,19.1,14.58,13.75,32.75,23.22,51.79,29.19,12,3.76,24.28,4.06,36.65,5.55,8.47,1,17.17-.9,25.4-2.69,21.08-4.6,39.32-13.66,54.95-28.6,10.06-9.6,20.39-20.44,27.27-32.6a57,57,0,0,0,6.52-17.23c2-10.51-.33-22.84-5.82-32.44-1.49-2.61-4.47-1.39-4.17,1.6.21,2.1.46,4.21.64,6.32,1.31,15.28-6.12,29.08-15.17,40.9a121.28,121.28,0,0,1-31.42,28.41,139.16,139.16,0,0,1-29.83,14.29,101.64,101.64,0,0,1-22.18,5c-13,1.34-24.57-.94-36.59-5.67-13.88-5.47-27.53-11.74-40.07-19.87-11.75-7.61-23.71-16.9-30.35-29.5-4.93-9.38-7.34-20-8.17-30.47-.33-4.12-.26-8.13,1.9-11.71.44-.73.52-.88-.26-1.21a1.18,1.18,0,0,0-1.08,0C499.5,549.5,494.94,549.43,493.29,552.42Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.shirt.primary, 13))}
              transition={trans(1, 0, 2, 0)}
              transform='translate(-199.49 -165.5)'
            />
          </g>
          <g id='collar-thread'>
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              stroke={
                clear === 'customize' ? '#343434' : fills.shirt.band_accent
              }
              strokeWidth={clear === 'customize' ? '1px' : '4px'}
              fill='none'
              d='M493.29,553.42a15.16,15.16,0,0,0-2,5.55,52.12,52.12,0,0,0-.62,13.14c.49,6.65,3.63,12,6.31,18,2.89,6.41,5.47,13,9.11,19,4.36,7.25,10.33,13.33,16.45,19.1,14.58,13.75,32.75,23.22,51.79,29.19,12,3.76,24.28,4.06,36.65,5.55,8.47,1,17.17-.9,25.4-2.69,21.08-4.6,39.32-13.66,54.95-28.6,10.06-9.6,20.39-20.44,27.27-32.6a57,57,0,0,0,6.52-17.23c2.28-11.83.28-24.41-7.08-34a1.78,1.78,0,0,0-3.19,1.23c.21,2.63.65,5,.92,8.25,1.31,15.28-6.12,29.08-15.17,40.9a121.28,121.28,0,0,1-31.42,28.41,139.16,139.16,0,0,1-29.83,14.29,101.64,101.64,0,0,1-22.18,5c-13,1.34-24.57-.94-36.59-5.67-13.88-5.47-27.53-11.74-40.07-19.87-11.75-7.61-23.71-16.9-30.35-29.5-4.93-9.38-7.34-20-8.17-30.47-.33-4.12-1.26-8.13.9-11.71.43-.72.53.1-.24-.21a.12.12,0,0,0-.1,0C499.5,550.5,494.94,550.43,493.29,553.42Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible('none')}
              transition={trans(1, 2, 2, 2)}
              transform='translate(-199.49 -165.5)'
            />
          </g>
          <g id='hat_bill' data-name='hat bill'>
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(14) : () => ''
              }
              stroke={fills.black}
              d='M694.46,261.49c1-7.06,0-14.63-4-20.53-4.89-7.2-13.52-11.44-20.78-15.83-42.56-25.73-91-35-140-27.48a75.8,75.8,0,0,0-25.11,8.07c-7.78,4.1-16.66,5.7-23.77,11.17-5.12,3.94-10,8.68-14.82,13a189.73,189.73,0,0,0-18,18c-11.09,12.85-20.16,27.67-24.55,44.18-2.78,10.46-3,23.12,4.92,30.46,4.52,4.16,10.83,5.73,16.93,6.49,3,.37,6.35.5,8.77-1.34,3.6-2.73,5.61-9.71,7.4-13.72,2.55-5.71,4.63-11.6,6.67-17.5,4.65-13.42,9-28.05,18.17-39.16,7.62-9.19,17.48-16.25,28.14-21.49,21.87-10.77,46.89-14.56,71.05-15.31,2.28-.07,4.55-.11,6.83-.13,13.09-.06,26.61-.52,39.17,3.64s23.58,11.89,32.8,21.26C672.61,253.72,681.8,261.5,694.46,261.49Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.hat.bill, 14))}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
          </g>
          <g id='hat_top' data-name='hat top'>
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(15) : () => ''
              }
              stroke={fills.black}
              d='M550.79,166.59c2.07.84,3.79,2.44,5.65,3.73,11.79,8.17,26-1.38,39,2.09,2.68.71,5.28,1.84,8,2.1a29.92,29.92,0,0,0,8-.82,65.93,65.93,0,0,1,43.18,6.46c15.07,8,29.58,28.86,37.3,43.84a250.52,250.52,0,0,1,25.74,80.18c.42,3,.7,6.41-1.11,8.88-1.8-5.1-2-10.54-4.13-15.55l-7-14-7-12-2-6-3-4,1-4c1.41-5.63-1.2-13.87-4.65-18a42,42,0,0,0-9.34-7.75c-69.35-46-167.88-57.4-228.44,10.32-1.18,1.32-2.34,2.67-3.48,4-1.89-6.61,3.41-14,8.52-18.58a197.8,197.8,0,0,1,25.77-19.7c7.55-4.84,16.45-8.37,22-15.72,2.06-2.72,3.43-5.9,5.36-8.71C517.38,173,530.7,169.31,543,166.65c2.26-.49,4.62-1,6.86-.37A7.53,7.53,0,0,1,550.79,166.59Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.hat.crown, 15))}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
          </g>
          <g id='glasses'>
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(16) : () => ''
              }
              stroke={fills.black}
              d='M462.54,359.85c1.07-.12,1.76,1.58,2.22,2.29a43.41,43.41,0,0,0,3,3.74,4.37,4.37,0,0,1,.76,3,.82.82,0,0,1-1.24.68,14.13,14.13,0,0,1-1.65-1,15.29,15.29,0,0,1-2.42-4.5A7.29,7.29,0,0,1,462.54,359.85Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.glasses[0], 16))}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(17) : () => ''
              }
              stroke={fills.black}
              d='M689,336.63a1.66,1.66,0,0,1,.33-.58,24.79,24.79,0,0,1,5.14-3.94c4.09-2.42,8.06-5.06,12.07-7.61l3-2c.08-.05.08-.62.12-.73,3.74,2.3-4.73,7.38-6.33,8.64-3.63,2.87-9.39,7.57-13.4,9.87-.28.16.41-1.68.09-1.72s.32-.43.09-.76C689.41,336.82,688.76,337.32,689,336.63Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.glasses[1], 17))}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(18) : () => ''
              }
              stroke={fills.black}
              d='M596.45,361.23s0-.05,0-.07c.52-3.08-.25-6.5-.77-9.53a2.13,2.13,0,0,0-.43-1c-1.18-1.53-4.35-1.94-6-2.29a46.09,46.09,0,0,0-9.74-.87c-5.94,0-11,2.35-16,5.35a5,5,0,0,0-.8.56,3.14,3.14,0,0,0-.56.74c-1.49,2.71,1.24,6.75,2.28,9.35l1,2c0-3.09-1-7.9-1-11l4-2a24.94,24.94,0,0,1,12.19-2.71c2.07.1,4,.63,6.08.67,2.23,0,6.22-.11,7.32,2.31a7.85,7.85,0,0,1,.47,3.48l-.09,7.69a.18.18,0,0,0,.33.09Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.glasses[2], 18))}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(19) : () => ''
              }
              stroke={fills.black}
              d='M468.4,368.08a1.59,1.59,0,0,1,1.46-1.44,19.34,19.34,0,0,0,4.06-1.12l3.54-1,.08,0,1.4-.7a1.11,1.11,0,0,1,1.58.84,1.17,1.17,0,0,1,0,.54,5.34,5.34,0,0,1-.68,1.66c-.38.76-.76,2.42-1.14,3.28a.78.78,0,0,1-.65.4H470.7l-.66,0a1.63,1.63,0,0,1-1.71-1.81Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.glasses[3], 19))}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(20) : () => ''
              }
              stroke={fills.black}
              d='M677.63,338.28a24.65,24.65,0,0,1,5.21.17,6.42,6.42,0,0,0,1.58-.06,11.16,11.16,0,0,0,2.58-1.3,2.56,2.56,0,0,1,2.73,0,3.08,3.08,0,0,1,.81,2.13,3.33,3.33,0,0,1-.31,2.21,3.42,3.42,0,0,1-2.56,1.08,11.86,11.86,0,0,1-5.81-.31A9,9,0,0,1,677.63,338.28Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.glasses[4], 20))}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(21) : () => ''
              }
              stroke={fills.black}
              d='M564.13,392.5l0,.05a1,1,0,0,0,.53.27c3.84.8,5.84-23.08,5.89-26.37a2.85,2.85,0,0,0-.44-1.91c-.8-1-2.5-.46-3.14.62-1.08,1.85-.81,5.77-1,7.91l-1.07,9.61c-.33,2.95-.74,5.91-.93,8.88A1.43,1.43,0,0,0,564.13,392.5Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.glasses[5], 21))}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(21) : () => ''
              }
              stroke={fills.black}
              d='M593.48,373.51c-1.28-3.1-3.94-7.32-1.53-10.53a.8.8,0,0,1,.42-.33.85.85,0,0,1,.55.11l2,.9a7.14,7.14,0,0,1,2.59,1.67,6,6,0,0,1,1.1,2.64c1.17,5.64,1.43,10.54,4.56,15.6l0,0a1.52,1.52,0,0,1-2.36,1.89,10,10,0,0,1-.69-.76,30.76,30.76,0,0,1-5.44-8.34C594.28,375.43,593.88,374.47,593.48,373.51Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.glasses[5], 21))}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              stroke={clear === 'customize' ? '#343434' : fills.glasses[6]}
              strokeWidth={clear === 'customize' ? '1px' : '2px'}
              fill='none'
              d='M481.44,363.46c6.82-12.72,21.2-18.56,34.91-20a79.31,79.31,0,0,1,34.25,4.21,17.93,17.93,0,0,1,5.29,2.58,17.46,17.46,0,0,1,3.27,3.64c6.89,9.49,8.9,22.11,6.13,33.43-3,12.26-12.61,22.33-22.42,29.73-4.32,3.25-9.25,4.09-14.37,5.49-7,1.91-17.3-1.34-23.57-4.27-17.58-8.22-32.39-30.73-25.44-50.35A33.11,33.11,0,0,1,481.44,363.46Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible('none')}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              stroke={clear === 'customize' ? '#343434' : fills.glasses[6]}
              strokeWidth={clear === 'customize' ? '1px' : '2px'}
              fill='none'
              d='M596.94,356.58a72,72,0,0,1,2.56-7.08c1.42-3.49,4.73-7.61,7.4-10.2,4.13-4,9.55-6.45,14.94-8.23s11.47-4.06,17-4.43c14.26-1,33.63,2.51,41.64,15.64a15.72,15.72,0,0,1,3.25,9,68.1,68.1,0,0,1-1.34,21.16C679.81,383.84,672,394,662.1,400.26a43.47,43.47,0,0,1-16.66,6.43c-10.78,1.66-21.42-2.32-30-8.75-7.63-5.75-16.86-15.34-19.4-24.84-1-3.76-.71-7.74-.19-11.6A36,36,0,0,1,596.94,356.58Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible('none')}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
          </g>
          <g id='Layer_10' data-name='Layer 10'>
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              strokeWidth={clear === 'customize' ? '1px' : '0.75px'}
              stroke={fills.black}
              d='M542.49,474.91c-.19-.06-3.26.75-3.6.84a3.16,3.16,0,0,1-.86.14c-.57,0-1.12-.53-1.59-.81l1.06-.8a5.92,5.92,0,0,1,1.46-.9,2.74,2.74,0,0,1,2.55.17A4.67,4.67,0,0,1,542.49,474.91Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible('none')}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
          </g>
          <g id='mouth'>
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(22) : () => ''
              }
              stroke={clear === 'customize' ? fills.black : ''}
              d='M537.69,476.34c2.83-1,6.74-3.15,9.83-2.48,1.63.35.88-.52,2.44-.05a147.58,147.58,0,0,0,18.3,3.93c4.57.73,9.21-.09,13.93,0,2.18.07,4.67,1,5.55,2.1.43.54.27,7-.07,7.05-4,.34-9.38-.61-13.38-1.16-7.21-1-13.59-.06-20.12-2.15l-3.55-1.73-3.16-.71C543.31,479.85,541.26,478.17,537.69,476.34Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.mouth.back, 22))}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(23) : () => ''
              }
              stroke={clear === 'customize' ? fills.black : ''}
              d='M555.55,476.77s1.53,1.72,1.68,1.94a11,11,0,0,1,1,2.31,1.55,1.55,0,0,1,.17.86c-.16.88-4.22.35-4.35-.43.05-1.13-.18-2.51.54-3.45Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.mouth.teeth, 23))}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(23) : () => ''
              }
              stroke={clear === 'customize' ? fills.black : ''}
              d='M560,478s1.83,1.38,2,1.57a11.39,11.39,0,0,1,1.46,2.07,1.52,1.52,0,0,1,.33.81c0,.89-4.06,1.17-4.34.44-.18-1.12-.68-2.43-.16-3.49C559.53,478.94,559.76,478.47,560,478Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.mouth.teeth, 23))}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(23) : () => ''
              }
              stroke={clear === 'customize' ? fills.black : ''}
              d='M565.84,477.69s1.35,1.86,1.48,2.1a12.23,12.23,0,0,1,.78,2.4,1.66,1.66,0,0,1,.08.88c-.25.85-4.23-.08-4.28-.86.15-1.13.06-2.53.87-3.38Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.mouth.teeth, 23))}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(23) : () => ''
              }
              stroke={clear === 'customize' ? fills.black : ''}
              d='M569,478s1.83,1.38,2,1.57a11.39,11.39,0,0,1,1.46,2.07,1.52,1.52,0,0,1,.33.81c0,.89-4.06,1.17-4.34.44-.18-1.12-.68-2.43-.16-3.49C568.53,478.94,568.76,478.47,569,478Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.mouth.teeth, 23))}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(23) : () => ''
              }
              stroke={clear === 'customize' ? fills.black : ''}
              d='M574.65,477.74s1.47,1.77,1.61,2a12.4,12.4,0,0,1,.94,2.35,1.55,1.55,0,0,1,.13.87c-.19.87-4.22.2-4.33-.58.09-1.13-.1-2.52.65-3.43Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.mouth.teeth, 23))}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(23) : () => ''
              }
              stroke={clear === 'customize' ? fills.black : ''}
              d='M578,478s1.83,1.38,2,1.57a11.39,11.39,0,0,1,1.46,2.07,1.52,1.52,0,0,1,.33.81c0,.89-4.06,1.17-4.34.44-.18-1.12-.68-2.43-.16-3.49C577.53,478.94,577.76,478.47,578,478Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.mouth.teeth, 23))}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(23) : () => ''
              }
              stroke={clear === 'customize' ? fills.black : ''}
              d='M582,478s1.83,1.38,2,1.57a11.39,11.39,0,0,1,1.46,2.07,1.52,1.52,0,0,1,.33.81c0,.89-4.06,1.17-4.34.44-.18-1.12-.68-2.43-.16-3.49C581.53,478.94,581.76,478.47,582,478Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.mouth.teeth, 23))}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(22) : () => ''
              }
              stroke={fills.black}
              d='M595.69,477.33c2.83,1,6.74,3.14,9.83,2.48,1.63-.35.88.51,2.44.05a147.58,147.58,0,0,1,18.3-3.93c4.57-.73,9.21.08,13.93-.05,2.18-.06,10.92-14.75,11.81-15.88.42-.54-2.66-4-3-4-4-.34-13,8.45-17,9-7.21,1-13.3,2.95-19.83,5.05l-3.55,1.73-3.16.71C601.31,473.82,599.26,475.5,595.69,477.33Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.mouth.back, 22))}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(23) : () => ''
              }
              stroke={clear === 'customize' ? fills.black : ''}
              d='M640.94,467.57c-.67-.63-.72-2.22-.6-3.19s.23-2,.43-2.89c.27-1.29.66-1.22,1.52-1.56a1.22,1.22,0,0,1,1.32.15c.54.44,2.07,4.49,1.83,5.12a.82.82,0,0,1-.34.37l-1.64,1.08c-.62.41-1.42,1.5-2.27,1.09A1.38,1.38,0,0,1,640.94,467.57Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.mouth.teeth, 23))}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(23) : () => ''
              }
              stroke={clear === 'customize' ? fills.black : ''}
              d='M635.18,470a6.24,6.24,0,0,1,.17-.93l1.36-5.59a4.31,4.31,0,0,1,1.38-.32c.46.12.55.34.77.74.73,1.3.81,3.52,1.15,5a7.44,7.44,0,0,1-3.64,1.87C635.41,470.91,635.14,470.68,635.18,470Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.mouth.teeth, 23))}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(23) : () => ''
              }
              stroke={clear === 'customize' ? fills.black : ''}
              d='M629.55,471.52a5.58,5.58,0,0,1,.37-.87l2.58-5.15a4.5,4.5,0,0,1,1.42,0c.41.23.45.46.58.9.42,1.42,0,3.61,0,5.1a7.41,7.41,0,0,1-4,1C629.57,472.44,629.35,472.15,629.55,471.52Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.mouth.teeth, 23))}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(23) : () => ''
              }
              stroke={clear === 'customize' ? fills.black : ''}
              d='M622.18,473.81c-.65-.66-.13-1.95.38-2.71a23.52,23.52,0,0,1,1.64-2.22c.83-1,1.32-.84,2.58-.92a2.35,2.35,0,0,1,1.69.42c.54.48,1.07,4.08.52,4.54a1.36,1.36,0,0,1-.59.22l-2.56.5c-1,.19-2.43.89-3.4.36A.88.88,0,0,1,622.18,473.81Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.mouth.teeth, 23))}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(23) : () => ''
              }
              stroke={clear === 'customize' ? fills.black : ''}
              d='M616,476a10.93,10.93,0,0,1,0-1.28,1.81,1.81,0,0,1,.19-.86,2.37,2.37,0,0,1,.57-.57c.95-.72,1.88-1.37,3-1a6.64,6.64,0,0,1,2.67,2,.16.16,0,0,1-.12.27c-1.61-.06-6.23,2.08-6.2,2.16A4,4,0,0,1,616,476Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.mouth.teeth, 23))}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(23) : () => ''
              }
              stroke={clear === 'customize' ? fills.black : ''}
              d='M610,478a10.93,10.93,0,0,1,0-1.28,1.81,1.81,0,0,1,.19-.86,2.37,2.37,0,0,1,.57-.57c.95-.72,1.88-1.37,3-1a6.64,6.64,0,0,1,2.67,2,.16.16,0,0,1-.12.27c-1.61-.06-6.23,2.08-6.2,2.16A4,4,0,0,1,610,478Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.mouth.teeth, 23))}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(23) : () => ''
              }
              stroke={clear === 'customize' ? fills.black : ''}
              d='M604,480a10.93,10.93,0,0,1,0-1.28,1.81,1.81,0,0,1,.19-.86,2.37,2.37,0,0,1,.57-.57c.95-.72,1.88-1.37,3-1a6.64,6.64,0,0,1,2.67,2,.16.16,0,0,1-.12.27c-1.61-.06-6.23,2.08-6.2,2.16A4,4,0,0,1,604,480Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.mouth.teeth, 23))}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(23) : () => ''
              }
              stroke={clear === 'customize' ? fills.black : ''}
              d='M553,481.81c.46-.66.09-1.95-.27-2.71s-.74-1.52-1.17-2.22c-.59-1-.94-.84-1.84-.92a1.33,1.33,0,0,0-1.2.42c-.38.48-.76,4.08-.36,4.54a.78.78,0,0,0,.42.22l1.81.5c.69.19,1.73.89,2.42.36A.86.86,0,0,0,553,481.81Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.mouth.teeth, 23))}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(24) : () => ''
              }
              stroke={fills.black}
              d='M540.52,477.44c.63.17,1.26.39,1.9.55a16.69,16.69,0,0,1,2.05.53c.34.13.66.3,1,.46l3.08,1.54c3.34,1.67,7.11,2.15,10.81,2.51a98.47,98.47,0,0,0,10.16.51,68.51,68.51,0,0,0,9.61-.32c2.31-.34,4.57-1,6.86-1.48,4.38-.93,8.58-.57,12.95-1.07,5.57-.64,10.81-2.9,16.3-3.94a156.86,156.86,0,0,0,18.51-4.35,34.42,34.42,0,0,0,9.77-5.16,103.44,103.44,0,0,0,8.69-7.37,0,0,0,0,1,.07.06c-.9,1.56-.81,3.49-1.49,5.14a34.7,34.7,0,0,1-2.57,5,46.11,46.11,0,0,1-7.5,9A63.19,63.19,0,0,1,621.5,491.4a98.16,98.16,0,0,1-27.43,6.69c-9.78,1.09-19.83,1.59-29.55-.25a52.71,52.71,0,0,1-8.9-2.49,37.44,37.44,0,0,1-8.71-4.55,19.31,19.31,0,0,1-6.52-7.49,14.42,14.42,0,0,1-1-2.93,6,6,0,0,1-.11-1,4,4,0,0,0-1.06-2.46,4.81,4.81,0,0,0,1.47.37Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.mouth.lips, 24))}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
            <motion.path
              className={
                clear === 'customize' ? (!erase ? 'bucket' : 'eraser') : ''
              }
              onClick={
                clear === 'customize' ? () => onCustomColor(24) : () => ''
              }
              stroke={fills.black}
              d='M541,473.82c13.71,0,26.57.91,40.25.15,3.23-.18,6.48-1,9.71-1l12-4c14.84-5.4,30.64-8.56,45.85-12.83-5,2.56-9.39,6-14.85,7.83-5.9,2.15-12.46,3.57-18.09,6.31-5.12,2.5-9.28,6.66-14.53,8.9-7.5,3.18-15.61,1.76-23.3.17A116.67,116.67,0,0,0,558,476.76C551.83,476.59,546.67,476.61,541,473.82Z'
              variants={icon}
              initial='hidden'
              animate={icon.visible(fill(fills.mouth.lips, 24))}
              transition={trans(1, 3, 2, 3)}
              transform='translate(-199.49 -165.5)'
            />
          </g>
        </motion.svg>
      </div>
    </Draggable>
  );
};

export default Yoni;
