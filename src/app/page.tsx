'use client';

import React from 'react';

import { Button } from '@/components/Button';
import Container from '@/components/Container';
import { useThemeActions } from '@/contexts/theme';

const App = () => {
  const { SET_CONTRAST, SET_PALETTE } = useThemeActions();

  return (
    <Container $hasBackground>
      v2
      <Button
        $variant='primary'
        onClick={() => {
          SET_PALETTE('shea');
        }}
      >
        Submit
      </Button>
      <Button $variant='secondary'>Cancel</Button>
      <Button $isSmall>Close</Button>
    </Container>
  );
};

export default App;
