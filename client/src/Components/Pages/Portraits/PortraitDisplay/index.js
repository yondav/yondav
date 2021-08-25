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
      src={`https://res.cloudinary.com/yup-schlepp/image/upload/${id}.jpg`}
      alt=''
      onClick={() => onExpand(id)}
      className='portrait-thumbnails'
      layoutId={`portrait-${id}`}
      style={anim}
    />
  );
};

const PortraitDisplay = ({ position, isDesktop }) => {
  const { scrollYProgress } = useViewportScroll(0);
  const [portraitIds, setPortraitIds] = useState([
    'v1629905275/yondav/portraits/00_akqpcm',
    'v1629905275/yondav/portraits/01_ewrwig',
    'v1629905275/yondav/portraits/02_ckz8vj',
    'v1629905275/yondav/portraits/03_vzu82h',
    'v1629905275/yondav/portraits/04_na6wp9',
    'v1629905275/yondav/portraits/05_jmrkbx',
    'v1629905276/yondav/portraits/06_mf8qfj',
    'v1629905276/yondav/portraits/07_h5mk8q',
    'v1629905276/yondav/portraits/08_nntzbn',
    'v1629905276/yondav/portraits/09_tqvrna',
    'v1629905276/yondav/portraits/10_uxzm6f',
    'v1629905276/yondav/portraits/11_rax9pf',
    'v1629905276/yondav/portraits/12_if0q3w',
    'v1629905276/yondav/portraits/13_xlp95i',
  ]);
  const [portrait, setPortrait] = useState(
    'v1629905275/yondav/portraits/00_akqpcm'
  );
  const [height, setHeight] = useState();

  const opacityAnim = useTransform(
    scrollYProgress,
    [0, position - 0.1, position - 0.05],
    [0, 0.3, 1]
  );
  const saturate = useTransform(
    scrollYProgress,
    [position - 0.1, position - 0.05],
    ['grayscale(100%)', 'grayscale(0%)']
  );
  const xPosAnim = useTransform(
    scrollYProgress,
    [0, position - 0.1, position - 0.05],
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
    const setter = () =>
      setHeight(document.querySelector('.primary-portrait').clientHeight);

    window.addEventListener('resize', setter);
    window.addEventListener('scroll', setter);

    isDesktop && setter();

    return () => {
      window.removeEventListener('resize', setter);
      window.removeEventListener('scroll', setter);
    };
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
                src={`https://res.cloudinary.com/yup-schlepp/image/upload/${portrait}.jpg`}
                alt=''
                layoutId={`portrait-${portrait}`}
                style={{
                  opacity: opacityAnim,
                  filter: saturate,
                  x: isDesktop ? xPosAnim : 0,
                }}
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
