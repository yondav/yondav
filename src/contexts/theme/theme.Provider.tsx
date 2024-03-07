import { useReducer, type ReactNode, useCallback, useMemo, useState } from 'react';

import { Logo } from '../../components/Logo';
import { useIsomorphicLayoutEffect } from '../../hooks';

import { contrastAction, paletteAction } from './theme.actions';
import { ContextActions, ContextState, initialState } from './theme.contexts';
import { reducer } from './theme.reducer';
import type { State } from './theme.types';

export function Provider(props: { children: ReactNode }) {
  const [initialized, setInitialized] = useState<boolean>(false);

  const [state, dispatch] = useReducer(reducer, initialState.state);

  const htmlClass = useCallback((classNames: State) => {
    document.documentElement.classList.remove(
      'dark',
      'light',
      'stripes',
      'otb',
      'shea',
      'bs',
      'ces',
      'tape'
    );
    document.documentElement.classList.add(classNames.palette, classNames.contrast);
  }, []);

  const contextValue = useMemo(
    () => ({
      state,
      actions: {
        SET_CONTRAST: contrastAction(dispatch),
        SET_PALETTE: paletteAction(dispatch),
      },
    }),
    [state]
  );

  useIsomorphicLayoutEffect(() => {
    htmlClass(state);
  }, [state, htmlClass]);

  const checkLocalPref = useCallback(() => {
    const browserPref = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (browserPref) contrastAction(dispatch)('dark');

    setInitialized(true);
  }, []);

  useIsomorphicLayoutEffect(() => {
    checkLocalPref();
  }, [checkLocalPref]);

  return (
    <ContextState.Provider value={contextValue.state}>
      <ContextActions.Provider value={contextValue.actions}>
        {initialized ? <>{props.children}</> : <></>}
      </ContextActions.Provider>
    </ContextState.Provider>
  );
}
