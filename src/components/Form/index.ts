import tw, { css, styled } from 'twin.macro';

const baseStyle = (error: boolean) => [
  tw`w-full py-3 px-6`,
  tw`border border-neutral-300 bg-neutral-50 text-base text-neutral-700 outline-none`,
  tw`rounded-md transition-all duration-300`,
  tw`focus:(border-primary-500 shadow-control)`,

  error && tw`border-red-600 bg-red-500/10`,
];

export const Base = styled.form<{ $grid?: boolean }>(({ $grid }) => [
  tw`w-full`,
  $grid && {
    ...tw`grid grid-cols-6 gap-y-12 lg:gap-x-12`,
    gridTemplateRows: 'auto 1fr auto',
  },
]);

export const Label = styled.label(() => [tw`mb-3 block text-sm font-semibold`]);

export const Group = styled.div<{
  $gridCell?: {
    stackable?: boolean;
    colStart: { base: number; sm: number; md: number; lg: number };
    colEnd: { base: number; sm: number; md: number; lg: number };
    rowStart: { base: number; sm: number; md: number; lg: number };
    rowEnd: { base: number; sm: number; md: number; lg: number };
  };
}>(({ $gridCell }) => []);

export const Input = styled.input<{ $error?: boolean }>(({ $error }) => [
  ...baseStyle(!!$error),
]);

export const Textarea = styled.textarea<{ $error?: boolean }>(({ $error }) => [
  ...baseStyle(!!$error),
  tw`resize-none`,
]);
