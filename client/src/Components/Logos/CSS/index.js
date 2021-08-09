import React, { useState } from 'react';

const CSS = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? props.primaryDark || '#000000'
        : '#2965f1'
      : !color
      ? props.primaryWhite || '#ffffff'
      : '#2965f1',
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
        viewBox='0 0 256 232'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMidYMid'
      >
        <g>
          <path
            className={props.transition}
            d='M100.90241,231.617947 L217.358491,192.964882 L256,0 L37.8672926,0 L29.5704613,43.055701 L204.381692,43.055701 L198.939063,70.5461768 L23.8620565,70.5461768 L15.2994493,113.601878 L190.122235,113.601878 L180.519635,162.88598 L109.973459,185.962264 L49.0183263,162.88598 L53.1782974,141.358129 L10.1225964,141.358129 L0,192.964882 L100.90241,231.617947'
            fill={fill.path_one}
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default CSS;
