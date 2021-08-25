import React, { useState, useRef, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Title from '../../Title';
import PortraitDisplay from './PortraitDisplay';

const Portraits = ({ isDesktop }) => {
  const ref = useRef(100);
  const [position, setPosition] = useState();

  useEffect(() => {
    ref.current !== 100 &&
      setPosition(
        (ref.current.offsetTop / document.body.clientHeight + 0.05).toFixed(2) -
          0
      );
    console.log('position: ', position, position === undefined);
  }, [setPosition, position, ref]);

  return (
    <section ref={ref} id='portraits'>
      {position !== undefined && (
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
                start={position / 1.2}
                align={'flex-start'}
              />
            </Grid>
            <Grid item xs={12}>
              <PortraitDisplay position={position} isDesktop={isDesktop} />
            </Grid>
          </Grid>
        </Box>
      )}
    </section>
  );
};

export default Portraits;
