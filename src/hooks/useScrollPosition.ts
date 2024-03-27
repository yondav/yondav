import { useCallback, useState, useRef, type RefObject } from 'react';

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

enum DIRECTION {
  STILL = 'still',
  DOWN = 'down',
  UP = 'up',
}

export function useScrollPosition(ref: RefObject<HTMLDivElement>) {
  const [isBottom, setIsBottom] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [scrollDirection, setScrollDirection] = useState<DIRECTION>(DIRECTION.STILL);
  const [prevOffset, setPrevOffset] = useState(0);

  const blocking = useRef(false);
  const handleScroll = useCallback(() => {
    const offsetHeight = ref.current?.offsetHeight ?? 0;
    const innerHeight = window.innerHeight;
    const scrollTop = document.documentElement.scrollTop;

    const hasReachedBottom =
      scrollDirection === DIRECTION.DOWN &&
      offsetHeight - (innerHeight + scrollTop) <= 10;

    let scrollY = window.scrollY;

    if (scrollY === 0 || scrollY === prevOffset) setScrollDirection(DIRECTION.STILL);
    if (scrollY > prevOffset) setScrollDirection(DIRECTION.DOWN);
    if (scrollY < prevOffset) setScrollDirection(DIRECTION.UP);

    setPrevOffset(scrollY);
    setIsTop(scrollTop < 80);

    if (scrollDirection === DIRECTION.DOWN)
      setIsBottom(offsetHeight - (innerHeight + scrollTop) <= 10);
    if (scrollDirection === DIRECTION.UP)
      setIsBottom(offsetHeight - (innerHeight + scrollTop) < 0);

    blocking.current = false;
  }, [prevOffset, ref, scrollDirection]);

  useIsomorphicLayoutEffect(() => {
    const onScroll = () => {
      if (!blocking.current) {
        blocking.current = true;
        window.requestAnimationFrame(handleScroll);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  return { isBottom, isTop };
}
