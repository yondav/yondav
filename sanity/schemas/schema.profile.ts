import { IoIosInformationCircle as icon } from 'react-icons/io';
import { defineType } from 'sanity';

import { socialLinkSchema } from '../components';

export const profileSchema = defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  icon,
  fields: [
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{ type: 'socialLink' }],
    },
    {
      name: 'resume',
      type: 'file',
      title: 'Resume',
    },
    {
      name: 'competencies',
      type: 'array',
      of: [{ type: 'competency' }],
    },
  ],
});
