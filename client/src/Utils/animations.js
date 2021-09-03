// for Yoni
export const yoniAnimation = {
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

// for Shea
export const letters = {
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

export const fish = {
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

// for icons
export const icons = {
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

export const icon = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

// for varet
export const varet = {
  init: { scale: 0 },
  anim: {
    scale: [1.8, 0.8, 1.2, 1],
    rotate: [5, 0, -5, 0],
    y: [100, -100, 100, 0],
  },
  trans: { duration: 1 },
};

// for big snow
export const big_snow = {
  drop: {
    init: { y: -4000 },
    anim: { y: [-4000, 0, -30, 0], rotate: [15, -15, 0] },
    trans: { duration: 1, delay: 1.5 },
  },
  line: {
    init: { opacity: 0, scale: 0 },
    anim: { opacity: 1, scale: 1 },
    trans: { duration: 1, delay: 2 },
  },
  letters: {
    init: { opacity: 0 },
    anim: { opacity: 1 },
    trans: { duration: 1, delay: 3.2, ease: 'easeIn' },
  },
};
