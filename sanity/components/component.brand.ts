import { defineType } from 'sanity';

export const brandComponent = defineType({
  name: 'brand',
  type: 'object',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'banner',
      title: 'Banner',
      type: 'image',
    },
  ],
});
