/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = {
  ...nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};
