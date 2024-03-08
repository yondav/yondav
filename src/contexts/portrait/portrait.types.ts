import type { ReactSVG, SVGProps } from 'react';
import type { Color } from 'react-color';

import type { Nullable } from '../../types';

import type {
  defaultEyeFills,
  defaultEyebrowFills,
  defaultFacialHairFills,
  defaultGlassesFills,
  defaultHairFills,
  defaultHatFills,
  defaultMouthFills,
  defaultShirtFills,
  defaultSkinFills,
} from './portrait.constants';

export interface State {
  view: View;
  attributes: AssembledPortrait;
  currentColor: Color;
}

export type AttributeType<T> = keyof T | 'none';

export type EyebrowType = AttributeType<typeof defaultEyebrowFills>;
export type EyeType = AttributeType<typeof defaultEyeFills>;
export type FacialHairType = AttributeType<typeof defaultFacialHairFills>;
export type GlassesType = AttributeType<typeof defaultGlassesFills>;
export type HairType = AttributeType<typeof defaultHairFills>;
export type HatType = AttributeType<typeof defaultHatFills>;
export type MouthType = AttributeType<typeof defaultMouthFills>;
export type ShirtType = AttributeType<typeof defaultShirtFills>;
export type SkinType = keyof typeof defaultSkinFills;

export interface AssembledPortrait {
  eyebrows: AttributeObject<EyebrowType>;
  eyes: AttributeObject<EyeType>;
  facialHair: AttributeObject<FacialHairType>;
  glasses: AttributeObject<GlassesType>;
  hair: AttributeObject<HairType>;
  hat: AttributeObject<HatType>;
  mouth: AttributeObject<MouthType>;
  shirt: AttributeObject<ShirtType>;
  skin: AttributeObject<SkinType>;
}

export type Attribute = keyof AssembledPortrait;

export type View = 'default' | 'color' | 'custom' | 'data';

export type AttributeFills = {
  [key in 'primary' | 'secondary' | 'tertiary']?: Nullable<Color>;
};

export type AttributeObject<T> = {
  type: T;
  fill: AttributeFills;
};

export enum ActionTypes {
  SET_VIEW = 'SET_VIEW',
  SET_SINGLE_ATTRIBUTE = 'SET_SINGLE_ATTRIBUTE',
  SET_TO_DEFAULT = 'SET_TO_DEFAULT',
  RANDOMIZE = 'RANDOMIZE',
  SET_CURRENT_COLOR = 'SET_CURRENT_COLOR',
}

export interface ActionConfigSkeleton<T extends ActionTypes, P> {
  type: T;
  payload: P;
}

export type ViewActionConfig = ActionConfigSkeleton<ActionTypes.SET_VIEW, View>;

export type SingleAttributeActionConfig = ActionConfigSkeleton<
  ActionTypes.SET_SINGLE_ATTRIBUTE,
  Partial<AssembledPortrait>
>;

export type DefaultActionConfig = ActionConfigSkeleton<ActionTypes.SET_TO_DEFAULT, void>;

export type RandomizeActionConfig = ActionConfigSkeleton<ActionTypes.RANDOMIZE, void>;

export type CurrentColorActionConfig = ActionConfigSkeleton<
  ActionTypes.SET_CURRENT_COLOR,
  Color
>;

export type ActionConfig =
  | ViewActionConfig
  | SingleAttributeActionConfig
  | DefaultActionConfig
  | RandomizeActionConfig
  | CurrentColorActionConfig;

export interface Actions {
  [ActionTypes.RANDOMIZE]: (payload: void) => void;
  [ActionTypes.SET_CURRENT_COLOR]: (payload: Color) => void;
  [ActionTypes.SET_SINGLE_ATTRIBUTE]: (payload: Partial<AssembledPortrait>) => void;
  [ActionTypes.SET_TO_DEFAULT]: (payload: void) => void;
  [ActionTypes.SET_VIEW]: (payload: View) => void;
}

export type Element = {
  type: keyof ReactSVG;
  props: SVGProps<SVGElement>;
};

export type CreateElements<T> = (
  config: AttributeObject<T> & {
    stroke?: boolean;
    state: View;
    colorAction: (key: keyof AttributeFills) => void;
  }
) => Array<{
  type: keyof ReactSVG;
  props: SVGProps<SVGElement>;
}>;

export type AttributeTypeAssociations = {
  eyebrows: EyebrowType;
  eyes: EyeType;
  facialHair: FacialHairType;
  glasses: GlassesType;
  hair: HairType;
  hat: HatType;
  mouth: MouthType;
  shirt: ShirtType;
  skin: SkinType;
};

export type AttributeTypeAssociation<T extends keyof AttributeTypeAssociations> =
  AttributeTypeAssociations[T];
