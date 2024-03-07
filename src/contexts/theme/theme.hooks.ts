import { useContext } from 'react';

import { ContextActions, ContextState } from './theme.contexts';

export function useThemeState() {
  return useContext(ContextState);
}

export function useThemeActions() {
  return useContext(ContextActions);
}

export function useThemeContext() {
  const state = useThemeState();
  const actions = useThemeActions();

  return { state, actions };
}
