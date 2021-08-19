import React from 'react';
import { motion } from 'framer-motion';

const letters = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
  trans: (del) => {
    return {
      duration: 0.5,
      delay: del,
    };
  },
};

const path = {
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
const Shea = () => {
  const trans = (defDuration, defDelay, fillDuration, fillDelay) => {
    return {
      default: {
        duration: defDuration,
        delay: defDelay,
      },
      fill: {
        duration: fillDuration,
        ease: [1, 0, 0.8, 0],
        delay: fillDelay,
      },
    };
  };
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1060 1060'
      initial={{ y: -4000 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <rect width='1060' height='1060' fill='#00b6ce' />
      <g>
        <motion.polygon
          initial={letters.hidden}
          animate={letters.visible}
          transition={letters.trans(1)}
          points='99.91 296.72 16.29 296.72 16.29 366.83 77.95 366.83 77.95 390.48 18.82 390.48 18.82 417.51 100.76 417.51 100.76 347.4 49.23 347.4 49.23 322.91 99.91 322.91 99.91 296.72'
          fill='#dcd9d2'
        />
        <motion.path
          initial={letters.hidden}
          animate={letters.visible}
          transition={letters.trans(1.1)}
          d='M113.43,298.41H143v48.15h20.27v-49h27V417.51H162.42V372.74H143v43.93H114.27S115.12,298.41,113.43,298.41Z'
          transform='translate(0 0)'
          fill='#dcd9d2'
        />
        <motion.path
          initial={letters.hidden}
          animate={letters.visible}
          transition={letters.trans(1.2)}
          d='M203,297.57H275.6v22h-49v28.72h48.15v22H226.61v21.12h50.68v25.34H203.81S206.76,293.76,203,297.57Z'
          transform='translate(0 0)'
          fill='#dcd9d2'
        />
        <motion.path
          initial={letters.hidden}
          animate={letters.visible}
          transition={letters.trans(1.3)}
          d='M289.12,294.19s-.56,119.38,0,119.94h22.52v-42.8H344.3V417h29.29V294.19Zm58.56,54.06H312.21V318.4c-.85.85,35.47,1.69,35.47,1.69Z'
          transform='translate(0 0)'
          fill='#dcd9d2'
        />
        <motion.path
          initial={letters.hidden}
          animate={letters.visible}
          transition={letters.trans(1.4)}
          d='M445.38,392.17V420h79.4V346.56H475V321.22h50.68V295.88h-79.4v73.48h49.84v21.12S444.12,393.44,445.38,392.17Z'
          transform='translate(0 0)'
          fill='#dcd9d2'
        />
        <motion.path
          initial={letters.hidden}
          animate={letters.visible}
          transition={letters.trans(1.5)}
          d='M540.83,295v27h20.28v98h23.65v-98h28.72V293.34S538.72,292.92,540.83,295Z'
          transform='translate(0 0)'
          fill='#dcd9d2'
        />
        <motion.path
          initial={letters.hidden}
          animate={letters.visible}
          transition={letters.trans(1.6)}
          d='M622.91,293.34V419.1h19.35V373.37H674.8v48.36h22.86l3.52-127.51Zm54.52,58.92H644v-32.5c-.17,0-.18,0,0,0v0c2.2.32,33.41,2.6,33.41,2.6Z'
          transform='translate(0 0)'
          fill='#dcd9d2'
        />
        <motion.path
          initial={letters.hidden}
          animate={letters.visible}
          transition={letters.trans(1.7)}
          d='M765.09,295s-49.86,1.69-49.86.85l-4.62,125h48l31.39-27V324.6Zm3.69,91.23-19.39,13.51H734.62V319.53l24,.84,10.16,10.14Z'
          transform='translate(0 0)'
          fill='#dcd9d2'
        />
        <motion.polygon
          initial={letters.hidden}
          animate={letters.visible}
          transition={letters.trans(1.8)}
          points='827.18 302.63 827.18 420.89 796.77 420.89 799.3 299.25 827.18 302.63'
          fill='#dcd9d2'
        />
        <motion.polygon
          initial={letters.hidden}
          animate={letters.visible}
          transition={letters.trans(1.9)}
          points='866.03 300.1 860.97 401.46 886.31 401.46 892.6 301.79 916.72 301.79 911.65 422.58 834.78 422.58 841.54 298.41 866.03 300.1'
          fill='#dcd9d2'
        />
        <motion.polygon
          initial={letters.hidden}
          animate={letters.visible}
          transition={letters.trans(2)}
          points='917.71 421.71 935.7 421.71 942.55 347.18 952.84 328.33 961.4 342.9 957.12 423.42 973.39 423.42 978.53 347.18 990.53 327.48 997.38 342.04 993.1 421.71 1012.8 421.71 1016.86 302.63 927.99 302.63 917.71 421.71'
          fill='#dcd9d2'
        />
      </g>
      <motion.path
        initial={letters.hidden}
        animate={letters.visible}
        transition={letters.trans(2.1)}
        d='M169.74,184.94s128.84-3.37,154.82-9c19.23-4.16,37.39-14.61,54-24.8,5.2-3.2,8-5,13.89-6.27a176.14,176.14,0,0,1,43.86-4.09c11.27.38,22.24,2.83,33.33,3.82,12.14,1.07,24.27,2.48,36.4,3.75l72.72,7.56,68.6,7.14c14.47,1.81,29.25,1.61,43.55,4.62,23.69,5,46.14,14.75,70,18.88,9.51,1.65,10.36-4.22,15.23-10.77q6.21-8.4,12.63-16.64c8.42-10.81,17.12-21.41,26.2-31.67,10.85-12.27,23.8-28.65,39.53-34.88,27-10.7-31,50.4-31,50.4s-24.21,22.81-26.75,53.5c-1.7,20.55,1.55,41.61,4.73,61.88,3.11,19.79,7.82,39.64,17.51,57.34-8.69-3.19-15.8-9.77-21.17-17.31s-9.16-16.06-12.93-24.52q-11.58-26.06-23.18-52.12a7.53,7.53,0,0,0-1.82-2.85,7.43,7.43,0,0,0-4.06-1.31c-37.27-4.16-74.63,6.9-110.72,14.59Q639,233.5,633,234.75c-2.49.52-6.61.29-8.43,2.42-1.59,1.86-1.38,6.38-1.46,8.73-.22,6.61.83,13.8,4.78,19.29,6.47,9,14.35,14.92,7.6,14.92-5.91,0-12.18-3.24-17.34-5.83a88.76,88.76,0,0,1-19-12.77c-9.93-8.75-22.69-9.75-35.46-10.93-14.58-1.35-29.26-1.78-43.9-2-23.94-.4-47.92.43-71.85-.26-29.28-.84-99.11-5.35-117.13-11.26-8.45-2.77-15.25-7.42-22.93-11.55-8.6-4.63-22.34-3.6-31.83-2.6-4,.43-8.24,1.07-11.91-.6s-6.06-6.75-3.47-9.84c1.75-2.08,4.82-2.32,7.54-2.39l53.21-1.44a8.28,8.28,0,0,0,4.67-1.07c2.18-1.55,2.32-4.67,2.26-7.35a4.89,4.89,0,0,0-.66-2.83,4.71,4.71,0,0,0-1.93-1.34c-13.89-6.36-29.49-7.93-44.77-8-22.89-.17-45.76.16-68.65-.06-9.82-.09-19.65-.19-29.47-.41-2.86-.06-10.29,1.1-12.83-.6C168.33,185.79,169.74,184.94,169.74,184.94Z'
        transform='translate(0 0)'
        fill='#c0beb1'
        stroke='#343434'
        strokeMiterlimit='10'
      />
      <g>
        <motion.path
          initial={letters.hidden}
          animate={letters.visible}
          transition={letters.trans(2.2)}
          d='M270.08,188c3.63,0,7.26,0,10.89,0,15.28.11,30.88,1.68,44.77,8a7.27,7.27,0,0,1,1.41.81c.21-.12,5.42,4,5.54,3.81.56-1-5.56-6.35-6.51-7l-20.39-12.87a9,9,0,0,0-2.22-1.14,9.29,9.29,0,0,0-3.07-.21l-23.17,1c-25.79,1.57-56,2.76-77.89,3.51l-1.39.06-16.14.73-8.07.36c-.71,0-4.6,0-4.33,1.14a.88.88,0,0,0,.23.4l.28.2a7,7,0,0,0,3.18.85h4.52c2-.11,4-.28,5.13-.26q9.33.21,18.67.3l64.55.11C267.41,187.92,268.74,187.93,270.08,188Z'
          transform='translate(0 0)'
          fill='#526a6c'
        />
        <motion.path
          initial={letters.hidden}
          animate={letters.visible}
          transition={letters.trans(2.3)}
          d='M854.49,92.59c-15.73,6.23-28.68,22.61-39.53,34.88-9.08,10.26-17.78,20.86-26.2,31.67q-6.42,8.24-12.63,16.64c-3.8,5.11-5.17,9.79-10.1,10.83l-6.14,22.55-410.8,27-1-6.82c-.49-3.42-.44-7.82-1.71-11a11.48,11.48,0,0,0-2-3c-3.1-3.75-5.9-7.73-8.7-11.71-1.9-2.7-5.09-7.48-8.89-7.25.25.33.6.58.85.92a4.89,4.89,0,0,1,.66,2.83c.06,2.68-.08,5.8-2.26,7.35a8.28,8.28,0,0,1-4.67,1.07l-54.64,1.48a11.06,11.06,0,0,0-2.43.29c-7.57,1.85-5,9.75-.21,11.9,3.67,1.67,7.91,1,11.91.6,9.49-1,23.23-2,31.83,2.6,7.68,4.13,14.48,8.78,22.93,11.55,18,5.91,87.85,10.42,117.13,11.26,23.93.69,47.91-.14,71.85.26,14.64.25,29.32.68,43.9,2,12.72,1.18,25.45,2.17,35.36,10.84a90.49,90.49,0,0,0,19.06,12.86c5.17,2.59,11.44,5.83,17.35,5.83,6.75,0-1.13-5.91-7.6-14.92-4-5.49-5-12.68-4.78-19.29.08-2.35-.13-6.87,1.46-8.73,1.82-2.13,5.94-1.9,8.43-2.42q6.09-1.26,12.18-2.56c36.09-7.69,73.45-18.75,110.72-14.59a7.43,7.43,0,0,1,4.06,1.31,7.53,7.53,0,0,1,1.82,2.85q11.6,26.06,23.18,52.12c3.77,8.46,7.56,17,12.93,24.52s12.48,14.12,21.17,17.31c-9.69-17.7-14.4-37.55-17.51-57.34-3.18-20.27-6.43-41.33-4.73-61.88,2.54-30.69,26.75-53.5,26.75-53.5S881.52,81.89,854.49,92.59Z'
          transform='translate(0 0)'
          fill='#526a6c'
        />
      </g>
      <g>
        <motion.path
          initial={letters.hidden}
          animate={letters.visible}
          transition={letters.trans(2.4)}
          d='M709,180.18a1.65,1.65,0,0,1-.83-.14,1.6,1.6,0,0,1-.49-.85,36.33,36.33,0,0,1-1.86-7.93c-.3-3,.15-5.18,1.33-6.48a5.33,5.33,0,0,1,4.15-1.52l.51,0a3.86,3.86,0,0,1,2.64,1c1,1.06.88,2.72.7,4.34l-.06.57.57,0h.68a29.45,29.45,0,0,1,5.05.45c.92.17,1.42.43,1.58.83a2.2,2.2,0,0,1,0,1,2.58,2.58,0,0,0,.12,1.66,2.7,2.7,0,0,0,2.32,1.12c1,.07,2,.1,2.95.1.44,0,.88,0,1.32,0l-.13,6.11Z'
          transform='translate(0 0)'
          fill='#3a3732'
        />
        <motion.path
          initial={letters.hidden}
          animate={letters.visible}
          transition={letters.trans(2.5)}
          d='M711.25,162.76v1h0l.49,0a3.33,3.33,0,0,1,2.29.87c.83.9.74,2.44.58,3.94l-.13,1.14,1.14,0h.67a27.48,27.48,0,0,1,5,.45c.93.16,1.15.39,1.2.51a1.92,1.92,0,0,1,0,.77,3.09,3.09,0,0,0,.17,2,3.16,3.16,0,0,0,2.74,1.39c1,.07,2,.1,3,.1h.8L729,180l-20-.27a1.58,1.58,0,0,1-.56-.06,1.32,1.32,0,0,1-.28-.59,36.52,36.52,0,0,1-1.85-7.82c-.28-2.85.13-4.9,1.21-6.09a4.82,4.82,0,0,1,3.78-1.36v-1m0,0c-5.39,0-6.42,4.1-6,8.55a38.34,38.34,0,0,0,1.89,8,2,2,0,0,0,.69,1.11,1.92,1.92,0,0,0,1.09.22l21,.28.15-7.13c-.61,0-1.22,0-1.82,0-1,0-1.95,0-2.92-.1-.73-.05-1.58-.2-1.92-.85s.23-1.79-.09-2.63-1.17-1-2-1.14a29.59,29.59,0,0,0-5.14-.46h-.69c.18-1.64.29-3.51-.83-4.73a4.25,4.25,0,0,0-3-1.19l-.53,0Z'
          transform='translate(0 0)'
          fill='#343434'
        />
      </g>
      <g>
        <motion.path
          variants={path}
          initial='hidden'
          animate={path.visible('#7f7e79')}
          transition={trans(0.2, 2.7, 0.5, 3)}
          d='M795.93,186.38c-1,8.94-2.26,18.08-2.26,27.09,0,32.81,7.21,65.17,18.28,96-13.4-14.33-22.42-32-30.56-49.64-3.5-7.59-6.87-15.23-10.42-22.79-1.77-3.78-3.58-7.54-5.47-11.27-1.35-2.65-2.73-5.28-4.09-7.93a3.74,3.74,0,0,0-.93-1.28c-1.41-1-5.08-.58-6.77-.64q-4.29-.13-8.6-.14c-5.71,0-11.43.17-17.13.52a300.16,300.16,0,0,0-34.08,4.13l-.69.12c-10.25,1.85-20.44,4-30.64,6.13-8.07,1.68-16.16,3.33-24.26,4.84-7,1.29-14.52.14-16.32,8.21a36.66,36.66,0,0,0,1.33,20.43c1.17,3.18,9.4,15.75,11.37,17.68-7.31-1.22-12.93-2.86-18-6.29-5.83-4-11.9-9-17.81-12.82C578.33,245.32,548.24,246,524.69,247c-12.69.58-25.37-.21-38.06-.28-18.83-.1-37.66.18-56.48-.88-16.33-.91-34-1.83-51.33-3.24-16.14-1.32-32-2.92-46.3-8.81S302,216,285.37,219.29'
          transform='translate(0 0)'
          // fill='#7f7e79'
          stroke='#343434'
          strokeMiterlimit='10'
        />
        <motion.path
          variants={path}
          initial='hidden'
          animate={path.visible('#7f7e79')}
          transition={trans(0.2, 2.8, 0.5, 3.1)}
          d='M795.93,186.38c4.7-28.22,27.67-48.48,45.51-68.81,4.14-4.71,8.87-9.5,12.09-14.92,1.15-1.94,3.09-5.52-.92-4.12-15,5.26-50.68,48.06-50.68,48.06l-29.65,38.73'
          transform='translate(0 0)'
          // fill='#7f7e79'
          stroke='#343434'
          strokeMiterlimit='10'
        />
      </g>
      <motion.path
        variants={path}
        initial='hidden'
        animate={path.visible('#176282')}
        transition={trans(0.2, 3, 0.5, 3.3)}
        d='M762.74,218.1c14.19,28.89,28.46,57.43,45.37,84.83-15.9-43.11-26.83-101.6-2-143,9.9-16.49,22.47-31.36,35.73-45.23,2.81-2.94,5.75-6,7.13-9.78-7.34,1.53-13.2,7.27-18.19,12.5-11.63,12.16-22.64,24.83-33.24,37.89-11,13.54-22.18,26.82-32.22,41.12'
        transform='translate(0 0)'
        // fill='#176282'
        stroke='#343434'
        strokeMiterlimit='10'
      />
      <motion.path
        variants={path}
        initial='hidden'
        animate={path.visible('#605d55')}
        transition={trans(0.2, 3.2, 0.5, 3.5)}
        d='M776.13,175.78c-4.87,6.55-5.72,12.42-15.23,10.77-23.85-4.13-46.3-13.9-70-18.88-14.3-3-29.08-2.81-43.55-4.62l-68.6-7.14L506,148.35c-12.13-1.27-24.26-2.68-36.4-3.75-11.09-1-22.06-3.44-33.33-3.82a176.14,176.14,0,0,0-43.86,4.09c-5.9,1.3-8.69,3.07-13.89,6.27-16,9.82-33.46,19.86-51.91,24.3L410,178.75c2.06.08,3.26-4.22,5.19-5.08,3.44-1.53,10.31-.2,14,.22.18-2.32-.46-14.14,2.71-14.72a2.71,2.71,0,0,1,2.73,2,18.15,18.15,0,0,1,.51,3.62,3.79,3.79,0,0,0,1.77,3c.6.29,1.3.3,1.92.55a3.84,3.84,0,0,1,2.12,2.89c1,5.06-.27,5.08,5.81,5.42,4.17.23,8.35.31,12.53.42,6.48.16,4.23-1.94,7.48-5.94a4.52,4.52,0,0,1,2.78-1.36c1.58-.28,6.18-.83,7.52.26s.67,3,1.39,4.34c1.46,2.76,3.09,3,6.27,3.15,3.72.2,8.11,2,11.81,1,5.58-1.48,2.82-5.3,5.19-9,1.26-2,4.12-1.92,6.46-1.61,4.94.66,3.84,4.43,3.75,8.17,0,1,14.39,1.8,15.65,1.9,9.52.79,2.85-6.48,8.59-10a5.59,5.59,0,0,1,2.42-.64,26.3,26.3,0,0,1,5.61.06c5,.58,2.4,5.4,3.9,8.24,1.63,3.11,7.12,2.89,10,3,4.48.17,8.79.6,7.39-5.5-.48-2.09-.85-4.77,1-5.92a4.71,4.71,0,0,1,2.34-.56c3.26-.17,6.3-.62,7.5,1.89s-.25,6.4-.56,9.09a3.45,3.45,0,0,0,.26,2.27c.62,1,2,1.1,3.19,1.1,3.22,0,15,1.68,17-.62,1.19-1.38.33-7.6.4-9.55,0-.37,6.25-2.07,6.74-2.23a36.39,36.39,0,0,1,5.07,4.52,7.78,7.78,0,0,1,1.73,6.49c5.76-.63,11.82-.42,17.66-.55-.75,0-.41-7.59,1.3-8.54a8.21,8.21,0,0,1,4.56-.66,12.9,12.9,0,0,0,4.64-.18c-.67.21,1.51,11.58,2.27,12.09,2.43,1.64,11.57.23,14.64.3-.1-2.09-1.63-6.15-.19-8,1.8-2.3,7.82-.5,10.32.2.82.23,0,6.52.71,7.35s2.77.6,3.94.71c2.81.24,5.64.34,8.45.51,0,0,52.94,5.25,64.2,9A60.49,60.49,0,0,0,764,194.63a3.14,3.14,0,0,0,1.25-.22,3.26,3.26,0,0,0,1.24-1.26c4.51-6.66,11.12-13.59,12.85-21.61C778.25,173,777.18,174.36,776.13,175.78Z'
        transform='translate(0 0)'
        // fill='#605d55'
        stroke='#343434'
        strokeMiterlimit='10'
      />
      <motion.path
        variants={path}
        initial='hidden'
        animate={path.visible('#3e739b')}
        transition={trans(0.2, 3.4, 0.5, 3.7)}
        d='M421.33,208.1c3.29-3.58,12.49-4.09,16.92-5.19,30.06-7.5,60.55-14.68,91.74-10.95,3.73.45,7.61,1.11,10.59,3.4L456.86,212c-6.85,1.37-14,2.87-19.39,7.3-3.06,2.52-5.59,6-9.38,7.14a3.64,3.64,0,0,1-2.54,0,4.38,4.38,0,0,1-1.92-2.86c-1-3.12-4.22-11.89-2.67-15A2.6,2.6,0,0,1,421.33,208.1Z'
        transform='translate(0 0)'
        fill='#3e739b'
        stroke='#343434'
        strokeMiterlimit='10'
      />
      <motion.path
        initial={letters.hidden}
        animate={letters.visible}
        transition={letters.trans(2.5)}
        d='M386.71,146c.44-10.5,10.61-25.53,15.39-35.1,3.06-6.13,6.28-12.19,9.75-18.09,2-3.42,10.48-12.53,10.48-16.15,5.8-8,12.93-16.08,22.59-18.34L439,94c-1.86,11.32-3.43,24,3.27,33.31,6.55,9.08,18.69,11.73,29.74,13.5,56,8.93,112.79,12.29,169.28,17.64,4.59.44,9.64,1.11,12.71,4.55l-133.33-8.4-67.37-4.25C431.51,149,408.24,149.66,386.71,146Z'
        transform='translate(0 0)'
        fill='#176282'
        stroke='#343434'
        strokeMiterlimit='10'
      />
      <motion.path
        variants={path}
        initial='hidden'
        animate={path.visible('#175282')}
        transition={trans(0.2, 3.7, 0.5, 4)}
        d='M581.94,246.89s19.52,9.94,27.41,16.33c6.75,5.47,14.52,11,23.11,13.1-5.46-5.47-10.35-10.81-12.18-18.53a64.4,64.4,0,0,1-1.37-13.29c-.1-4.05.05-9.14,3.76-11.69'
        transform='translate(0 0)'
        // fill='#175282'
        stroke='#343434'
        strokeMiterlimit='10'
      />
      <g>
        <motion.path
          variants={path}
          initial='hidden'
          animate={path.visible('#f4f4f4')}
          transition={trans(0.2, 4, 0.5, 4.3)}
          d='M343.74,183.59a15.46,15.46,0,0,0-4.94.45c-2.66.77-6.52,4.12-3.93,7a7.05,7.05,0,0,0,4,1.88,13.06,13.06,0,0,0,5.8,0,6.42,6.42,0,0,0,4.39-3.56C350.76,185.32,347.32,183.83,343.74,183.59Z'
          transform='translate(0 0)'
          // fill='#f4f4f4'
          stroke='#343434'
          strokeMiterlimit='10'
        />
        <motion.path
          variants={path}
          initial='hidden'
          animate={path.visible('#162e3a')}
          transition={trans(0.2, 4.2, 0.5, 4.5)}
          d='M341.07,187.76c-.14,3.52.84,5.35,1.26,5.35a3.26,3.26,0,0,1,.57.17,9.69,9.69,0,0,0,1.78-.27,6.42,6.42,0,0,0,4.39-3.56c1.69-4.13-1.75-5.62-5.33-5.86C343.74,183.59,341.21,184.24,341.07,187.76Z'
          transform='translate(0 0)'
          // fill='#162e3a'
          stroke='#343434'
          strokeMiterlimit='10'
        />
      </g>
      <motion.path
        variants={path}
        initial='hidden'
        animate={path.visible('#605d55')}
        transition={trans(0.2, 4.4, 0.5, 4.7)}
        d='M395,234.68a239.19,239.19,0,0,0,23.95-29.36c6.14-9,15.89-21.73,16.26-33'
        transform='translate(0 0)'
        fill='none'
        // stroke='#605d55'
        strokeMiterlimit='10'
      />
    </motion.svg>
  );
};

export default Shea;
