import withTwin from './withTwin.mjs';

/**
 * @type {import('next').NextConfig}
 */
export default withTwin({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  experimental: {
    taint: true,
  },
});
