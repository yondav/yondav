'use client';

import React from 'react';
import { RiFileList2Fill, RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri';
import tw from 'twin.macro';

import { Banner, Button, PortraitComponent, SiteHeader } from '../components';
import Container from '../components/Container';

const App = () => {
  return (
    <>
      <SiteHeader />
      <Container>
        <PortraitComponent />
        <section css={tw`p-4 mt-28 mx-auto max-w-[1080px] flex flex-col gap-24`}>
          <Banner>More soon...</Banner>
          <div css={{ ...tw`ml-auto` }}>
            <p css={{ ...tw`text-xl text-neutral-500` }}>
              If you like my{' '}
              <a
                href='https://marketplace.visualstudio.com/items?itemName=yondav.vibe'
                target='_blank'
                rel='noopener noreferrer'
                css={{
                  ...tw`font-bold italic underline hover:text-neutral-900 outline-0`,
                }}
              >
                Vibe
              </a>
            </p>
            <div css={{ ...tw`flex gap-0.5 my-4` }}>
              <Button
                as='a'
                href='/jonathan-david-resume-2024.pdf'
                download='jonathan-david-resume-2024.pdf'
              >
                <RiFileList2Fill size='1.5rem' />
              </Button>
              <Button
                as='a'
                href='https://github.com/yondav'
                target='_blank'
                rel='noopener noreferrer'
              >
                <RiGithubFill size='1.5rem' />
              </Button>
              <Button
                as='a'
                href='https://www.linkedin.com/in/yondav/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <RiLinkedinBoxFill size='1.5rem' />
              </Button>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default App;
