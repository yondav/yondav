import { motion, type Variants } from 'framer-motion';
import { styled } from 'twin.macro';

const marlinAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    scale: [1.4, 0.99, 1],
    rotate: ['0deg', '-6deg', '2deg', '0deg'],
    transition: {
      ease: 'anticipate',
      opacity: { delay: 2 },
      scale: {
        delay: 2,
        duration: 0.15,
      },
      rotate: {
        duration: 0.33,
        delay: 2.4,
        repeat: Infinity,
        repeatDelay: 3,
      },
    },
  },
};

const muralAnimation: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const muralLetterAnimation: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.9,
      type: 'spring',
    },
  },
  visible: { opacity: 1, translateY: [-100, 5, 0] },
};

export default function Shea() {
  return (
    <g id='shea'>
      <rect fill='#00B6CE' width='1000' height='1000' />
      <motion.g variants={muralAnimation} initial='hidden' animate='visible'>
        <motion.path
          variants={muralLetterAnimation}
          fill='#DCD9D2'
          stroke='#000000'
          strokeWidth='2'
          d='M166.9,396.6 L100,396.6 L100,452.6 L149.3,452.6 L149.3,471.5 L102,471.5 L102,493.1 L167.5,493.1 L167.5,437.1 L126.3,437.1 L126.3,417.5 L166.9,417.5 Z'
        />
        <motion.path
          variants={muralLetterAnimation}
          fill='#DCD9D2'
          stroke='#000000'
          strokeWidth='2'
          d='M177.8,397.9l23.6,0v38.5h16.2v-39.2h21.6 v95.9h-22.3v-35.8h-15.5v35.1h-23C178.3,492.5,177.7,401.3,177.8,397.9z'
        />
        <motion.path
          variants={muralLetterAnimation}
          fill='#DCD9D2'
          stroke='#000000'
          strokeWidth='2'
          d='M249.9,397.2h57.4v17.6h-39.2v23h38.5v17.6 h-38.5v16.9h40.5v20.3h-58.8V397.2z'
        />
        <motion.path
          variants={muralLetterAnimation}
          fill='#DCD9D2'
          stroke='#000000'
          strokeWidth='2'
          d='M318.1,394.5c0,0-0.4,95.4,0,95.9h18v-34.2 h26.1v36.5h23.4v-98.2H318.1z M365,437.8h-28.4v-23.9c0.8,0,28.4,1.4,28.4,1.4V437.8z'
        />
        <motion.path
          variants={muralLetterAnimation}
          fill='#DCD9D2'
          stroke='#000000'
          strokeWidth='2'
          d='M443.1,473l0,22.1h63.5v-58.7h-39.8v-20.3 h40.5v-20.3h-63.5v58.8h39.8v16.9C483.6,471.5,444.5,473.1,443.1,473z'
        />
        <motion.path
          variants={muralLetterAnimation}
          fill='#DCD9D2'
          stroke='#000000'
          strokeWidth='2'
          d='M519.4,395.2v21.6h16.2v78.4h18.9v-78.4h23 v-22.9C577.5,393.9,521.7,395.2,519.4,395.2z'
        />
        <motion.path
          variants={muralLetterAnimation}
          fill='#DCD9D2'
          stroke='#000000'
          strokeWidth='2'
          d='M585,393.9v100.6h15.5v-36.6h26v38.7h18.3 l2.8-101.9L585,393.9z M628.6,441h-26.7v-26c-0.1,0-0.1,0,0,0l0,0c1.8,0.3,26.7,2.1,26.7,2.1L628.6,441z'
        />
        <motion.path
          variants={muralLetterAnimation}
          fill='#DCD9D2'
          stroke='#000000'
          strokeWidth='2'
          d='M698.7,395.2c0,0-39.4,0.7-39.9,0.7l-3.7,99.9 h38.4l25.1-21.6v-55.4L698.7,395.2z M701.6,468.1l-15.5,10.8h-11.8v-64.1l19.2,0.7l8.1,8.1L701.6,468.1z'
        />
        <motion.path
          variants={muralLetterAnimation}
          fill='#DCD9D2'
          stroke='#000000'
          strokeWidth='2'
          d='M748.3,401.3 V495.8 H724 V398.6 Z'
        />
        <motion.path
          variants={muralLetterAnimation}
          fill='#DCD9D2'
          stroke='#000000'
          strokeWidth='2'
          d='M779.4,399.3 L775.4,480.3 L795.6,480.3 L800.6,400.6 L819.9,400.6 L815.9,497.2 L754.4,497.2 L759.8,397.9 Z'
        />
        <motion.path
          variants={muralLetterAnimation}
          fill='#DCD9D2'
          stroke='#000000'
          strokeWidth='2'
          d='M820.7,496.5 H835.1 V436.9 L848.8,421.8 L855.7,433.5 L852.2,497.9 L865.2,497.9 L869.4,436.9 L878.9,421.2 L884.4,432.8 L881,496.5 L896.8,496.5 L900,401.3 H828.9 Z'
        />
      </motion.g>
      <motion.g variants={marlinAnimation} initial='hidden' animate='visible'>
        <path
          fill='#C0BEB1'
          stroke='#343434'
          d='M177.5,311.7c0,0,103-2.7,123.8-7.2 c15.4-3.3,29.9-11.7,43.2-19.8c4.2-2.6,6.4-4,11.1-5c11.5-2.6,23.3-3.7,35.1-3.3c9,0.3,17.8,2.3,26.6,3.1c9.7,0.9,19.4,2,29.1,3 l58.1,6l54.8,5.7c11.6,1.4,23.4,1.3,34.8,3.7c18.9,4,36.9,11.8,56,15.1c7.6,1.3,8.3-3.4,12.2-8.6c3.3-4.5,6.7-8.9,10.1-13.3 c6.7-8.6,13.7-17.1,20.9-25.3c8.7-9.8,19-22.9,31.6-27.9c21.6-8.6-24.8,40.3-24.8,40.3s-19.4,18.2-21.4,42.8 c-1.4,16.4,1.2,33.3,3.8,49.5c2.5,15.8,6.3,31.7,14,45.8c-6.9-2.6-12.6-7.8-16.9-13.8c-4.3-6-7.3-12.8-10.3-19.6 c-6.2-13.9-12.4-27.8-18.5-41.7c-0.3-0.9-0.8-1.6-1.5-2.3c-1-0.7-2.1-1-3.2-1c-29.8-3.3-59.7,5.5-88.5,11.7 c-3.3,0.7-6.5,1.4-9.7,2c-2,0.4-5.3,0.2-6.7,1.9c-1.3,1.5-1.1,5.1-1.2,7c-0.2,5.3,0.7,11,3.8,15.4c5.2,7.2,11.5,11.9,6.1,11.9 c-4.7,0-9.7-2.6-13.9-4.7c-5.5-2.7-10.6-6.2-15.2-10.2c-7.9-7-18.1-7.8-28.4-8.7c-11.7-1.1-23.4-1.4-35.1-1.6 c-19.1-0.3-38.3,0.3-57.4-0.2c-23.4-0.7-79.2-4.3-93.7-9c-6.8-2.2-12.2-5.9-18.3-9.2c-6.9-3.7-17.9-2.9-25.4-2.1 c-3.2,0.3-6.6,0.9-9.5-0.5s-4.8-5.4-2.8-7.9c1.4-1.7,3.9-1.9,6-1.9l42.5-1.2c1.3,0.1,2.6-0.2,3.7-0.9c1.7-1.2,1.9-3.7,1.8-5.9 c0.1-0.8-0.1-1.6-0.5-2.3c-0.4-0.5-0.9-0.9-1.5-1.1c-11.1-5.1-23.6-6.3-35.8-6.4c-18.3-0.1-36.6,0.1-54.9,0 c-7.9-0.1-15.7-0.2-23.6-0.3c-2.3,0-8.2,0.9-10.3-0.5C176.4,312.4,177.5,311.7,177.5,311.7z'
        />
        <path
          fill='#526A6C'
          d='M257.7,314.2c2.9,0,5.8,0,8.7,0c12.2,0.1,24.7,1.3,35.8,6.4c0.4,0.2,0.8,0.4,1.1,0.6 c0.2-0.1,4.3,3.2,4.4,3c0.4-0.8-4.4-5.1-5.2-5.6l-16.3-10.3c-0.5-0.4-1.1-0.7-1.8-0.9c-0.8-0.2-1.6-0.2-2.5-0.2l-18.5,0.8 c-20.6,1.3-44.8,2.2-62.3,2.8l-1.1,0l-12.9,0.6l-6.5,0.3c-0.6,0-3.7,0-3.5,0.9c0,0.1,0.1,0.2,0.2,0.3l0.2,0.2 c0.8,0.4,1.7,0.7,2.5,0.7h3.6c1.6-0.1,3.2-0.2,4.1-0.2c5,0.1,9.9,0.2,14.9,0.2l51.6,0.1C255.6,314.1,256.7,314.1,257.7,314.2z'
        />
        <path
          opacity='0.3'
          d='M725,237.9c-12.6,5-22.9,18.1-31.6,27.9c-7.3,8.2-14.2,16.7-20.9,25.3c-3.4,4.4-6.8,8.8-10.1,13.3 c-2.5,3.4-3.7,6.6-6.3,8c-1.2,0.7-2.1,1.8-2.4,3.1l-3.2,11.8c-0.6,2.2-2.6,3.8-4.9,3.8l-319.7,3.9c-0.3,0-0.6,0-0.9-0.1 c-3.2-0.6-22.3-3.9-25.6-4.3c-0.3,0-0.6-0.1-0.9,0l-43.3,1.2c-0.7,0-1.3,0.1-1.9,0.2c-6.1,1.5-4,7.8-0.2,9.5 c2.9,1.3,6.3,0.8,9.5,0.5c7.6-0.8,18.6-1.6,25.4,2.1c6.1,3.3,11.6,7,18.3,9.2c14.4,4.7,70.2,8.3,93.7,9 c19.1,0.6,38.3-0.1,57.4,0.2c11.7,0.2,23.4,0.5,35.1,1.6c10.2,0.9,20.3,1.7,28.3,8.7c4.6,4.1,9.7,7.5,15.2,10.3 c4.1,2.1,9.1,4.7,13.9,4.7c5.4,0-0.9-4.7-6.1-11.9c-3.2-4.4-4-10.1-3.8-15.4c0.1-1.9-0.1-5.5,1.2-7c1.5-1.7,4.7-1.5,6.7-1.9 c3.2-0.7,6.5-1.4,9.7-2c28.9-6.1,58.7-15,88.5-11.7c0.4,0,0.8,0.1,1.2,0.2c1.4,0.3,2.6,1.3,3.2,2.6c0.1,0.2,0.2,0.4,0.2,0.6 c6.2,13.9,12.4,27.8,18.5,41.7c3,6.8,6,13.6,10.3,19.6c4.3,6,10,11.3,16.9,13.8c-7.7-14.2-11.5-30-14-45.8 c-2.5-16.2-5.1-33-3.8-49.5c2-24.5,21.4-42.8,21.4-42.8S746.6,229.3,725,237.9z'
        />
        <path
          fill='#3A3732'
          d='M608.7,307.9c-0.2,0-0.5,0-0.7-0.1c-0.2-0.2-0.3-0.4-0.4-0.7c-0.7-2.1-1.2-4.2-1.5-6.3 c-0.2-2.4,0.1-4.1,1.1-5.2c0.9-0.9,2.1-1.3,3.3-1.2h0.4c0.8,0,1.5,0.3,2.1,0.8c0.8,0.8,0.7,2.2,0.6,3.5l0,0.5h0.5h0.5 c1.4,0,2.7,0.1,4,0.4c0.7,0.1,1.1,0.3,1.3,0.7c0.1,0.3,0.1,0.5,0,0.8c-0.1,0.4-0.1,0.9,0.1,1.3c0.4,0.6,1.1,0.9,1.9,0.9 c0.8,0.1,1.6,0.1,2.4,0.1c0.4,0,0.7,0,1.1,0l-0.1,4.9L608.7,307.9z'
        />
        <path
          fill='#343434'
          d='M610.5,294v0.8l0,0h0.4c0.7,0,1.3,0.2,1.8,0.7c0.7,0.7,0.6,2,0.5,3.2l-0.1,0.9h0.9h0.5 c1.3,0,2.7,0.1,4,0.4c0.7,0.1,0.9,0.3,1,0.4c0,0.2,0,0.4,0,0.6c-0.1,0.5-0.1,1.1,0.1,1.6c0.5,0.7,1.3,1.1,2.2,1.1 c0.8,0.1,1.6,0.1,2.4,0.1h0.6l-0.2,4.1l-16-0.2c-0.2,0-0.3,0-0.4,0c-0.1-0.1-0.2-0.3-0.2-0.5c-0.7-2-1.2-4.1-1.5-6.3 c-0.2-2.3,0.1-3.9,1-4.9c0.8-0.8,1.9-1.2,3-1.1L610.5,294 M610.5,294c-4.3,0-5.1,3.3-4.8,6.8c0.3,2.2,0.8,4.3,1.5,6.4 c0.1,0.3,0.3,0.7,0.6,0.9c0.3,0.1,0.6,0.2,0.9,0.2l16.8,0.2l0.1-5.7c-0.5,0-1,0-1.5,0c-0.8,0-1.6,0-2.3-0.1 c-0.6,0-1.3-0.2-1.5-0.7c-0.3-0.5,0.2-1.4-0.1-2.1s-0.9-0.8-1.6-0.9c-1.4-0.2-2.7-0.4-4.1-0.4h-0.6c0.1-1.3,0.2-2.8-0.7-3.8 c-0.6-0.6-1.5-1-2.4-1L610.5,294L610.5,294z M678.2,312.9c3.8-22.6,22.1-38.8,36.4-55 c3.3-3.8,7.1-7.6,9.7-11.9c0.9-1.6,2.5-4.4-0.7-3.3c-12,4.2-40.5,38.4-40.5,38.4l-23.7,31 M651.6,338.2 c11.3,23.1,22.8,45.9,36.3,67.8c-12.7-34.5-21.5-81.2-1.6-114.3c7.9-13.2,18-25.1,28.6-36.2c2.2-2.4,4.6-4.8,5.7-7.8 c-5.9,1.2-10.6,5.8-14.5,10c-9.3,9.7-18.1,19.9-26.6,30.3c-8.8,10.8-17.7,21.4-25.8,32.9'
        />
        <path
          opacity='0.5'
          d='M662.3,304.4c-3.9,5.2-4.6,9.9-12.2,8.6c-19.1-3.3-37-11.1-56-15.1c-11.4-2.4-23.3-2.2-34.8-3.7l-54.8-5.7 l-58.2-6c-9.7-1-19.4-2.1-29.1-3c-8.9-0.8-17.6-2.8-26.6-3.1c-11.8-0.4-23.6,0.7-35.1,3.3c-4.7,1-6.9,2.5-11.1,5 c-12.8,7.9-26.8,15.9-41.5,19.4l66.7,2.6c1.6,0.1,2.6-3.4,4.1-4.1c2.8-1.2,8.2-0.2,11.2,0.2c0.1-1.9-0.4-11.3,2.2-11.8 c1,0,1.9,0.6,2.2,1.6c0.2,0.9,0.4,1.9,0.4,2.9c0.1,1,0.6,1.9,1.4,2.4c0.5,0.2,1,0.2,1.5,0.4c0.9,0.4,1.5,1.3,1.7,2.3 c0.8,4-0.2,4.1,4.6,4.3c3.3,0.2,6.7,0.2,10,0.3c5.2,0.1,3.4-1.6,6-4.7c0.6-0.6,1.4-1,2.2-1.1c1.3-0.2,4.9-0.7,6,0.2 c1.1,0.9,0.5,2.4,1.1,3.5c1.2,2.2,2.5,2.4,5,2.5c3,0.2,6.5,1.6,9.4,0.8c4.5-1.2,2.3-4.2,4.1-7.2c1-1.6,3.3-1.5,5.2-1.3 c3.9,0.5,3.1,3.5,3,6.5c0,0.8,11.5,1.4,12.5,1.5c7.6,0.6,2.3-5.2,6.9-8c0.6-0.3,1.3-0.5,1.9-0.5c1.5-0.1,3-0.1,4.5,0 c4,0.5,1.9,4.3,3.1,6.6c1.3,2.5,5.7,2.3,8,2.4c3.6,0.1,7,0.5,5.9-4.4c-0.4-1.7-0.7-3.8,0.8-4.7c0.6-0.3,1.2-0.5,1.9-0.4 c2.6-0.1,5-0.5,6,1.5c1,2-0.2,5.1-0.4,7.3c-0.1,0.6-0.1,1.3,0.2,1.8c0.5,0.8,1.6,0.9,2.6,0.9c2.6,0,12,1.3,13.6-0.5 c1-1.1,0.3-6.1,0.3-7.6c0-0.3,5-1.7,5.4-1.8c1.5,1.1,2.8,2.3,4.1,3.6c1.2,1.4,1.7,3.3,1.4,5.2c4.6-0.5,9.5-0.3,14.1-0.4 c-0.6,0-0.3-6.1,1-6.8c1.1-0.5,2.4-0.7,3.6-0.5c1.2,0.2,2.5,0.1,3.7-0.1c-0.5,0.2,1.2,9.3,1.8,9.7c1.9,1.3,9.3,0.2,11.7,0.2 c-0.1-1.7-1.3-4.9-0.2-6.4c1.4-1.8,6.3-0.4,8.3,0.2c0.7,0.2,0,5.2,0.6,5.9c0.6,0.7,2.2,0.5,3.2,0.6c2.2,0.2,4.5,0.3,6.8,0.4 c0,0,42.3,4.2,51.3,7.2c5.5,1.8,11.3,2.5,17.1,2.2c0.3,0,0.7,0,1-0.2c0.4-0.2,0.8-0.6,1-1c3.6-5.3,8.9-10.9,10.3-17.3 C664,302.2,663.2,303.3,662.3,304.4z'
        />
        <path
          stroke='#343434'
          d='M378.7,330.2c2.6-2.9,10-3.3,13.5-4.1 c24-6,48.4-11.7,73.4-8.8c3,0.4,6.1,0.9,8.5,2.7l-66.9,13.3c-5.5,1.1-11.2,2.3-15.5,5.8c-2.4,2-4.5,4.8-7.5,5.7 c-0.7,0.2-1.4,0.2-2,0c-0.8-0.5-1.4-1.3-1.5-2.3c-0.8-2.5-3.4-9.5-2.1-12C378.4,330.5,378.5,330.3,378.7,330.2z'
        />
        <path
          fill='#176282'
          stroke='#343434'
          d='M351,280.6c0.4-8.4,8.5-20.4,12.3-28.1c2.4-4.9,5-9.7,7.8-14.5 c1.6-2.7,6.7-9.1,8.4-12.9c4.6-6.4,10.3-12.9,18.1-14.7l-4.7,28.5c-1.5,9.1-2.7,19.2,2.6,26.6c5.2,7.3,14.9,9.4,23.8,10.8 c44.8,7.1,90.2,9.8,135.3,14.1c3.7,0.4,7.7,0.9,10.2,3.6l-106.6-6.7l-53.9-3.4C386.8,283,368.2,283.5,351,280.6z'
        />
        <path
          stroke='#343434'
          d='M507.1,361.2c0,0,15.6,7.9,21.9,13.1 c5.4,4.4,11.6,8.8,18.5,10.5c-4.4-4.4-8.3-8.6-9.7-14.8c-0.7-3.5-1.1-7.1-1.1-10.6c-0.1-3.2,0-7.3,3-9.3 M316.6,310.6c-1.3-0.1-2.7,0-3.9,0.4 c-2.1,0.6-5.2,3.3-3.1,5.6c0.9,0.8,2,1.4,3.2,1.5c1.5,0.3,3.1,0.3,4.6,0c1.5-0.4,2.8-1.4,3.5-2.8 C322.2,312,319.5,310.8,316.6,310.6z M314.5,314c-0.1,2.8,0.7,4.3,1,4.3 c0.2,0,0.3,0.1,0.5,0.1c0.5,0,1-0.1,1.4-0.2c1.5-0.4,2.8-1.4,3.5-2.8c1.4-3.3-1.4-4.5-4.3-4.7C316.6,310.6,314.6,311.2,314.5,314z  M357.6,351.5c7-7.3,13.4-15.2,19.1-23.5 c4.9-7.2,12.7-17.4,13-26.4'
        />
        <path
          opacity='0.3'
          d='M355.5,279.7c0,0,22.2-49.5,31.9-57.9c0,0,1.9-3.1,4.2-4.6s-4.5,34-3.3,41.5c1.2,7.5,15,21.2,22,21'
        />
      </motion.g>
    </g>
  );
}