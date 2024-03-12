'use client';

import { PortableText } from '@portabletext/react';
import { motion } from 'framer-motion';
import type { PortableTextBlock } from 'sanity';
import tw, { styled, theme } from 'twin.macro';

export const Banner = styled(motion.h1).attrs({
  transition: { duration: 0.9 },
  animate: {
    textShadow: `.25rem .25rem 0 ${theme`colors.accent.500`}, -.25rem -.25rem 0 ${theme`colors.secondary.200`}`,
  },
  whileInView: {
    textShadow: [
      `1rem 1rem 0 ${theme`colors.accent.500`}, -1rem -1rem 0 ${theme`colors.secondary.200`}`,
      `.25rem .25rem 0 ${theme`colors.accent.500`}, -.25rem -.25rem 0 ${theme`colors.secondary.200`}`,
    ],
  },
})(() => [
  tw`text-center font-aux text-7xl md:text-9xl font-black`,
  tw`text-primary-400`,
  tw`w-full -skew-x-12 -rotate-12`,
]);

export const RichText = ({ value }: { value: PortableTextBlock }) => (
  <PortableText
    value={value}
    components={{
      marks: {
        link: ({ children, value }) => {
          const href = value.href.startsWith('https://' || 'http://')
            ? value.href
            : `https://${value.href}`;
          return (
            <a href={href} target='_blank'>
              {children}
            </a>
          );
        },
      },
    }}
  />
);
