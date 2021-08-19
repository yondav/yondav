import Shea from '../Backgrounds/Shea';
import Crowd from '../Backgrounds/Crowd';

const dimensions = (color) => ({
  width: '100vw',
  height: '100vh',
  backgroundColor: color,
});

export const backgrounds = {
  blank: {
    name: 'blank',
    state: false,
  },
  colors: [
    {
      name: 'yellow',
      state: 'yellow',
      thumbnail:
        'https://res.cloudinary.com/yup-schlepp/image/upload/v1628814776/yondav/background_thumbnails/yellow_p3okoi.png',
      element: {
        initial: { x: 4000 },
        animate: { x: 0, scale: [0, 2, 1] },
        transition: { duration: 1 },
        style: dimensions('var(--yellow)'),
      },
    },
    {
      name: 'pink',
      state: 'pink',
      thumbnail:
        'https://res.cloudinary.com/yup-schlepp/image/upload/v1628814769/yondav/background_thumbnails/pink_cvrcfo.png',
      element: {
        initial: { x: -4000 },
        animate: { x: 0, scale: [0, 2, 1] },
        transition: { duration: 1 },
        style: dimensions('var(--pink)'),
      },
    },
    {
      name: 'purple',
      state: 'purple',
      thumbnail:
        'https://res.cloudinary.com/yup-schlepp/image/upload/v1628814769/yondav/background_thumbnails/purple_kkdszp.png',
      element: {
        initial: { scale: 0 },
        animate: { scale: [0, 2, 1] },
        transition: { duration: 1 },
        style: dimensions('var(--purple)'),
      },
    },
    {
      name: 'orange',
      state: 'orange',
      thumbnail:
        'https://res.cloudinary.com/yup-schlepp/image/upload/v1628814769/yondav/background_thumbnails/orange_ziagmb.png',
      element: {
        initial: { scale: 0 },
        animate: {
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '0%'],
        },
        transition: { duration: 1.5 },
        style: dimensions('var(--orange)'),
      },
    },
    {
      name: 'red',
      state: 'red',
      thumbnail:
        'https://res.cloudinary.com/yup-schlepp/image/upload/v1628814769/yondav/background_thumbnails/red_cjurxn.png',
      element: {
        initial: { x: 4000, scale: 0 },
        animate: { x: 0, scale: [1, 3, 1] },
        transition: { duration: 1 },
        style: dimensions('var(--red)'),
      },
    },
    {
      name: 'green',
      state: 'green',
      thumbnail:
        'https://res.cloudinary.com/yup-schlepp/image/upload/v1628814769/yondav/background_thumbnails/green_eytvxx.png',
      element: {
        initial: { y: 4000 },
        animate: {
          y: 0,
          scale: [1, 4, 1],
          rotate: [0, 0, 45, 45, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '0%'],
        },
        transition: { duration: 1 },
        style: dimensions('var(--green)'),
      },
    },
    {
      name: 'blue',
      state: 'blue',
      thumbnail:
        'https://res.cloudinary.com/yup-schlepp/image/upload/v1628814769/yondav/background_thumbnails/blue_tw7q54.png',
      element: {
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          y: [0, 500, 0, 400, 0, 300, 0, 200, 0, 100, 0],
        },
        transition: { duration: 2.5 },
        style: dimensions('var(--blue)'),
      },
    },
    {
      name: 'alt_blue',
      state: 'alt_blue',
      thumbnail:
        'https://res.cloudinary.com/yup-schlepp/image/upload/v1628814769/yondav/background_thumbnails/blue_alt_odd3vz.png',
      element: {
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          rotate: [0, 0, 270, 0],
          scale: [1, 4, 1],
          borderRadius: ['20%', '20%', '50%', '50%', '0%'],
        },
        transition: { duration: 1.5 },
        style: dimensions('var(--alt-blue)'),
      },
    },
    {
      name: 'brown',
      state: 'brown',
      thumbnail:
        'https://res.cloudinary.com/yup-schlepp/image/upload/v1628814769/yondav/background_thumbnails/brown_cgqxay.png',
      element: {
        initial: { x: 4000 },
        animate: {
          x: 0,
          rotate: [45, 0],
          scale: [1, 4, 1],
          borderRadius: ['20%', '20%', '50%', '50%', '0%'],
        },
        transition: { duration: 0.5 },
        style: dimensions('var(--brown)'),
      },
    },
  ],
  illustrations: [
    {
      name: 'shea',
      state: 'shea',
      thumbnail:
        'https://res.cloudinary.com/yup-schlepp/image/upload/v1628815040/yondav/background_thumbnails/shea_rgjmaw.png',
      element: Shea,
    },
    {
      name: 'ces',
      state: 'ces',
      thumbnail:
        'https://res.cloudinary.com/yup-schlepp/image/upload/v1629310420/yondav/background_thumbnails/ces_lwkui8.png',
      element: Crowd,
    },
  ],
};
