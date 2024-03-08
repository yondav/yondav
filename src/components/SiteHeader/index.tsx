import { motion } from 'framer-motion';
import { useCallback } from 'react';
import { RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri';
import tw, { styled } from 'twin.macro';

import { Logo } from '../Logo';

const SiteHeaderBase = styled(motion.header).attrs({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 1, delay: 0.2 },
  },
})(
  tw`fixed w-screen h-20 py-2 px-4 left-0 top-0 z-50 bg-neutral-200 transition-all flex justify-between items-center`
);

const clickableStyle = ({ $translate = true }) => [
  tw`hover:(brightness-75) cursor-pointer transition-all duration-300`,
  $translate && tw`hover:(-translate-y-0.5)`,
];

const LogoContainer = styled.div(() => [tw`w-12`, clickableStyle({ $translate: false })]);

export function SiteHeader() {
  const handleScrollTop = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <SiteHeaderBase>
      <LogoContainer onClick={handleScrollTop}>
        <Logo />
      </LogoContainer>
      <div css={tw`flex gap-2 text-neutral-800`}>
        <a
          href='https://github.com/yondav'
          target='_blank'
          rel='noopener noreferrer'
          css={clickableStyle({ $translate: true })}
        >
          <RiGithubFill size='2rem' />
        </a>
        <a
          href='https://www.linkedin.com/in/yondav/'
          target='_blank'
          rel='noopener noreferrer'
          css={clickableStyle({ $translate: true })}
        >
          <RiLinkedinBoxFill size='2rem' />
        </a>
      </div>
    </SiteHeaderBase>
  );
}
