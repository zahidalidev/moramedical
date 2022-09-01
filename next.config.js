/** @type {import('next').NextConfig} */
require('dotenv').config({
  path: '.env',
})

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
  target: 'serverless',
}

module.exports = nextConfig
