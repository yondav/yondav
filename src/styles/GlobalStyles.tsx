'use client';
import { Fugaz_One, Inter, Archivo_Narrow } from 'next/font/google';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

import { generateColorVariables, neutrals } from './constants/themes';

const fugaz = Fugaz_One({
  subsets: ['latin'],
  weight: ['400'],
});

const inter = Inter({ subsets: ['latin'] });

const archivo = Archivo_Narrow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const stripesPalette = generateColorVariables('stripes');
const otbPalette = generateColorVariables('otb');
const sheaPalette = generateColorVariables('shea');
const bsPalette = generateColorVariables('bs');
const cesPalette = generateColorVariables('ces');
const tapePalette = generateColorVariables('tape');

const CustomStyles = createGlobalStyle({
  ':root': {
    '--fg': neutrals.fg,
    '--bg': neutrals.bg,
    '--neutral-50': neutrals.neutral[50],
    '--neutral-100': neutrals.neutral[100],
    '--neutral-200': neutrals.neutral[200],
    '--neutral-300': neutrals.neutral[300],
    '--neutral-400': neutrals.neutral[400],
    '--neutral-500': neutrals.neutral[500],
    '--neutral-600': neutrals.neutral[600],
    '--neutral-700': neutrals.neutral[700],
    '--neutral-800': neutrals.neutral[800],
    '--neutral-900': neutrals.neutral[900],
    '--neutral-950': neutrals.neutral[950],

    '--font-header': archivo.style.fontFamily,
    '--font-body': inter.style.fontFamily,
    '--font-aux': fugaz.style.fontFamily,

    '--portrait-menu-bottom': '8rem',
  },

  '.dark': {
    '--fg': neutrals.bg,
    '--bg': neutrals.fg,
    '--neutral-50': neutrals.neutral[950],
    '--neutral-100': neutrals.neutral[900],
    '--neutral-200': neutrals.neutral[800],
    '--neutral-300': neutrals.neutral[700],
    '--neutral-400': neutrals.neutral[600],
    '--neutral-500': neutrals.neutral[500],
    '--neutral-600': neutrals.neutral[400],
    '--neutral-700': neutrals.neutral[300],
    '--neutral-800': neutrals.neutral[200],
    '--neutral-900': neutrals.neutral[100],
    '--neutral-950': neutrals.neutral[50],
  },

  '.stripes': stripesPalette.light,
  '.stripes.dark': stripesPalette.dark,

  '.otb': otbPalette.light,
  '.otb.dark': otbPalette.dark,

  '.shea': sheaPalette.light,
  '.shea.dark': sheaPalette.dark,

  '.bs': bsPalette.light,
  '.bs.dark': bsPalette.dark,

  '.ces': cesPalette.light,
  '.ces.dark': cesPalette.dark,

  '.tape': tapePalette.light,
  '.tape.dark': tapePalette.dark,

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
    ...tw`font-header font-semibold text-base mb-2 uppercase`,
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
