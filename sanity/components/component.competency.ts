import { defineType } from 'sanity';

export const competencySchema = defineType({
  name: 'competency',
  type: 'object',
  fields: [
    {
      name: 'technology',
      type: 'string',
    },
    {
      name: 'rating',
      type: 'number',
      options: {
        list: [
          { title: '1', value: 1 },
          { title: '2', value: 2 },
          { title: '3', value: 3 },
          { title: '4', value: 4 },
          { title: '5', value: 5 },
        ],
      },
    },
  ],
});
