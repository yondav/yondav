import { useRef, type ReactNode } from 'react';

import type { Social } from '../../../sanity/lib';
import { useScrollPosition } from '../../hooks';
import { Container } from '../Container';

import { SiteFooter } from './Layout.Footer';
import { SiteHeader } from './Layout.Header';

interface LayoutProps {
  socials: Social[];
  resume: string;
  children: ReactNode;
}

export function Layout({ socials, resume, children }: LayoutProps) {
  const layoutRef = useRef<HTMLDivElement>(null);
  const { isBottom, isTop } = useScrollPosition(layoutRef);

  return (
    <>
      <SiteHeader sticky={!isTop} socials={socials} resume={resume} />
      <Container ref={layoutRef}>{children}</Container>
      <SiteFooter bottom={isBottom} sticky={isTop} socials={socials} />
    </>
  );
}
