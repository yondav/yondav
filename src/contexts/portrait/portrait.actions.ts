import type { Dispatch } from 'react';
import type { Color } from 'react-color';

import type {
  AssembledPortrait,
  CurrentColorActionConfig,
  DefaultActionConfig,
  RandomizeActionConfig,
  SingleAttributeActionConfig,
} from './portrait.types';
import { ActionTypes, type View, type ViewActionConfig } from './portrait.types';

export const randomizeAction =
  (dispatch: Dispatch<RandomizeActionConfig>) => (): void => {
    dispatch({ type: ActionTypes.RANDOMIZE, payload: undefined });
  };

export const currentColorAction =
  (dispatch: Dispatch<CurrentColorActionConfig>) =>
  (payload: Color): void => {
    dispatch({ type: ActionTypes.SET_CURRENT_COLOR, payload });
  };

export const attributeAction =
  (dispatch: Dispatch<SingleAttributeActionConfig>) =>
  (payload: Partial<AssembledPortrait>): void => {
    dispatch({ type: ActionTypes.SET_SINGLE_ATTRIBUTE, payload });
  };

export const defaultAction = (dispatch: Dispatch<DefaultActionConfig>) => (): void => {
  dispatch({ type: ActionTypes.SET_TO_DEFAULT, payload: undefined });
};

export const viewAction =
  (dispatch: Dispatch<ViewActionConfig>) =>
  (payload: View): void => {
    dispatch({ type: ActionTypes.SET_VIEW, payload });
  };
