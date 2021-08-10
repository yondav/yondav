import React, { useState } from 'react';

const HandleBars = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? props.primaryDark || '#343434'
        : 'var(--orange)'
      : !color
      ? props.primaryWhite || '#f4f4f4'
      : 'var(--orange)',
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
        viewBox='0 0 512 124'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMidYMid'
      >
        <g>
          <path
            className={props.transition}
            d='M188.431907,0.000869242479 C206.231043,-0.0766628844 224.484295,5.02938147 238.318221,16.5373642 C245.406862,22.2747418 251.133155,29.4741535 255.99552,37.138758 C264.745563,22.9946828 277.527268,10.9772032 293.288421,5.18444573 C312.49421,-2.02604207 334.203174,-1.52762126 353.375733,5.5388783 C370.122648,11.6528403 384.765125,22.3079698 398.045251,34.026397 C408.434541,43.1973399 418.048512,53.2322123 428.74793,62.0597988 C434.385615,66.6341943 440.444188,70.9206133 447.377766,73.290881 C456.593,76.4364703 467.491785,73.4680974 474.082007,66.3683698 C480.184885,59.722759 479.808301,48.236928 473.085167,42.1672703 C468.80983,38.4789562 461.499669,39.2210495 458.47592,44.1388014 C455.828755,48.0375598 457.312941,52.8999318 459.384153,56.676854 C453.87938,52.6562595 448.363531,47.0517942 448.385682,39.7416222 C447.244853,31.2906203 453.513871,23.8364603 461.0234,20.8791633 C475.676952,15.0199498 494.052039,20.070614 503.300502,32.9741751 C512.194532,45.0138069 512.903395,60.8414367 511.352755,75.1848802 C509.48091,88.8083825 501.86062,101.523651 490.563098,109.409776 C474.702264,120.729467 454.599318,124.240565 435.471064,123.996892 C417.084899,123.498471 398.887027,119.344964 381.852136,112.477833 C353.364657,101.025231 326.704719,85.1976005 297.286857,76.0488097 C287.528899,72.2608114 277.150685,70.211748 266.717091,69.5804151 C258.41009,69.525035 250.535051,69.1373743 242.693241,69.6690232 C233.123576,70.5883328 223.609289,72.548788 214.648804,76.0598857 C184.732521,85.363741 157.673848,101.590107 128.643646,113.064862 C104.132452,122.601314 76.9740946,127.031721 50.9565651,121.737384 C36.4026981,118.791163 21.9152869,112.355997 12.0908729,100.892318 C3.68418708,91.1454224 -0.347477777,78.097873 0.0512583107,65.3161482 C-0.413933793,53.2543644 2.23323077,40.4394114 10.2079525,31.046948 C17.628874,22.1418295 29.5798807,17.6228141 41.054619,18.6196557 C48.4423125,18.9630123 55.9296902,22.1861335 60.4930033,28.1339552 C64.081628,32.8412629 64.303148,39.2875055 62.7303556,44.7922865 C60.8142073,49.7432667 56.8600744,53.6087969 52.5625854,56.5771698 C54.7556339,52.8777798 56.0847543,47.9932557 53.4929697,44.1277254 C50.303081,38.9773771 42.4501952,38.4568041 38.2966944,42.687843 C33.1795813,47.9489517 32.1052091,56.5439418 35.5387698,62.9901843 C39.2603066,69.7465553 46.9581283,73.6010096 54.4122778,74.3874068 C65.6876484,75.3620965 75.4677584,68.3731291 83.7415321,61.5946061 C100.865032,46.8524259 116.282827,29.9836504 135.278171,17.5120539 C150.939639,7.0119887 169.392259,-0.0877389026 188.431907,0.000869242479 L188.431907,0.000869242479 L188.431907,0.000869242479 Z'
            fill={fill.path_one}
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default HandleBars;
