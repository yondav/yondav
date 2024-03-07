import { motion } from 'framer-motion';
import 'twin.macro';
import { theme } from 'twin.macro';

const logoContainerAnimation = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 2.5,
    },
  },
};
const logoPathAnimation = {
  hidden: {},
  visible: {
    scale: [1, 0.95, 1],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatDelay: 5,
    },
  },
};

export const Logo = () => (
  <motion.svg
    variants={logoContainerAnimation}
    initial='hidden'
    animate='visible'
    viewBox='0 0 179 192'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <motion.path
      variants={logoPathAnimation}
      d='M43.25 192H3.24358C2.14152 192 1.24714 191.108 1.24356 190.006C1.0403 127.338 0.756057 64.6691 0.750095 2C0.74999 0.895431 1.64543 0 2.75 0H43.25C44.3546 0 45.25 0.895431 45.25 2V78.0388C45.25 80.0049 47.7895 80.791 48.9003 79.1687L81.107 32.1299C82.0158 30.8026 81.0654 29 79.4568 29H59.25C58.1454 29 57.25 28.1046 57.25 27V2C57.25 0.895431 58.1454 0 59.25 0H110.25C111.355 0 112.25 0.895431 112.25 2V40.3432C112.25 40.7698 112.114 41.1853 111.861 41.5289L45.6394 131.471C45.3865 131.815 45.25 132.23 45.25 132.657V190C45.25 191.105 44.3546 192 43.25 192Z'
      fill={theme`colors.neutral.800`}
      stroke={theme`colors.neutral.800`}
      strokeWidth='0.01'
    />
    <motion.path
      variants={logoPathAnimation}
      d='M176.25 192H52.25C51.1454 192 50.25 191.105 50.25 190V133.289C50.25 132.858 50.3892 132.438 50.6468 132.093L111.71 50.2246C111.882 49.9932 112.25 50.1153 112.25 50.404V99.3887C112.25 99.7871 112.131 100.176 111.908 100.507L92.3527 129.507C91.4569 130.835 92.4087 132.625 94.0109 132.625H132.25C133.355 132.625 134.25 131.73 134.25 130.625V2C134.25 0.895431 135.145 0 136.25 0H176.25C177.355 0 178.25 0.895434 178.25 2V190C178.25 191.105 177.355 192 176.25 192Z'
      fill={theme`colors.neutral.800`}
      stroke={theme`colors.neutral.800`}
      strokeWidth='0.01'
    />
  </motion.svg>
);