import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { useCallback } from 'react';
import { MdOutlineFormatPaint, MdOutlineSettingsBackupRestore } from 'react-icons/md';
import {
  RiTShirt2Line,
  RiShuffleFill,
  RiPaletteFill,
  RiContrastFill,
} from 'react-icons/ri';
import tw, { styled, theme } from 'twin.macro';

import { PortraitContext, ThemeContext } from '../../contexts';
import type { palettes } from '../../styles/constants/themes';
import { themeColorTitles } from '../../styles/constants/themes';

type HandlerType =
  | 'default'
  | 'custom'
  | 'color'
  | 'random'
  | 'contrast'
  | 'theme'
  | keyof Omit<PortraitContext.AssembledPortrait, 'skin'>;

const {
  usePortraitContext,
  defaultAttributeFills,
  eyeTypes,
  eyebrowTypes,
  facialHairTypes,
  glassesTypes,
  hairTypes,
  hatTypes,
  mouthTypes,
  shirtTypes,
} = PortraitContext;

const PlaygroundMenuIndicatorContainer = styled(motion.div).attrs({
  variants: {
    active: {
      bottom: [92, 90, 94, 90],
      transition: {
        bottom: {
          duration: 0.3,
        },
      },
    },
    inactive: {
      bottom: [32, 30, 34, 30],
      transition: {
        filter: {
          duration: 0.3,
          repeat: Infinity,
          repeatType: 'mirror',
        },
        bottom: { repeat: Infinity, repeatDelay: 1 },
      },
    },
  },
})(tw`w-fit p-4 absolute left-1/2 -translate-x-1/2 z-50 cursor-pointer transition-all`);

const PlaygroundMenuIndicator = styled(motion.div).attrs({
  variants: {
    inactive: { width: theme`width.40` },
    active: { width: theme`width.80` },
  },
})(
  tw`h-0.5 bg-neutral-500 rounded-full shadow-2xl shadow-bg transition-all hover:(brightness-150 scale-x-105 shadow-2xl shadow-neutral-50)`
);

const PlaygroundMenu = styled(motion.div).attrs({
  initial: { bottom: '-5rem' },
  animate: { bottom: '3rem' },
  exit: { bottom: '-5rem' },
})<{ $expanded: boolean }>(({ $expanded }) => [
  tw`bg-gradient-to-b from-neutral-50 to-neutral-100 rounded-md absolute left-1/2 -translate-x-1/2 bottom-16 p-0.5 z-50 shadow-control transition-all duration-300`,
  $expanded && tw`w-full sm:w-fit translate-y-10`,
]);

const ControlButton = styled.button<{ $text?: boolean }>(({ $text }) => [
  tw`relative m-0.5 min-w-[2rem] px-2 py-2 lg:(p-4) bg-gradient-to-b from-neutral-100 to-neutral-200 text-neutral-500 rounded transform duration-75 overflow-hidden shadow-control`,
  tw`hocus:(after:(bg-neutral-700) text-neutral-900 scale-y-110 -translate-y-1 shadow-sm outline-0)`,
  tw`after:(absolute left-0 top-0 w-full h-1/6 bg-neutral-300)`,
  $text &&
    tw`min-w-[4.7rem] w-full sm:w-fit text-xs font-bold uppercase col-span-2 sm:col-span-1`,
]);

