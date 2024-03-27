export const fullFade = {
  variants: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  transition: { duration: 0.6, delayChildren: 0.6 },
};

export const parallax = (x?: boolean, staggerChildren?: boolean) => ({
  variants: {
    hidden: { ...fullFade.variants.hidden, translateX: x ? '100%' : 0 },
    visible: { ...fullFade.variants.visible, translateX: 0 },
  },
  transition: { duration: 0.6, staggerChildren: staggerChildren ? 0.6 : 0 },
  initial: 'hidden',
  whileInView: 'visible',
});
