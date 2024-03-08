import { useReducer, type ReactNode, useMemo } from 'react';

import {
  attributeAction,
  currentColorAction,
  defaultAction,
  randomizeAction,
  viewAction,
} from './portrait.actions';
import { ContextActions, ContextState, initialState } from './portrait.contexts';
import { reducer } from './portrait.reducer';

export function Provider(props: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState.state);

  const contextValue = useMemo(
    () => ({
      state,
      actions: {
        RANDOMIZE: randomizeAction(dispatch),
        SET_CURRENT_COLOR: currentColorAction(dispatch),
        SET_SINGLE_ATTRIBUTE: attributeAction(dispatch),
        SET_TO_DEFAULT: defaultAction(dispatch),
        SET_VIEW: viewAction(dispatch),
      },
    }),
    [state]
  );

  return (
    <ContextState.Provider value={contextValue.state}>
      <ContextActions.Provider value={contextValue.actions}>
        {props.children}
      </ContextActions.Provider>
    </ContextState.Provider>
  );
}
