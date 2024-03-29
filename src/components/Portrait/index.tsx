import { useMemo, useState } from 'react';
import tw, { styled } from 'twin.macro';

import { ThemeContext } from '../../contexts';
import { useIsomorphicLayoutEffect } from '../../hooks';
import { LogoCurtain } from '../Logo';

import { backgrounds } from './Backgrounds';
import { Attribute } from './Portrait.Attribute';
import { Canvas } from './Portrait.Canvas';
import { PortraitMenu } from './Portrait.Menu';

const PlaygroundContainer = styled.div(() => [
  tw`w-full min-h-[calc(100vh - 5rem)]`,
  tw`relative flex justify-between`,
  tw`overflow-hidden bg-gradient-to-b from-transparent to-fg`,
]);

const BackgroundContainer = styled.div(() => [
  tw`absolute bottom-1/4 left-1/2 -translate-x-1/2`,
  tw`md:bottom-0 lg:(bottom-1/2 translate-y-1/2)`,
  tw`min-w-[30rem] sm:min-w-[34rem] md:(min-w-[50rem]) w-full`,
]);

const PortraitContainer = styled(BackgroundContainer)(() => [
  tw`bottom-1/4 translate-y-0 max-w-sm z-20 min-w-0`,
  tw`md:(bottom-0 max-w-xl min-w-0) lg:max-w-screen-md`,
]);

export function PortraitComponent() {
  const [initialized, setInitialized] = useState(false);

  const {
    state: { palette },
  } = ThemeContext.useThemeContext();

  useIsomorphicLayoutEffect(() => {
    setTimeout(() => {
      setInitialized(true);
    }, 3000),
      [];
  });

  const Background = useMemo(() => backgrounds[palette], [palette]);
  return (
    <>
      <PlaygroundContainer>
        <BackgroundContainer>
          <Canvas>
            <Background />
          </Canvas>
        </BackgroundContainer>
        <PortraitContainer>
          <Canvas>
            <Attribute attribute='skin' />
            <Attribute attribute='shirt' />
            <Attribute attribute='mouth' />
            <Attribute attribute='eyes' />
            <Attribute attribute='eyebrows' />
            <Attribute attribute='hair' />
            <Attribute attribute='facialHair' />
            <Attribute attribute='glasses' />
            <Attribute attribute='hat' />
          </Canvas>
        </PortraitContainer>
        {!initialized && (
          <BackgroundContainer css={tw`absolute z-50`}>
            <LogoCurtain />
          </BackgroundContainer>
        )}
        <PortraitMenu />
      </PlaygroundContainer>
    </>
  );
}
