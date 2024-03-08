import { createContext } from 'react';

import { defaultAttributeFills, defaultColors } from './portrait.constants';
import type { Actions, State } from './portrait.types';

export const initialState: { state: State; actions: Actions } = {
  state: {
    view: 'default',
    currentColor: defaultColors.black,
    attributes: {
      eyebrows: { type: 'bushy', fill: defaultAttributeFills.eyebrows.bushy },
      eyes: { type: 'open', fill: defaultAttributeFills.eyes.open },
      facialHair: { type: 'beard', fill: defaultAttributeFills.facialHair.beard },
      glasses: { type: 'versace', fill: defaultAttributeFills.glasses.versace },
      hair: { type: 'short', fill: defaultAttributeFills.hair.short },
      hat: { type: 'baseballCap', fill: defaultAttributeFills.hat.baseballCap },
      mouth: { type: 'halfSmile', fill: defaultAttributeFills.mouth.halfSmile },
      shirt: { type: 'vintage', fill: defaultAttributeFills.shirt.vintage },
      skin: { type: 'skin', fill: defaultAttributeFills.skin.skin },
    },
  },
  actions: {
    RANDOMIZE: () => null,
    SET_CURRENT_COLOR: () => null,
    SET_SINGLE_ATTRIBUTE: () => null,
    SET_TO_DEFAULT: () => null,
    SET_VIEW: () => null,
  },
};

export const ContextState = createContext<State>(initialState.state);
export const ContextActions = createContext<Actions>(initialState.actions);
