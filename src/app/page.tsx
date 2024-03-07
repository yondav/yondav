'use client';

import React from 'react';

import { PortraitComponent, SiteHeader } from '../components';
import Container from '../components/Container';

const App = () => {
  return (
    <>
      <SiteHeader />
      <Container>
        <PortraitComponent />
        {/* v2
        <Button
          $variant='primary'
          onClick={() => {
            SET_PALETTE('shea');
          }}
        >
          Submit
        </Button>
        <Button $variant='secondary'>Cancel</Button>
        <Button $isSmall>Close</Button> */}
      </Container>
    </>
  );
};

export default App;
