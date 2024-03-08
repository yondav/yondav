import tw, { theme } from 'twin.macro';

import type { View } from '../../../contexts/portrait';

export const fillCursor = ({ state }: { state: View }) =>
  state === 'color'
    ? { cursor: theme`cursor.bucket` }
    : { cursor: theme`cursor.default` };
