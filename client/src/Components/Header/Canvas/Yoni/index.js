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
            <g id='shadow'>
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
            </g>
            <g id='hair'>
              <Path
                customize={customize}
                erase={erase}
                group={paths.hair.paths(colorAction, fill, trans)}
              />
            </g>
            <g id='skin'>
              <Path
                customize={customize}
                erase={erase}
                group={paths.skin.paths(colorAction, fill, trans)}
              />
            </g>
            <g id='skin-shadows'>
              <Path
                customize={customize}
                erase={erase}
                group={paths.skin_shadows.paths(
                  colorAction,
                  fill,
                  trans,
                  yoni,
                  customize
                )}
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
            <g id='eye-backs'>
              <Path
                customize={customize}
                erase={erase}
                group={paths.eye_backs.paths(colorAction, fill, trans)}
              />
            </g>
            <g id='Pupils'>
              <Path
                customize={customize}
                erase={erase}
                group={paths.pupils.paths(colorAction, fill, trans)}
              />
            </g>
            <g id='beard'>
              <Path
                customize={customize}
                erase={erase}
                group={paths.beard.paths(
                  colorAction,
                  fill,
                  trans,
                  yoni,
                  customize
                )}
              />
            </g>
            <g id='eyebrows'>
              <Path
                customize={customize}
                erase={erase}
                group={paths.eyebrows.paths(
                  colorAction,
                  fill,
                  trans,
                  yoni,
                  customize
                )}
              />
            </g>
            <g id='facial-details'>
              <Path
                customize={customize}
                erase={erase}
                group={paths.facial_details.paths(trans)}
              />
            </g>
            <g id='sleeve-body'>
              <Path
                customize={customize}
                erase={erase}
                group={paths.sleeve_body.paths(colorAction, fill, trans)}
              />
            </g>
            <g id='sleeve-accent'>
              <Path
                customize={customize}
                erase={erase}
                group={paths.sleeve_accent.paths(
                  colorAction,
                  fill,
                  trans,
                  yoni,
                  customize
                )}
              />
            </g>
            <g id='shirt-body'>
              <Path
                customize={customize}
                erase={erase}
                group={paths.shirt_body.paths(colorAction, fill, trans)}
              />
            </g>
            <g id='collar-body'>
              <Path
                customize={customize}
                erase={erase}
                group={paths.collar_body.paths(colorAction, fill, trans)}
              />
            </g>
            <g id='collar-accent'>
              <Path
                customize={customize}
                erase={erase}
                group={paths.collar_accent.paths(
                  colorAction,
                  fill,
                  trans,
                  yoni,
                  customize
                )}
              />
            </g>
            <g id='collar-thread'>
              <Path
                customize={customize}
                erase={erase}
                group={paths.collar_thread.paths(trans, yoni, customize)}
              />
            </g>
            <g id='hat_bill' data-name='hat bill'>
              <Path
                customize={customize}
                erase={erase}
                group={paths.hat_bill.paths(colorAction, fill, trans)}
              />
            </g>
            <g id='hat_top' data-name='hat top'>
              <Path
                customize={customize}
                erase={erase}
                group={paths.hat_top.paths(colorAction, fill, trans)}
              />
            </g>
            <g id='glasses'>
              <Path
                customize={customize}
                erase={erase}
                group={paths.glasses.paths(colorAction, fill, trans, yoni)}
              />
            </g>
            <g id='Layer_10' data-name='Layer 10'>
              <Path
                customize={customize}
                erase={erase}
                group={paths.layer_10.paths(trans)}
              />
            </g>
            <g id='mouth'>
              <Path
                customize={customize}
                erase={erase}
                group={paths.mouth.paths(
                  colorAction,
                  fill,
                  trans,
                  yoni,
                  customize
                )}
              />
            </g>
          </motion.svg>
        </div>
      </div>
    </Draggable>
  );
};

export default Yoni;
