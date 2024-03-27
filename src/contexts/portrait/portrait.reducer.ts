import {
  defaultAttributeFills,
  eyeTypes,
  eyebrowTypes,
  facialHairTypes,
  glassesTypes,
  hairTypes,
  hatTypes,
  mouthTypes,
  shirtTypes,
} from './portrait.constants';
import { ActionTypes, type ActionConfig, type State } from './portrait.types';
import { getRandomAttribute, getRandomColor } from './portrait.utils';

export function reducer(state: State, { type, payload }: ActionConfig): State {
  switch (type) {
    case ActionTypes.SET_VIEW:
      return { ...state, view: payload };

    case ActionTypes.SET_SINGLE_ATTRIBUTE:
      return { ...state, attributes: { ...state.attributes, ...payload } };

    case ActionTypes.SET_TO_DEFAULT:
      return {
        ...state,
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
      };

    case ActionTypes.RANDOMIZE:
      return {
        ...state,
        attributes: {
          eyebrows: getRandomAttribute(eyebrowTypes),
          eyes: getRandomAttribute(eyeTypes),
          facialHair: getRandomAttribute(facialHairTypes),
          glasses: getRandomAttribute(glassesTypes),
          hair: getRandomAttribute(hairTypes),
          hat: getRandomAttribute(hatTypes),
          mouth: getRandomAttribute(mouthTypes),
          shirt: getRandomAttribute(shirtTypes),
          skin: { type: 'skin', fill: { primary: getRandomColor(false) } },
        },
      };
    case ActionTypes.SET_CURRENT_COLOR:
      return { ...state, currentColor: payload };
    default:
      return state;
  }
}
