// for Yoni
export const icon = {
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
