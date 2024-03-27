import { IoIosInformationCircle as icon } from 'react-icons/io';
import { defineType } from 'sanity';

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
      title: 'Resume',
      type: 'file',
    },
    {
      name: 'competencies',
      title: 'Competencies',
      type: 'array',
      of: [{ type: 'competency' }],
    },
    {
      name: 'brand',
      title: 'Brand',
      type: 'brand',
    },
  ],
});
