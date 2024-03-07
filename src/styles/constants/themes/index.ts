import type { Contrast, Palette } from '../../../contexts/theme';

import { bs } from './theme.bs';
import { ces } from './theme.ces';
import { otb } from './theme.otb';
import { shea } from './theme.shea';
import { stripes } from './theme.stripes';
import { tape } from './theme.tape';

export const palettes = {
  bs,
  ces,
  stripes,
  otb,
  shea,
  tape,
};

export const themeColorTitles: { [key in keyof typeof palettes]: string } = {
  stripes: 'stripes',
  otb: 'on the beach',
  shea: 'shea',
  bs: 'big snow',
  ces: 'cespedes',
  tape: 'tape',
} as const;

export const generateColorVariables = (palette: Palette, contrast: Contrast) => {
  if (contrast === 'dark')
    return {
      '--fg': palettes[palette].fg,
      '--bg': palettes[palette].bg,

      '--neutral-50': palettes[palette].neutral[900],
      '--neutral-100': palettes[palette].neutral[800],
      '--neutral-200': palettes[palette].neutral[700],
      '--neutral-300': palettes[palette].neutral[600],
      '--neutral-400': palettes[palette].neutral[500],
      '--neutral-500': palettes[palette].neutral[400],
      '--neutral-600': palettes[palette].neutral[300],
      '--neutral-700': palettes[palette].neutral[200],
      '--neutral-800': palettes[palette].neutral[100],
      '--neutral-900': palettes[palette].neutral[50],

      '--primary-100': palettes[palette].primary[500],
      '--primary-200': palettes[palette].primary[400],
      '--primary-300': palettes[palette].primary[300],
      '--primary-400': palettes[palette].primary[200],
      '--primary-500': palettes[palette].primary[100],

      '--secondary-100': palettes[palette].secondary[500],
      '--secondary-200': palettes[palette].secondary[400],
      '--secondary-300': palettes[palette].secondary[300],
      '--secondary-400': palettes[palette].secondary[200],
      '--secondary-500': palettes[palette].secondary[100],

      '--accent-primary-100': palettes[palette].accent[500],
      '--accent-primary-200': palettes[palette].accent[400],
      '--accent-primary-300': palettes[palette].accent[300],
      '--accent-primary-400': palettes[palette].accent[200],
      '--accent-primary-500': palettes[palette].accent[100],
    };

  return {
    '--fg': palettes[palette].fg,
    '--bg': palettes[palette].bg,

    '--neutral-50': palettes[palette].neutral[50],
    '--neutral-100': palettes[palette].neutral[100],
    '--neutral-200': palettes[palette].neutral[200],
    '--neutral-300': palettes[palette].neutral[300],
    '--neutral-400': palettes[palette].neutral[400],
    '--neutral-500': palettes[palette].neutral[500],
    '--neutral-600': palettes[palette].neutral[600],
    '--neutral-700': palettes[palette].neutral[700],
    '--neutral-800': palettes[palette].neutral[800],
    '--neutral-900': palettes[palette].neutral[900],

    '--primary-100': palettes[palette].primary[100],
    '--primary-200': palettes[palette].primary[200],
    '--primary-300': palettes[palette].primary[300],
    '--primary-400': palettes[palette].primary[400],
    '--primary-500': palettes[palette].primary[500],

    '--secondary-100': palettes[palette].secondary[100],
    '--secondary-200': palettes[palette].secondary[200],
    '--secondary-300': palettes[palette].secondary[300],
    '--secondary-400': palettes[palette].secondary[400],
    '--secondary-500': palettes[palette].secondary[500],

    '--accent-primary-100': palettes[palette].accent[100],
    '--accent-primary-200': palettes[palette].accent[200],
    '--accent-primary-300': palettes[palette].accent[300],
    '--accent-primary-400': palettes[palette].accent[400],
    '--accent-primary-500': palettes[palette].accent[500],
  };
};
