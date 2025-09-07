import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '***',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
    ],
  },

  compiler: {
    reactRemoveProperties: true,
  },
  swcMinify: true,
};

export default nextConfig;
