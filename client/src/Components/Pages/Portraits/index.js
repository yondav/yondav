import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Title from '../../Title';
import PortraitDisplay from './PortraitDisplay';

const Portraits = () => {
  return (
    <section id='portraits'>
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
              y={0.55}
              start={0.5}
              align={'flex-start'}
            />
          </Grid>
          <Grid item xs={12}>
            <PortraitDisplay />
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default Portraits;
