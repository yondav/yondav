import type { Palette } from '../../../contexts/theme';

import { bs } from './theme.bs';
import { ces } from './theme.ces';
import { otb } from './theme.otb';
import { shea } from './theme.shea';
import { stripes } from './theme.stripes';
import { tape } from './theme.tape';

export * from './themes.neutral';

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

export const generateColorVariables = (palette: Palette) => {
  const assembleVariableGroups = (entries: [string, string][]) =>
    entries.map(([k, v]) =>
      Object.fromEntries(Object.entries(v).map(([key, val]) => [`--${k}-${key}`, val]))
    );

  const lightVariables = assembleVariableGroups(Object.entries(palettes[palette].light));
  const darkVariables = assembleVariableGroups(Object.entries(palettes[palette].dark));

  const light = { ...lightVariables[0], ...lightVariables[1], ...lightVariables[2] };
  const dark = { ...darkVariables[0], ...darkVariables[1], ...darkVariables[2] };

  return { light, dark };
};