export function PortraitMenu() {
  const [active, toggleActive] = useCycle<'active' | 'inactive'>('active', 'inactive');

  const toggleActiveState = useCallback(() => {
    toggleActive();
  }, [toggleActive]);

  const {
    actions: { RANDOMIZE, SET_SINGLE_ATTRIBUTE, SET_TO_DEFAULT, SET_VIEW },
    state: { attributes, view },
  } = usePortraitContext();
  const {
    state: { contrast, palette },
    actions: { SET_CONTRAST, SET_PALETTE },
  } = ThemeContext.useThemeContext();

  const handler = useCallback(
    (task: HandlerType) => {
      const attributeHandler =
        <T extends keyof Omit<PortraitContext.AttributeTypeAssociations, 'skin'>>(
          type: T,
          styles: PortraitContext.AttributeTypeAssociations[T][]
        ) =>
        () => {
          const numberOfTypes = styles.length - 1;
          const currentIndex = styles.indexOf(
            attributes[type].type as PortraitContext.AttributeTypeAssociations[T]
          );
          const nextIndex = currentIndex + 1;
          const fill = (num: number) => defaultAttributeFills[type][styles[num]];

          SET_SINGLE_ATTRIBUTE(
            numberOfTypes === currentIndex
              ? { [type]: { fill: fill(0), type: styles[0] } }
              : { [type]: { fill: fill(nextIndex), type: styles[nextIndex] } }
          );
        };

      const defaultHandler = () => {
        SET_TO_DEFAULT();
        SET_VIEW('default');
      };

      const viewHandler = (target: PortraitContext.View) => () => {
        view === target ? SET_VIEW('default') : SET_VIEW(target);
      };

      const randomHandler = () => {
        SET_VIEW('default');
        RANDOMIZE();
      };

      const contrastHandler = () => {
        SET_CONTRAST(contrast === 'dark' ? 'light' : 'dark');
      };

      const themeHandler = () => {
        const themes = Object.entries(themeColorTitles) as Array<
          [keyof typeof palettes, string]
        >;

        const currentTheme = themes.find(([k]) => k === palette);
        const currentThemeIndex = currentTheme ? themes.indexOf(currentTheme) : 0;
        const nextTheme =
          currentThemeIndex === themes.length - 1
            ? themes[0]
            : themes[currentThemeIndex + 1];

        SET_VIEW('default');
        SET_PALETTE(nextTheme[0]);
      };

      switch (task) {
        case 'default':
          return defaultHandler;
        case 'custom':
          return viewHandler('custom');
        case 'color':
          return viewHandler('color');
        case 'random':
          return randomHandler;
        case 'contrast':
          return contrastHandler;
        case 'theme':
          return themeHandler;
        case 'eyebrows':
          return attributeHandler('eyebrows', eyebrowTypes);
        case 'eyes':
          return attributeHandler('eyes', eyeTypes);
        case 'facialHair':
          return attributeHandler('facialHair', facialHairTypes);
        case 'glasses':
          return attributeHandler('glasses', glassesTypes);
        case 'hair':
          return attributeHandler('hair', hairTypes);
        case 'hat':
          return attributeHandler('hat', hatTypes);
        case 'mouth':
          return attributeHandler('mouth', mouthTypes);
        case 'shirt':
          return attributeHandler('shirt', shirtTypes);
      }
    },
    [
      RANDOMIZE,
      SET_CONTRAST,
      SET_PALETTE,
      SET_SINGLE_ATTRIBUTE,
      SET_TO_DEFAULT,
      SET_VIEW,
      attributes,
      contrast,
      palette,
      view,
    ]
  );

  return (
    <>
      <PlaygroundMenuIndicatorContainer
        onClick={toggleActiveState}
        initial={active}
        animate={active}
      >
        <PlaygroundMenuIndicator initial={active} animate={active} />
      </PlaygroundMenuIndicatorContainer>
      <AnimatePresence>
        {active === 'active' && (
          <PlaygroundMenu $expanded={view === 'custom'}>
            <div css={tw`flex w-fit mx-auto`}>
              <ControlButton onClick={handler('default')}>
                <MdOutlineSettingsBackupRestore />
              </ControlButton>
              <ControlButton onClick={handler('contrast')}>
                <RiContrastFill />
              </ControlButton>
              <ControlButton onClick={handler('theme')}>
                <RiPaletteFill />
              </ControlButton>
              <ControlButton onClick={handler('custom')}>
                <RiTShirt2Line />
              </ControlButton>
              <ControlButton onClick={handler('color')}>
                <MdOutlineFormatPaint />
              </ControlButton>
              <ControlButton onClick={handler('random')}>
                <RiShuffleFill />
              </ControlButton>
            </div>

            {view === 'custom' && (
              <div
                key='attributes'
                css={tw`sm:(w-[40rem]) p-1 w-full h-fit grid grid-cols-8 gap-0.5`}
              >
                <ControlButton $text onClick={handler('hat')}>
                  lid
                </ControlButton>
                <ControlButton $text onClick={handler('eyes')}>
                  eyes
                </ControlButton>
                <ControlButton $text onClick={handler('shirt')}>
                  threads
                </ControlButton>
                <ControlButton $text onClick={handler('glasses')}>
                  specs
                </ControlButton>
                <ControlButton $text onClick={handler('facialHair')}>
                  beard
                </ControlButton>
                <ControlButton $text onClick={handler('eyebrows')}>
                  brows
                </ControlButton>
                <ControlButton $text onClick={handler('mouth')}>
                  mouth
                </ControlButton>
                <ControlButton $text onClick={handler('hair')}>
                  hair
                </ControlButton>
              </div>
            )}
          </PlaygroundMenu>
        )}
      </AnimatePresence>
    </>
  );
}
