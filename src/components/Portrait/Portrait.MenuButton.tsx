import { useCallback, type ReactNode } from 'react';
import type { IconType } from 'react-icons';
import tw, { styled } from 'twin.macro';

import { PortraitContext, ThemeContext } from '../../contexts';
import type { palettes } from '../../styles/constants/themes';
import { themeColorTitles } from '../../styles/constants/themes';
import { Button } from '../Button';

const StyledButton = styled(Button)<{ $text?: boolean; $active?: boolean }>(
  ({ $text, $active }) => [
    tw`m-0.5 min-w-[2rem]`,
    $text &&
      tw`min-w-[4.7rem] w-full sm:w-fit text-xs font-bold uppercase col-span-2 sm:col-span-1`,

    $active &&
      tw`after:(bg-accent-300) text-neutral-950 scale-y-110 -translate-y-1 shadow-control hover:(after:bg-accent-300)`,
  ]
);

interface MenuButtonProps {
  task:
    | 'default'
    | 'custom'
    | 'color'
    | 'random'
    | 'contrast'
    | 'theme'
    | keyof Omit<PortraitContext.AssembledPortrait, 'skin'>;
  size?: 'sm' | 'md' | 'lg';
  icon?: IconType;
  copy?: string | number | ReactNode;
  active?: boolean;
}

const {
  defaultAttributeFills,
  eyebrowTypes,
  eyeTypes,
  facialHairTypes,
  glassesTypes,
  hairTypes,
  hatTypes,
  mouthTypes,
  shirtTypes,
  usePortraitContext,
} = PortraitContext;

export function MenuButton({ task, icon, copy, size = 'sm', active }: MenuButtonProps) {
  const {
    actions: { RANDOMIZE, SET_SINGLE_ATTRIBUTE, SET_TO_DEFAULT, SET_VIEW },
    state: { attributes, view },
  } = usePortraitContext();

  const {
    state: { contrast, palette },
    actions: { SET_CONTRAST, SET_PALETTE },
  } = ThemeContext.useThemeContext();

  const handler = useCallback(() => {
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
  }, [
    RANDOMIZE,
    SET_CONTRAST,
    SET_PALETTE,
    SET_SINGLE_ATTRIBUTE,
    SET_TO_DEFAULT,
    SET_VIEW,
    attributes,
    contrast,
    palette,
    task,
    view,
  ]);

  return (
    <StyledButton $size={size} $text={!!copy} $active={active} onClick={handler()}>
      {icon ? icon({}) : ''}
      {copy ? `${icon ? ` ${copy}` : copy}` : ''}
    </StyledButton>
  );
}
