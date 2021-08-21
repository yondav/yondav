import React from 'react';
import Draggable from 'react-draggable';
import { motion } from 'framer-motion';
import { fills, paths } from './fills';
import { icon } from '../../../../Utils/animations';
const Path = React.lazy(() => import('./Path'));

const style = {
  border: '1px dashed var(--pr-black)',
  borderRadius: 'var(--radius)',
};

const Yoni = ({ yoni, customColors, onCustomColor, erase, customize }) => {
  const trans = (defDuration, defDelay, fillDuration, fillDelay) => {
    return yoni === 'start' && customize !== 'color'
      ? {
          default: { duration: defDuration, delay: defDelay },
          fill: {
            duration: fillDuration,
            ease: [1, 0, 0.8, 0],
            delay: fillDelay,
          },
        }
      : {
          default: { duration: 0, delay: 0 },
          fill: {
            duration: 0.5,
            delay: 0,
          },
        };
  };

  const fill = (color, i) => {
    if (customize === 'color') {
      return customColors[i];
    } else {
      switch (yoni) {
        case 'clear':
          return '#f4f4f4';
        case 'start':
          return color;
        case 'color':
          return color;
        default:
          break;
      }
    }
  };

  const cursor = customize === 'color' ? (!erase ? 'bucket' : 'eraser') : '';
  const colorAction = (i) =>
    customize === 'color' ? () => onCustomColor(i) : () => '';
  return (
    <Draggable handle='.controls'>
      <div className='yoni-container' style={customize === 'move' ? style : ''}>
        {customize === 'move' && (
          <div className='controls move' style={{ height: '1rem' }}></div>
        )}
        <div className='inner-container'>
          <motion.svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 802.13 915.65'
            className='yoni'
          >
            <g>
              <motion.polygon
                className={cursor}
                onTap={
                  customize === 'color' ? () => onCustomColor(0) : () => ''
                }
                fill={() => fill(fills.shadow, 0)}
                points='497.01 367 501.01 367 510.01 375 512.01 383 513.01 394 508.01 404 505.01 410 502.01 414 498.01 410 491.01 371 497.01 367'
                variants={icon}
                initial='hidden'
                animate={icon.visible(fill(fills.shadow, 0))}
                transition={trans(1, 4, 2, 4)}
              />
              <Path
                customize={customize}
                erase={erase}
                group={paths(colorAction, fill, trans, yoni, customize)}
              />
              <motion.polyline
                className={cursor}
                onTap={
                  customize === 'color' ? () => onCustomColor(6) : () => ''
                }
                stroke={yoni === 'clear' || customize ? fills.black : ''}
                points='699.01 797 730.01 797 775.01 784'
                variants={icon}
                initial='hidden'
                animate={icon.visible(fill(fills.skin_shadow[2], 6))}
                transition={trans(1, 7, 2, 7)}
              />
              <motion.polyline
                className={cursor}
                onTap={
                  customize === 'color' ? () => onCustomColor(6) : () => ''
                }
                stroke={yoni === 'clear' || customize ? fills.black : ''}
                points='29.51 841.5 52.51 845.5 64.51 843.5 88.51 845.5 90.51 848.5'
                variants={icon}
                initial='hidden'
                animate={icon.visible(fill(fills.skin_shadow[2], 6))}
                transition={trans(1, 7, 2, 7)}
              />
            </g>
          </motion.svg>
        </div>
      </div>
    </Draggable>
  );
};

export default Yoni;
