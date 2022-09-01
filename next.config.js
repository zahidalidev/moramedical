/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => [
    {
      source: '/',
      destination: '/events',
      permanent: true,
    },
  ],
}

module.exports = nextConfig
