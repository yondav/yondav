import { AnimatePresence, motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

import type { Social } from '../../../sanity/lib';
import { iconMap } from '../../styles/constants';
import { fullFade } from '../../styles/constants/animations';
import Wink from '../Portrait/Portrait.Wink';
import { Banner } from '../Typography';

import { SocialContainer, blurBg, clickableStyle } from './Layout.styled';

const SiteFooterBase = styled(motion.footer).attrs({
  variants: fullFade.variants,
  transition: fullFade.transition,
  initial: 'hidden',
  animate: 'visible',
})<{ $sticky: boolean; $bottom: boolean }>(({ $sticky, $bottom }) => [
  $sticky && tw`hidden`,

  !$sticky && {
    ...tw`fixed left-0 bottom-0`,
    ...tw`w-screen py-2 px-4 z-50`,
    ...blurBg,
  },

  $bottom && {
    ...tw`relative bg-neutral-200 h-[calc(100vh - 5rem)] p-8 flex justify-between items-center flex-col-reverse`,
    ...blurBg,
  },
]);

const PortraitContainer = styled(motion.div)<{ $bottom: boolean }>(({ $bottom }) => [
  tw`hidden`,

  $bottom && tw`w-full max-w-screen-lg h-full block`,
]);

const Copyright = styled.span<{ $bottom: boolean }>(({ $bottom }) => [
  tw`text-sm hidden`,

  $bottom && tw`block`,
]);

interface SiteFooterProps {
  sticky: boolean;
  socials: Social[];
  bottom: boolean;
}

export function SiteFooter({ bottom, sticky, socials }: SiteFooterProps) {
  return (
    <AnimatePresence>
      <SiteFooterBase $bottom={bottom} $sticky={sticky}>
        <motion.div
          variants={fullFade.variants}
          initial='hidden'
          animate='visible'
          transition={fullFade.transition}
          css={tw`w-full flex flex-col items-center gap-4`}
        >
          <SocialContainer layout $sticky={sticky} css={bottom ? {} : tw`ml-auto`}>
            {socials.map(s => (
              <a
                key={s._key}
                href={s.link}
                rel='noopener noreferrer'
                css={clickableStyle({ $translate: true })}
              >
                {iconMap[s.entity]({ size: bottom ? '2rem' : '1.5rem' })}
              </a>
            ))}
          </SocialContainer>
          <Copyright $bottom={bottom}>&#169; yondav {new Date().getFullYear()}</Copyright>
        </motion.div>
        <PortraitContainer
          variants={fullFade.variants}
          transition={fullFade.transition}
          $bottom={bottom}
        >
          <div
            css={tw`h-full flex flex-col-reverse justify-center items-center gap-12 sm:flex-col md:(flex-row items-center)`}
          >
            <div css={tw`w-1/2 sm:w-1/3`}>
              <Wink />
            </div>
            <Banner>More soon...</Banner>
          </div>
        </PortraitContainer>
      </SiteFooterBase>
    </AnimatePresence>
  );
}
