'use client';

import type { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

import { Logo } from './Logo';

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ $hasBackground }: { $hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    $hasBackground && tw`bg-gradient-to-b from-neutral-500 to-neutral-200`,
  ],
};

const Wrapper = styled.main(tw`min-h-screen mx-auto mt-20`);

const Container = (props: { $hasBackground: boolean; children: ReactNode }) => (
  <div css={styles.container({ $hasBackground: props.$hasBackground })}>
    <div tw='flex flex-col justify-center h-full gap-y-5'>{props.children}</div>
    <Logo />
  </div>
);

export default Wrapper;
