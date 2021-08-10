import React, { useState } from 'react';

const AcrobatDC = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? props.primaryDark || '#343434'
        : '#3b1b16'
      : !color
      ? props.primaryWhite || '#f4f4f4'
      : '#3b1b16',
    path_two: props.theme
      ? !color
        ? props.primaryWhite || '#f4f4f4'
        : '#e54629'
      : !color
      ? props.primaryDark || '#343434'
      : '#e54629',
  };

  const handleMouseOver = () => {
    props.hover === 'colorize' ? setColor(true) : setColor(false);
  };

  const handleMouseLeave = () => {
    props.hover === 'colorize' ? setColor(false) : setColor(true);
  };

  return (
    <div
      className='react-logos-wrapper'
      onMouseEnter={props.hover ? handleMouseOver : ''}
      onMouseLeave={props.hover ? handleMouseLeave : ''}
    >
      <svg
        className={props.transition}
        width={props.width || 128}
        height={props.height || 128}
        viewBox='0 0 128 128'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          className={props.transition}
          d='M0 20C0 8.95431 8.95431 0 20 0H108C119.046 0 128 8.95431 128 20V108C128 119.046 119.046 128 108 128H20C8.95431 128 0 119.046 0 108V20Z'
          fill={fill.path_one}
        />
        <rect
          className={props.transition}
          width='128'
          height='128'
          fill={fill.path_one}
        />
        <path
          className={props.transition}
          d='M104.445 75.9335C98.1318 69.3773 80.8914 72.0483 76.7634 72.534C70.6928 66.7062 66.5649 59.6644 65.1079 57.2361C67.2933 50.6799 68.7503 44.1237 68.9931 37.0819C68.9931 31.0113 66.5649 24.4551 59.7658 24.4551C57.3376 24.4551 55.1522 25.912 53.9381 27.8546C51.0242 32.9539 52.2383 43.1524 56.852 53.5938C54.1809 61.1213 51.7527 68.406 44.9536 81.2756C37.9118 84.1895 23.0996 90.9885 21.8855 98.2732C21.3998 100.459 22.1283 102.644 23.8281 104.344C25.5278 105.801 27.7132 106.529 29.8986 106.529C38.8831 106.529 47.6247 94.1452 53.6953 83.7038C58.7945 82.004 66.8077 79.5758 74.8208 78.1189C84.2909 86.3749 92.5469 87.589 96.9177 87.589C102.745 87.589 104.931 85.1607 105.659 82.9753C106.873 80.5471 106.145 77.8761 104.445 75.9335ZM98.3746 80.0615C98.1318 81.7612 95.9464 83.461 92.0612 82.4897C87.4476 81.2756 83.3196 79.0902 79.6773 76.1763C82.834 75.6907 89.8758 74.9622 94.9751 75.9335C96.9177 76.4191 98.8603 77.6332 98.3746 80.0615ZM57.8232 30.04C58.3089 29.3115 59.0374 28.8259 59.7658 28.8259C61.9512 28.8259 62.4369 31.4969 62.4369 33.6823C62.1941 38.7816 61.2228 43.8809 59.523 48.7373C55.8807 39.0244 56.6091 32.2254 57.8232 30.04ZM57.3376 77.1476C59.2802 73.2624 61.9512 66.4634 62.9225 63.5495C65.1079 67.1919 68.7503 71.5627 70.6928 73.5053C70.6928 73.7481 63.1653 75.205 57.3376 77.1476ZM43.0111 86.8605C37.4261 96.0878 31.5984 101.916 28.4417 101.916C27.9561 101.916 27.4704 101.673 26.9848 101.43C26.2563 100.944 26.0135 100.216 26.2563 99.2445C26.9848 95.8449 33.2982 91.2313 43.0111 86.8605Z'
          fill={fill.path_two}
        />
      </svg>
    </div>
  );
};

export default AcrobatDC;
