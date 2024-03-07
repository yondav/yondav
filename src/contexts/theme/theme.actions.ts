import type { Dispatch } from 'react';

import {
  ActionTypes,
  type Contrast,
  type ContrastActionConfig,
  type PaletteActionConfig,
  type Palette,
} from './theme.types';

export const contrastAction =
  (dispatch: Dispatch<ContrastActionConfig>) => (payload: Contrast) => {
    dispatch({ type: ActionTypes.CONTRAST, payload });
  };

export const paletteAction =
  (dispatch: Dispatch<PaletteActionConfig>) => (payload: Palette) => {
    dispatch({ type: ActionTypes.PALETTE, payload });
  };
