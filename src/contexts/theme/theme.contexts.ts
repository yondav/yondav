'use client';

import { createContext } from 'react';

import type { Actions, State } from './theme.types';

export const initialState: { state: State; actions: Actions } = {
  state: {
    contrast: 'light',
    palette: 'stripes',
  },
  actions: {
    SET_CONTRAST: () => null,
    SET_PALETTE: () => null,
  },
};

export const ContextState = createContext<State>(initialState.state);
export const ContextActions = createContext<Actions>(initialState.actions);
