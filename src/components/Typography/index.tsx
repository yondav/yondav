'use client';

import { PortableText } from '@portabletext/react';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import type { PortableTextBlock } from 'sanity';
import tw, { styled, theme } from 'twin.macro';

export const Banner = styled(motion.h1).attrs({
  transition: { duration: 0.9 },
  animate: {
    textShadow: `.25rem .25rem 0 ${theme`colors.accent.200`}, -.25rem -.25rem 0 ${theme`colors.secondary.200`}`,
  },
  whileInView: {
    textShadow: [
      `1rem 1rem 0 ${theme`colors.accent.200`}, -1rem -1rem 0 ${theme`colors.secondary.200`}`,
      `.25rem .25rem 0 ${theme`colors.accent.200`}, -.25rem -.25rem 0 ${theme`colors.secondary.200`}`,
    ],
  },
})(() => [
  tw`text-center font-aux text-7xl md:text-8xl font-black`,
  tw`text-primary-300`,
  tw`mb-0 max-w-lg -skew-x-12`,
]);

export const RichText = ({ value }: { value: PortableTextBlock }) => (
  <PortableText
    value={value}
    components={{
      block: {
        h1: props => <H1>{props.children}</H1>,
        h2: props => <H2>{props.children}</H2>,
        h3: props => <H3>{props.children}</H3>,
        h4: props => <H4>{props.children}</H4>,
      },
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

const headingAnimation = {
  transition: { duration: 1.4, ease: 'easeInOut' },
  whileInView: {
    textShadow: `0.5px 0.5px 0px ${theme`colors.accent.100`},
1px 1px 0px ${theme`colors.accent.200`},
1.5px 1.5px 0px ${theme`colors.accent.300`},
2px 2px 0px ${theme`colors.accent.400`},
2.5px 2.5px 0px ${theme`colors.accent.500`}`,
  },
};

export const H1 = styled(motion.h1).attrs(headingAnimation)({});
export const H2 = styled(motion.h2).attrs(headingAnimation)({});
export const H3 = styled(motion.h3).attrs(headingAnimation)({});
export const H4 = styled(motion.h4).attrs(headingAnimation)({});

export const Heading = ({
  type = 'h1',
  children,
}: {
  type?: 'h1' | 'h2' | 'h3' | 'h4';
  children: ReactNode;
}) => {
  switch (type) {
    case 'h1':
      return <H1>{children}</H1>;
    case 'h2':
      return <H2>{children}</H2>;
    case 'h3':
      return <H3>{children}</H3>;
    case 'h4':
      return <H4>{children}</H4>;
  }
};
