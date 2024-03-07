import type { palettes } from '../../styles/constants/themes';

export type Palette = keyof typeof palettes;

export type Contrast = 'dark' | 'light';

export interface State {
  contrast: Contrast;
  palette: Palette;
}

export enum ActionTypes {
  CONTRAST = 'SET_CONTRAST',
  PALETTE = 'SET_PALETTE',
}

export interface ActionConfigSkeleton<T extends ActionTypes, P extends keyof State> {
  type: T;
  payload: State[P];
}

export type ContrastActionConfig = ActionConfigSkeleton<ActionTypes.CONTRAST, 'contrast'>;

export type PaletteActionConfig = ActionConfigSkeleton<ActionTypes.PALETTE, 'palette'>;

export type ActionConfig = ContrastActionConfig | PaletteActionConfig;

export interface Actions {
  [ActionTypes.CONTRAST]: (payload: State['contrast']) => void;
  [ActionTypes.PALETTE]: (payload: State['palette']) => void;
}
