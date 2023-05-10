/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"], //this is for adding the mongoose package to the server side
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
