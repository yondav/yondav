import type { Palette } from '../../../contexts/theme';

import BS from './Backgrounds.BS';
import Ces from './Backgrounds.Ces';
import OTB from './Backgrounds.OTB';
import Shea from './Backgrounds.Shea';
import Stripes from './Backgrounds.Stripes';
import Tape from './Backgrounds.Tape';

export const backgrounds: { [key in Palette]: () => JSX.Element } = {
  stripes: Stripes,
  bs: BS,
  ces: Ces,
  otb: OTB,
  shea: Shea,
  tape: Tape,
};
