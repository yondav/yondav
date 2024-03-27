import { motion } from 'framer-motion';
import { useCallback } from 'react';
import tw, { styled } from 'twin.macro';

import type { Social } from '../../../sanity/lib';
import { iconMap } from '../../styles/constants';
import { fullFade } from '../../styles/constants/animations';
import { Button } from '../Button';
import { Logo } from '../Logo';

import { LogoContainer, SocialContainer, blurBg, clickableStyle } from './Layout.styled';

const SiteHeaderBase = styled(motion.header).attrs({
  variants: fullFade.variants,
  transition: fullFade.transition,
  initial: 'hidden',
  animate: 'visible',
})<{ $sticky: boolean }>(({ $sticky }) => [
  tw`fixed w-screen h-20 py-2 px-4 left-0 top-0 z-50 transition-all duration-700 flex justify-between items-center`,
  $sticky && blurBg,
]);

interface SiteHeaderProps {
  sticky: boolean;
  socials: Social[];
  resume: string;
}

export function SiteHeader({ sticky, socials, resume }: SiteHeaderProps) {
  const handleScrollTop = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <SiteHeaderBase $sticky={sticky}>
      <LogoContainer onClick={handleScrollTop}>
        <Logo />
      </LogoContainer>
      {sticky && (
        <a href={resume} rel='noopener noreferrer' target='_blank'>
          <Button $variant='neutral'>Resume</Button>
        </a>
      )}
      <SocialContainer $sticky={sticky}>
        {socials.map(s => (
          <a
            key={s._key}
            href={s.link}
            target='_blank'
            rel='noopener noreferrer'
            css={clickableStyle({ $translate: true })}
          >
            {iconMap[s.entity]({ size: '2rem' })}
          </a>
        ))}
      </SocialContainer>
    </SiteHeaderBase>
  );
}
