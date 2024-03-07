import { useMemo } from 'react';
import tw, { styled } from 'twin.macro';

import { ThemeContext } from '../../contexts';

import { backgrounds } from './Backgrounds';
import { Canvas } from './Portrait.Canvas';

const PlaygroundContainer = styled.div(
  tw`overflow-hidden border-b-8 border-neutral-50 shadow shadow-neutral-50 flex w-full justify-between relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[calc(100vh - 5rem)]`
);

const BackgroundContainer = styled.div(
  tw`absolute bottom-0 left-1/2 -translate-x-1/2 min-w-[30rem] sm:min-w-[34rem] md:(min-w-[50rem]) lg:(bottom-1/2 translate-y-1/2) w-full`
);

const PortraitContainer = styled(BackgroundContainer)(
  tw`bottom-0 translate-y-0 max-w-xs z-20 min-w-0 sm:max-w-md md:(max-w-xl min-w-0) lg:max-w-screen-md`
);

const PlaygroundMenuContainer = styled.div(
  tw`w-full flex flex-col gap-4 justify-center items-center bg-neutral-100`
);

const PlaygroundOptions = styled.div<{ $variant: 'desktop' | 'mobile' }>(
  ({ $variant }) => [
    $variant === 'mobile' &&
      tw`w-full flex flex-wrap gap-4 justify-center items-center md:hidden`,

    $variant === 'desktop' &&
      tw`hidden md:(relative pt-40 px-8 flex flex-col gap-4 z-50)`,
  ]
);

export function PortraitComponent() {
  const {
    state: { palette },
  } = ThemeContext.useThemeContext();

  const Background = useMemo(() => backgrounds[palette], [palette]);
  return (
    <>
      <PlaygroundContainer>
        <BackgroundContainer>
          <Canvas>
            <Background />
          </Canvas>
        </BackgroundContainer>
      </PlaygroundContainer>
    </>
  );
}
