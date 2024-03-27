import { motion } from 'framer-motion';
import tw, { styled, theme } from 'twin.macro';

export const clickableStyle = ({ $translate = true }) => [
  tw`hover:text-neutral-950 cursor-pointer transition-all duration-300`,
  $translate && tw`hover:(-translate-y-0.5)`,
];

export const LogoContainer = styled.div(() => [
  tw`w-12`,
  clickableStyle({ $translate: false }),
]);

export const SocialContainer = styled(motion.div)<{ $sticky: boolean }>(({ $sticky }) => [
  tw`flex items-center gap-2 text-neutral-800 transition-all duration-300`,
  $sticky && tw`hidden`,
]);

export const blurBg = {
  backgroundImage: `radial-gradient(${theme`colors.transparent`} 1px, ${theme`colors.neutral.100`} 1px)`,
  backgroundSize: '4px 4px',
  ...tw`transition-all duration-700 backdrop-blur-sm`,
};
