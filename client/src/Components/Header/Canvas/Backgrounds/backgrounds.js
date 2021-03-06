import { Crowd } from './Ces';
import Shea from './Shea';
import BigSnow from './Big_Snow';
import Tape from './Tape';
import Grass from './Dogs/Grass';

const solidColor = (color) => ({
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
        initial: { x: 700 },
        animate: {
          x: 0,
          scale: [0, 2, 1],
          rotate: [0, 0, 20, 50, 0],
          borderRadius: ['20%', '20%', '50%', '0%'],
        },
        transition: { duration: 1.5 },
        style: solidColor('var(--yellow)'),
      },
    },
    {
      name: 'pink',
      state: 'pink',
      thumbnail:
        'https://res.cloudinary.com/yup-schlepp/image/upload/v1628814769/yondav/background_thumbnails/pink_cvrcfo.png',
      element: {
        initial: { x: -700 },
        animate: {
          x: 0,
          scale: [0, 2, 1],
          rotate: [0, 0, 33, 10, 0],
          borderRadius: ['20%', '20%', '0%'],
        },
        transition: { duration: 1.5 },
        style: solidColor('var(--pink)'),
      },
    },
    {
      name: 'purple',
      state: 'purple',
      thumbnail:
        'https://res.cloudinary.com/yup-schlepp/image/upload/v1628814769/yondav/background_thumbnails/purple_kkdszp.png',
      element: {
        initial: { scale: 0 },
        animate: {
          scale: [0, 1.5, 1],
          rotate: [0, 0, 14, 13, 0],
          borderRadius: ['20%', '50%', '0%'],
        },
        transition: { duration: 1.5 },
        style: solidColor('var(--purple)'),
      },
    },
    {
      name: 'orange',
      state: 'orange',
      thumbnail:
        'https://res.cloudinary.com/yup-schlepp/image/upload/v1628814769/yondav/background_thumbnails/orange_ziagmb.png',
      element: {
        initial: { y: -900 },
        animate: {
          y: [100, 300, -100, 500, 0],
          rotate: [0, 0, 170, -70, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '0%'],
        },
        transition: { duration: 1.5 },
        style: solidColor('var(--orange)'),
      },
    },
    {
      name: 'red',
      state: 'red',
      thumbnail:
        'https://res.cloudinary.com/yup-schlepp/image/upload/v1628814769/yondav/background_thumbnails/red_cjurxn.png',
      element: {
        initial: { x: 4000, scale: 0 },
        animate: {
          x: 0,
          scale: [1, 3, 1],
          rotate: [0, 0, 22, 11, 0],
          borderRadius: ['20%', '20%', '50%', '0%'],
        },
        transition: { duration: 1 },
        style: solidColor('var(--red)'),
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
        style: solidColor('var(--green)'),
      },
    },
    {
      name: 'blue',
      state: 'blue',
      thumbnail:
        'https://res.cloudinary.com/yup-schlepp/image/upload/v1628814769/yondav/background_thumbnails/blue_tw7q54.png',
      element: {
        initial: { y: 900 },
        animate: {
          borderRadius: ['20%', '20%', '50%', '50%', '0%'],
          y: [0, 500, 0, 400, 0, 300, 0, 200, 0, 100, 0],
        },
        transition: { duration: 2.5 },
        style: solidColor('var(--blue)'),
      },
    },
    {
      name: 'alt_blue',
      state: 'alt_blue',
      thumbnail:
        'https://res.cloudinary.com/yup-schlepp/image/upload/v1628814769/yondav/background_thumbnails/blue_alt_odd3vz.png',
      element: {
        initial: { y: -700 },
        animate: {
          y: 0,
          rotate: [0, 0, 70, 0],
          scale: [1, 4, 1],
          borderRadius: ['20%', '20%', '50%', '50%', '0%'],
        },
        transition: { duration: 1.5 },
        style: solidColor('var(--alt-blue)'),
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
        transition: { duration: 1.5 },
        style: solidColor('var(--brown)'),
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
    {
      name: 'big snow',
      state: 'big_snow',
      thumbnail:
        'https://res.cloudinary.com/yup-schlepp/image/upload/v1630639198/yondav/background_thumbnails/big_snow_x01rys.png',
      element: BigSnow,
    },
    {
      name: 'tape',
      state: 'tape',
      thumbnail:
        'https://res.cloudinary.com/yup-schlepp/image/upload/v1630653414/yondav/background_thumbnails/tape_yjt1b6.png',
      element: Tape,
    },
    {
      name: 'dogs',
      state: 'dogs',
      thumbnail:
        'https://res.cloudinary.com/yup-schlepp/image/upload/v1630678863/yondav/background_thumbnails/dogs_s1utxp.png',
      element: Grass,
    },
  ],
};
