import type { ReactNode } from 'react';

import { Container } from '../Container';
import { SiteHeader } from '../SiteHeader';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <Container>{children}</Container>
    </>
  );
}
