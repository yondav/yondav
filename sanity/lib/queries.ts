import { groq } from 'next-sanity';
import type { PortableTextBlock } from 'sanity';

export interface Social {
  link: string;
  entity: 'github' | 'linkedin';
  _key: string;
  _type: string;
}

export interface Competency {
  technology: string;
  rating: number;
  _key: string;
  _type: string;
}

export interface ProfileResult {
  socials: Social[];
  photoURL: string;
  resumeURL: string;
  bio: PortableTextBlock;
  title: null;
  competencies: Competency[];
}

export const PROFILE_QUERY = groq`*[_type == 'profile'] {
  'id': _id + '_' + _rev,
  _createdAt,
  _updatedAt,
  title,
  socials,
  "photoURL": photo.asset->url,
  "resumeURL": resume.asset->url,
  bio,
  competencies
}`;
