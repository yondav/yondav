import React, { useEffect, useRef, useState, Suspense } from 'react';
import { useViewportScroll, useTransform } from 'framer-motion';
import Title from '../../Title';
import { data } from './data';
import './dev.css';
import Thumbnails from './Thumbnails';
const Box = React.lazy(() => import('@material-ui/core/Box'));
const Grid = React.lazy(() => import('@material-ui/core/Grid'));

const Dev = ({ isDesktop, darkMode }) => {
  const ref = useRef();
  const [position, setPosition] = useState(100);

  useEffect(
    () =>
      window.addEventListener(
        'scroll',
        (e) =>
          ref.current !== 100 &&
          setPosition(
            (ref.current.offsetTop / document.body.clientHeight).toFixed(2) - 0
          )
      ),
    [position, setPosition, ref]
  );

  const { scrollYProgress } = useViewportScroll(0);
  const opacityAnim = useTransform(
    scrollYProgress,
    [0, position - 0.25, position],
    [0, 0.3, 1]
  );
  const saturate = useTransform(
    scrollYProgress,
    [position - 0.25, position],
    ['grayscale(100%)', 'grayscale(0%)']
  );
  const xPosAnim = useTransform(
    scrollYProgress,
    [0, position - 0.25, position],
    [-1000, -500, 0]
  );

  return (
    <section ref={ref} id='dev'>
      <Suspense fallback=''>
        <Box xs={{ flexGrow: 1 }}>
          <Grid container spacing={6} style={{ margin: 0, width: '100%' }}>
            <Grid item xs={12}>
              <Title
                word={['d', 'e', 'v']}
                y={position}
                start={position / 1.2}
                align={'flex-end'}
              />
            </Grid>
            {data.map((app) => (
              <Thumbnails
                key={app.id}
                app={app}
                isDesktop={isDesktop}
                opacityAnim={opacityAnim}
                saturate={saturate}
                xPosAnim={xPosAnim}
                darkMode={darkMode}
                position={ref.current && ref.current}
              />
            ))}
          </Grid>
        </Box>
      </Suspense>
    </section>
  );
};

export default Dev;
