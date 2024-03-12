import { defineType } from 'sanity';

export const socialLinkSchema = defineType({
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
