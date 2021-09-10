import React, { Suspense } from 'react';
import Draggable from 'react-draggable';
import { motion } from 'framer-motion';
import { paths } from '../../../../data/svg/yoni';
import { yoniAnimation } from '../../../../Utils/animations';
import Loading from '../../../Loading';

const Path = React.lazy(() => import('../../../SVG'));

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
    <Draggable handle='.controls' bounds={{ top: -100 }}>
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
              <Suspense fallback={<Loading />}>
                <Path
                  group={paths(
                    colorAction,
                    fill,
                    trans,
                    yoni,
                    customize,
                    cursor,
                    yoniAnimation
                  )}
                />
              </Suspense>
            </g>
          </motion.svg>
        </div>
      </div>
    </Draggable>
  );
};

export default Yoni;
