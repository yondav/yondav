import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { useCallback } from 'react';
import type { ColorResult } from 'react-color';
import { MdOutlineSettingsBackupRestore } from 'react-icons/md';
import {
  RiTShirt2Line,
  RiShuffleFill,
  RiMapPin2Fill,
  RiContrastFill,
  RiPaintFill,
} from 'react-icons/ri';
import tw, { styled, theme } from 'twin.macro';

import { usePortraitContext } from '../../contexts/portrait';

import { ColorPicker } from './Portrait.ColorPicker';
import { MenuButton } from './Portrait.MenuButton';

const PlaygroundMenuIndicatorContainer = styled(motion.div).attrs({
  variants: {
    active: {
      bottom: [0, 6, 10, 0],
      transition: { bottom: { duration: 0.3 } },
    },
    inactive: {
      bottom: [2, 0, 4, 0],
      transition: {
        filter: { repeat: Infinity, repeatType: 'mirror' },
        bottom: { repeat: Infinity, repeatDelay: 1 },
      },
    },
  },
})(
  tw`hidden md:block w-fit p-4 absolute left-1/2 -translate-x-1/2 z-40 cursor-pointer transition-all`
);

const PlaygroundMenuIndicator = styled(motion.div).attrs({
  variants: { inactive: { width: theme`width.20` }, active: { width: theme`width.48` } },
})(
  tw`h-0.5 bg-neutral-500 rounded-full shadow-2xl shadow-neutral-50 transition-all hover:(brightness-150 scale-x-105 shadow-2xl shadow-neutral-50)`
);

const PlaygroundMenu = styled(motion.div).attrs({
  initial: { bottom: '-5rem' },
  animate: { bottom: 'var(--portrait-menu-bottom)' },
  exit: { bottom: '-5rem' },
})<{ $expanded: boolean; $dropped?: boolean }>(({ $expanded, $dropped }) => [
  tw`bg-gradient-to-b from-neutral-200 to-neutral-100 rounded-lg shadow-control`,
  tw`md:(transition-all duration-300) -translate-x-1/2 `,
  tw`absolute left-1/2 p-0.5 z-40`,

  $expanded && tw`w-full sm:w-fit`,
  $dropped && tw`translate-y-24 md:translate-y-2`,
]);

export function PortraitMenu() {
  const [active, toggleActive] = useCycle<'active' | 'inactive'>('active', 'inactive');

  const toggleActiveState = useCallback(() => {
    toggleActive();
  }, [toggleActive]);

  const {
    state: { currentColor, view },
    actions: { SET_CURRENT_COLOR },
  } = usePortraitContext();

  const handleColorPicker = useCallback(
    (color: ColorResult) => {
      SET_CURRENT_COLOR(color.hex);
    },
    [SET_CURRENT_COLOR]
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
          <PlaygroundMenu
            $expanded={view === 'custom'}
            $dropped={view === 'custom' || view === 'color'}
          >
            <div css={tw`flex w-fit mx-auto`}>
              <MenuButton
                size='md'
                task='default'
                icon={MdOutlineSettingsBackupRestore}
              />
              <MenuButton size='md' task='contrast' icon={RiContrastFill} />
              <MenuButton size='md' task='theme' icon={RiMapPin2Fill} />
              <MenuButton
                size='md'
                task='custom'
                icon={RiTShirt2Line}
                active={view === 'custom'}
              />
              <MenuButton
                size='md'
                task='color'
                icon={RiPaintFill}
                active={view === 'color'}
              />
              <MenuButton size='md' task='random' icon={RiShuffleFill} />
            </div>

            {view === 'custom' && (
              <div
                key='attributes'
                css={tw`sm:(w-[40rem]) p-1 w-full h-fit grid grid-cols-8 gap-0.5`}
              >
                <MenuButton task='hat' copy='lid' />
                <MenuButton task='eyes' copy='eyes' />
                <MenuButton task='shirt' copy='threads' />
                <MenuButton task='glasses' copy='specs' />
                <MenuButton task='facialHair' copy='beard' />
                <MenuButton task='eyebrows' copy='brows' />
                <MenuButton task='mouth' copy='mouth' />
                <MenuButton task='hair' copy='hair' />
              </div>
            )}

            {view === 'color' && (
              <div key='colors' css={tw`p-1 w-full h-fit`}>
                <ColorPicker color={currentColor} onChange={handleColorPicker} />
              </div>
            )}
          </PlaygroundMenu>
        )}
      </AnimatePresence>
    </>
  );
}
