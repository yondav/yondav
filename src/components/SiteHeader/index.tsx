'use client';

import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';
import tw, { styled } from 'twin.macro';

import type { Social } from '../../../sanity/lib';
import { useIsomorphicLayoutEffect } from '../../hooks';
import { iconMap } from '../../styles/constants';
import { Logo } from '../Logo';

const SiteHeaderBase = styled(motion.header).attrs({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 1, delay: 0.2 },
  },
})<{ $sticky: boolean }>(({ $sticky }) => [
  tw`fixed w-screen h-20 py-2 px-4 left-0 top-0 z-50 transition-all duration-700 flex justify-between items-center`,
  $sticky && tw`bg-neutral-100`,
]);

const clickableStyle = ({ $translate = true }) => [
  tw`hover:text-neutral-950 cursor-pointer transition-all duration-300`,
  $translate && tw`hover:(-translate-y-0.5)`,
];

const LogoContainer = styled.div(() => [tw`w-12`, clickableStyle({ $translate: false })]);

interface SiteHeaderProps {
  socials: Social[];
}

export function SiteHeader({ socials }: SiteHeaderProps) {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const handleScrollTop = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const handleSticky = useCallback(() => {
    const position = window.scrollY;
    setIsSticky(position > 80);
  }, []);

  useIsomorphicLayoutEffect(() => {
    window.addEventListener('scroll', handleSticky, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleSticky);
    };
  }, [handleSticky]);

  return (
    <SiteHeaderBase $sticky={isSticky}>
      <LogoContainer onClick={handleScrollTop}>
        <Logo />
      </LogoContainer>
      <div css={tw`flex gap-2 text-neutral-800`}>
        {socials.map(s => (
          <a
            key={s._key}
            href={s.link}
            rel='noopener noreferrer'
            css={clickableStyle({ $translate: true })}
          >
            {iconMap[s.entity]({ size: '2rem' })}
          </a>
        ))}
      </div>
    </SiteHeaderBase>
  );
}
