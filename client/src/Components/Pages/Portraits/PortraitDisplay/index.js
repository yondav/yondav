import React, { useState, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useViewportScroll,
  useTransform,
} from 'framer-motion';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import './portrait-display.css';

const PortraitThumbnail = ({ id, onExpand, anim }) => {
  return (
    <motion.img
      src={`https://res.cloudinary.com/yup-schlepp/image/upload/v1629812976/yondav/portraits/${id}.png`}
      alt=''
      onClick={() => onExpand(id)}
      className='portrait-thumbnails'
      layoutId={`portrait-${id}`}
      style={anim}
    />
  );
};

const PortraitDisplay = () => {
  const { scrollYProgress } = useViewportScroll();
  const [portraitIds, setPortraitIds] = useState([
    '00_panqf7',
    '01_ptozfh',
    '02_h8bok5',
    '03_aqaqv3',
    '04_pqqkbg',
    '05_qpqqhc',
    '06_vg9t9y',
    '07_hukcvy',
    '08_nz2spu',
    '09_r7lalb',
    '13_f9li8f',
    '10_dcoscn',
    '11_jwzxxi',
    '12_nrgpxr',
  ]);
  const [portrait, setPortrait] = useState('00_panqf7');
  const [height, setHeight] = useState();
  const [isDesktop, setDesktop] = useState(false);

  const opacityAnim = useTransform(
    scrollYProgress,
    [0, 0.5, 0.55],
    [0, 0.3, 1]
  );
  const saturate = useTransform(
    scrollYProgress,
    [0.54, 0.55],
    ['grayscale(100%)', 'grayscale(0%)']
  );
  const xPosAnim = useTransform(
    scrollYProgress,
    [0, 0.5, 0.55],
    [1000, 500, 0]
  );

  const setAsPrimary = (id) => {
    const currentPortraitId = portrait;
    const newPortraitIds = [
      ...portraitIds.filter((x) => x !== id),
      currentPortraitId,
    ];

    setPortrait(id);
    setPortraitIds(newPortraitIds);
  };

  useEffect(() => {
    const updateMedia = () => {
      if (window.innerWidth >= 960) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };

    if (window.innerWidth) {
      updateMedia();
      setHeight(document.querySelector('.primary-portrait').clientHeight);
    }

    window.addEventListener('resize', () => {
      updateMedia();
      isDesktop &&
        setHeight(document.querySelector('.primary-portrait').clientHeight);
      console.log(document.querySelector('.primary-portrait').clientHeight);
    });
    return () => window.removeEventListener('resize', updateMedia);
  }, [setHeight, height, isDesktop]);

  return (
    <Box xs={{ flexGrow: 1 }} style={{ maxHeight: '100%' }}>
      <Grid
        container
        spacing={isDesktop ? 6 : 0}
        style={{
          margin: 0,
          width: '100%',
        }}
      >
        <Grid item xs={12} md={9}>
          <div className='primary-container'>
            <AnimatePresence>
              <motion.img
                key={portrait}
                className='primary-portrait'
                src={`https://res.cloudinary.com/yup-schlepp/image/upload/v1629812976/yondav/portraits/${portrait}.png`}
                alt=''
                layoutId={`portrait-${portrait}`}
                style={{ opacity: opacityAnim, filter: saturate, x: xPosAnim }}
              />
            </AnimatePresence>
          </div>
        </Grid>
        <Grid item xs={12} md={3} style={{ height: '100%' }}>
          <div
            className='portrait-gallery'
            style={
              isDesktop ? { height: height } : { width: '100%', height: 'auto' }
            }
          >
            <AnimatePresence>
              {portraitIds.map((id, i) => (
                <PortraitThumbnail
                  id={id}
                  key={i}
                  onExpand={setAsPrimary}
                  anim={{
                    opacity: opacityAnim,
                    filter: saturate,
                    x: xPosAnim,
                  }}
                />
              ))}
            </AnimatePresence>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PortraitDisplay;
