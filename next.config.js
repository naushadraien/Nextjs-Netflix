/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'occ-0-3933-116.1.nflxso.net',
      },
    ],
  },
}

module.exports = nextConfig
