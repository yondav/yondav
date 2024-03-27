import { defineType } from 'sanity';

export const socialLinkComponent = defineType({
  name: 'socialLink',
  type: 'object',
  fields: [
    {
      name: 'entity',
      type: 'string',
      options: {
        list: [
          { title: 'Github', value: 'github' },
          { title: 'Linkedin', value: 'linkedin' },
        ],
      },
    },
    {
      name: 'link',
      type: 'url',
    },
  ],
});
