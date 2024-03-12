import type { ReactNode } from 'react';

import type { Social } from '../../../sanity/lib';
import { Container } from '../Container';
import { SiteHeader } from '../SiteHeader';

interface LayoutProps {
  socials: Social[];
  children: ReactNode;
}

export function Layout({ socials, children }: LayoutProps) {
  return (
    <>
      <SiteHeader socials={socials} />
      <Container>{children}</Container>
    </>
  );
}
