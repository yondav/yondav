'use client';
import { Inter, Sarpanch } from 'next/font/google';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

import { generateColorVariables, palettes } from './constants/themes';

const sarpanch = Sarpanch({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
});

const inter = Inter({ subsets: ['latin'] });

const CustomStyles = createGlobalStyle({
  ':root': {
    '--fg': '#000000',
    '--bg': '#ffffff',
    '--neutral-50': palettes.stripes.neutral[50],
    '--neutral-100': palettes.stripes.neutral[100],
    '--neutral-200': palettes.stripes.neutral[200],
    '--neutral-300': palettes.stripes.neutral[300],
    '--neutral-400': palettes.stripes.neutral[400],
    '--neutral-500': palettes.stripes.neutral[500],
    '--neutral-600': palettes.stripes.neutral[600],
    '--neutral-700': palettes.stripes.neutral[700],
    '--neutral-800': palettes.stripes.neutral[800],
    '--neutral-900': palettes.stripes.neutral[900],
    '--neutral-950': palettes.stripes.neutral[950],

    '--font-header': sarpanch.style.fontFamily,
    '--font-body': inter.style.fontFamily,

    '--portrait-menu-bottom': '8rem',
  },
  '.dark': {
    '--fg': '#ffffff',
    '--bg': '#000000',
    '--neutral-50': palettes.stripes.neutral[950],
    '--neutral-100': palettes.stripes.neutral[900],
    '--neutral-200': palettes.stripes.neutral[800],
    '--neutral-300': palettes.stripes.neutral[700],
    '--neutral-400': palettes.stripes.neutral[600],
    '--neutral-500': palettes.stripes.neutral[500],
    '--neutral-600': palettes.stripes.neutral[400],
    '--neutral-700': palettes.stripes.neutral[300],
    '--neutral-800': palettes.stripes.neutral[200],
    '--neutral-900': palettes.stripes.neutral[100],
    '--neutral-950': palettes.stripes.neutral[50],
  },
  '.stripes': generateColorVariables('stripes', 'light'),
  '.stripes.dark': generateColorVariables('stripes', 'dark'),
  '.otb': generateColorVariables('otb', 'light'),
  '.otb.dark': generateColorVariables('otb', 'dark'),
  '.shea': generateColorVariables('shea', 'light'),
  '.shea.dark': generateColorVariables('shea', 'dark'),
  '.bs': generateColorVariables('bs', 'light'),
  '.bs.dark': generateColorVariables('bs', 'dark'),
  '.ces': generateColorVariables('ces', 'light'),
  '.ces.dark': generateColorVariables('ces', 'dark'),
  '.tape': generateColorVariables('tape', 'light'),
  '.tape.dark': generateColorVariables('tape', 'dark'),

  body: {
    ...tw`antialiased bg-neutral-100 text-neutral-950 font-body`,
  },

  '@media (min-width: 768px)': {
    ':root': {
      '--portrait-menu-bottom': '2rem',
    },
  },

  h1: {
    ...tw`font-header font-black text-4xl md:text-6xl mb-8`,
  },

  h2: {
    ...tw`font-header font-extrabold text-2xl md:text-4xl mb-6`,
  },

  h3: {
    ...tw`font-header font-bold text-xl md:text-3xl mb-4`,
  },

  h4: {
    ...tw`font-header font-semibold text-lg md:text-2xl mb-4`,
  },

  h5: {
    ...tw`font-body font-semibold text-base mb-2 uppercase`,
  },

  p: {
    ...tw`text-base mb-4`,
  },

  a: {
    ...tw`font-bold underline hover:text-neutral-600 outline-0`,
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
