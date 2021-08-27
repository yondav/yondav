import React, { useState, useRef, useEffect, Suspense } from 'react';
import Title from '../../Title';
import PortraitDisplay from './PortraitDisplay';

const Box = React.lazy(() => import('@material-ui/core/Box'));
const Grid = React.lazy(() => import('@material-ui/core/Grid'));

const Portraits = ({ isDesktop }) => {
  const ref = useRef(100);
  const [position, setPosition] = useState();

  useEffect(
    () =>
      window.addEventListener(
        'scroll',
        (e) =>
          ref.current !== 100 &&
          setPosition(
            (ref.current.offsetTop / document.body.clientHeight + 0.05).toFixed(
              2
            ) - 0
          )
      ),
    [setPosition, position, ref]
  );

  return (
    <section ref={ref} id='portraits'>
      {position !== undefined && (
        <Suspense fallback=''>
          <Box xs={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={6}
              style={{
                margin: 0,
                width: '100%',
              }}
            >
              <Grid item xs={12}>
                <Title
                  word={['p', 'o', 'r', 't', 'r', 'a', 'i', 't', 's']}
                  y={position}
                  start={position / 2}
                  align={'flex-start'}
                />
              </Grid>
              <Grid item xs={12}>
                <PortraitDisplay position={position} isDesktop={isDesktop} />
              </Grid>
            </Grid>
          </Box>
        </Suspense>
      )}
    </section>
  );
};

export default Portraits;
