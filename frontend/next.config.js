/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Allow all domains in development (optional, for easier development)
    ...(process.env.NODE_ENV === 'development' && {
      unoptimized: false,
    }),
  },
}

module.exports = nextConfig

