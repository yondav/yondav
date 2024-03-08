'use client';

import React from 'react';
import tw from 'twin.macro';

import { PortraitComponent, SiteHeader } from '../components';
import Container from '../components/Container';

const App = () => {
  return (
    <>
      <SiteHeader />
      <Container>
        <PortraitComponent />
      </Container>
    </>
  );
};

export default App;
