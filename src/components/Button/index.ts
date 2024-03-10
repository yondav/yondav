import tw, { styled } from 'twin.macro';

interface ButtonProps {
  $variant?: 'primary' | 'secondary';
  $size?: 'sm' | 'md' | 'lg';
}

export const Button = styled.button<ButtonProps>(({ $size = 'md', $variant }) => [
  /***  base styles ***/

  // layout
  tw`relative overflow-hidden transform duration-75`,
  //spacing
  tw`pb-2.5 pt-4 px-4`,
  // design
  tw`bg-gradient-to-b from-neutral-100 to-neutral-200 text-neutral-500 rounded shadow-control`,
  // font
  tw`text-sm md:text-base font-bold uppercase`,
  // after
  tw`after:(absolute left-0 top-0 w-full h-1/6 bg-neutral-300)`,
  // hover / focus
  tw`hocus:(after:(bg-neutral-700) text-neutral-900 scale-y-110 -translate-y-1 shadow-sm outline-0)`,

  /***  viarants ***/

  $variant === 'primary' &&
    tw`bg-gradient-to-b from-primary-100 to-primary-200 text-primary-500`,
  $variant === 'primary' && tw`after:(bg-primary-300) hocus:(after:(bg-primary-500))`,

  $variant === 'secondary' &&
    tw`bg-gradient-to-b from-secondary-100 to-secondary-200 text-secondary-500`,
  $variant === 'secondary' &&
    tw`after:(bg-secondary-300) hocus:(after:(bg-secondary-500))`,

  /***  sizes ***/
  $size === 'sm' && tw`text-xs md:text-sm pb-1 pt-2.5 px-2.5`,
  $size === 'lg' && tw`text-base md:text-lg p-4 px-5`,
]);
