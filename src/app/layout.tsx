import type { Metadata } from 'next';
import { Inter, Sarpanch } from 'next/font/google';

import { PortraitContext, ThemeContext } from '../contexts';
import StyledComponentsRegistry from '../lib/registry';
import GlobalStyles from '../styles/GlobalStyles';

const sarpanch = Sarpanch({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
});

const inter = Inter({ subsets: ['latin'] });

const title = 'Yoni David on the World Wide Web';
const description =
  'Looking for a developer? Yoni David provides expertise in a wide range of technologies, aiding in the delivery of high-quality applications, scalable solutions and productive development environments.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'web development',
    'web developmer',
    'software development',
    'software developmer',
    'html',
    'css',
    'tailwind',
    'react',
    'react native',
    'javascript',
    'typescript',
    'node',
    'python',
    'rust',
    'portfolio',
    'resume',
    'cv',
  ],
  icons: {
    icon: [
      { url: '/icon-light.ico' },
      new URL('/icon.png', 'https://example.com'),
      { url: '/icon-dark.ico', media: '(prefers-color-scheme: dark)' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [],
  },
  openGraph: {
    type: 'website',
    title,
    description,
    images: [],
  },
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${sarpanch.className} ${inter.className}`}>
        <StyledComponentsRegistry>
          <ThemeContext.Provider>
            <PortraitContext.Provider>
              <GlobalStyles />
              {props.children}
            </PortraitContext.Provider>
          </ThemeContext.Provider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
