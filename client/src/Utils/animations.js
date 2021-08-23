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
