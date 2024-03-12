import { type SchemaTypeDefinition } from 'sanity';

import { competencySchema, socialLinkSchema } from './components';
import { profileSchema } from './schemas';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profileSchema, socialLinkSchema, competencySchema],
};
