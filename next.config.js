/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { dev, isServer }) => {
    // Disable webpack cache to prevent rename errors
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;