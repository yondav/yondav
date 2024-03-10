/**
 * `ColorPicker` is a custom React component that provides color selection functionality.
 * It displays a color picker interface with options to choose and copy a color's hexadecimal value.
 *
 * @component
 * @param {InjectedColorProps} props - The color-related properties and event handlers passed to the component.
 * @returns {JSX.Element} A color picker UI element.
 */

import { useCallback } from 'react';
import type { ColorResult, InjectedColorProps } from 'react-color';
import { CustomPicker } from 'react-color';
import { Hue, Saturation } from 'react-color/lib/components/common';
import tw, { styled } from 'twin.macro';

import { useThemeState } from '../../contexts/theme';

// Define the styled components used in the component's UI.
const ColorPickerContainer = styled.div(() => [
  tw`w-56 flex p-2`,
  tw`mx-auto`,
  tw`rounded`,

  tw`sm:w-full`,
]);

const HueSaturationContainer = styled.div(tw`w-full flex flex-col gap-0.5`);

const HueSaturation = styled.div<{ $variant: 'hue' | 'saturation' }>(({ $variant }) => [
  tw`relative overflow-hidden lg:w-56`,
  $variant === 'hue'
    ? tw`rounded-b h-2 md:h-1 lg:h-2`
    : tw`rounded-t h-6 sm:h-10 md:h-20 lg:h-28`,
]);

/**
 * The `ColorPicker` component displays a color picker interface with options to choose and copy a color's hexadecimal value.
 *
 * @param {InjectedColorProps} props - The color-related properties and event handlers passed to the component.
 * @returns {JSX.Element} A color picker UI element.
 */
function ColorPickerComponent(props: InjectedColorProps) {
  const { contrast } = useThemeState();

  // Handler function to handle color changes.
  const handleChange = useCallback(
    (color: ColorResult) => (props.onChange ? props.onChange(color) : null),
    [props]
  );

  return (
    <ColorPickerContainer>
      <HueSaturationContainer>
        <HueSaturation $variant='saturation'>
          <Saturation {...props} color={props.hex} onChange={handleChange} />
        </HueSaturation>
        <HueSaturation $variant='hue'>
          <Hue {...props} color={props.hex} onChange={handleChange} />
        </HueSaturation>
      </HueSaturationContainer>
    </ColorPickerContainer>
  );
}

export const ColorPicker = CustomPicker(ColorPickerComponent);
