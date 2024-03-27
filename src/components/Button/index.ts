import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

interface ButtonProps {
  $variant?: 'primary' | 'secondary' | 'accent' | 'neutral';
  $size?: 'sm' | 'md' | 'lg';
}

export const Button = styled(motion.button)<ButtonProps>(({ $size = 'md', $variant }) => [
  /***  base styles ***/

  // layout
  tw`relative overflow-hidden transform duration-75`,
  //spacing
  tw`pb-2.5 pt-4 px-4`,
  // design
  tw`bg-gradient-to-b from-neutral-100 to-neutral-200 text-neutral-700 rounded shadow-control`,
  // font
  tw`text-sm md:text-base font-bold uppercase`,
  // after
  tw`after:(absolute left-0 top-0 w-full h-1/6 bg-neutral-700)`,
  // hover / focus
  tw`hover:(after:(bg-neutral-950) text-neutral-950 scale-y-110 -translate-y-1 shadow-control outline-0)`,

  /***  viarants ***/

  $variant && tw`transition-all duration-300 py-2.5`,

  $variant === 'primary' &&
    tw`bg-gradient-to-b from-primary-100 to-primary-200 text-primary-500`,
  $variant === 'primary' && tw`after:(bg-primary-300) hover:(after:(bg-primary-500))`,

  $variant === 'secondary' &&
    tw`bg-gradient-to-b from-secondary-100 to-secondary-200 text-secondary-500`,
  $variant === 'secondary' &&
    tw`after:(bg-secondary-300) hover:(after:(bg-secondary-500))`,

  $variant === 'accent' &&
    tw`bg-gradient-to-b from-neutral-100 to-neutral-100 brightness-125 shadow-none border border-neutral-100`,
  $variant === 'accent' &&
    tw`after:(absolute left-0 top-0 w-0 h-0) hocus:(brightness-100 text-accent-300 scale-y-100 -translate-y-0 shadow-control outline-0)`,

  $variant === 'neutral' &&
    tw`bg-gradient-to-b from-neutral-300 to-neutral-200 shadow-none border border-neutral-100`,
  $variant === 'neutral' &&
    tw`after:(absolute left-0 top-0 w-0 h-0) hocus:(brightness-110 scale-y-100 -translate-y-0 shadow-control outline-0)`,

  // $variant === 'accent' && tw`after:(bg-secondary-300) hover:(after:(bg-secondary-500))`,

  /***  sizes ***/
  $size === 'sm' && tw`text-xs md:text-sm pb-1 pt-2.5 px-2.5`,
  $size === 'lg' && tw`text-base md:text-lg p-4 px-5`,
]);
