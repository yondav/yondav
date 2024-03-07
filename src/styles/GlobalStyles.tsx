'use client';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

import { generateColorVariables } from './constants/themes';

const CustomStyles = createGlobalStyle({
  ':root': generateColorVariables('stripes', 'light'),
  '.dark': generateColorVariables('stripes', 'dark'),
  '.otb': generateColorVariables('otb', 'light'),
  'otb.dark': generateColorVariables('otb', 'dark'),
  '.shea': generateColorVariables('shea', 'light'),
  'shea.dark': generateColorVariables('shea', 'dark'),
  '.bs': generateColorVariables('bs', 'light'),
  'bs.dark': generateColorVariables('bs', 'dark'),
  '.ces': generateColorVariables('ces', 'light'),
  'ces.dark': generateColorVariables('ces', 'dark'),
  '.tape': generateColorVariables('tape', 'light'),
  'tape.dark': generateColorVariables('tape', 'dark'),

  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
});

const GlobalStyles = () => {
  return (
    <>
      <BaseStyles />
      <CustomStyles />
    </>
  );
};

export default GlobalStyles;