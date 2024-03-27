import { ActionTypes, type ActionConfig, type State } from './theme.types';

export function reducer(state: State, { type, payload }: ActionConfig): State {
  switch (type) {
    case ActionTypes.CONTRAST:
      return { ...state, contrast: payload };

    case ActionTypes.PALETTE:
      return { ...state, palette: payload };

    default:
      return state;
  }
}
