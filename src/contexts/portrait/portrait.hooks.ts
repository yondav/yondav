import { useContext } from 'react';

import { ContextActions, ContextState } from './portrait.contexts';

export function usePortraitState() {
  return useContext(ContextState);
}

export function usePortraitActions() {
  return useContext(ContextActions);
}

export function usePortraitContext() {
  const state = usePortraitState();
  const actions = usePortraitActions();

  return { state, actions };
}
