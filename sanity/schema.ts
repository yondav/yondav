import { type SchemaTypeDefinition } from 'sanity';

import { brandComponent, competencyComponent, socialLinkComponent } from './components';
import { profileSchema } from './schemas';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profileSchema, brandComponent, socialLinkComponent, competencyComponent],
};
