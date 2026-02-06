/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during build - we'll fix it later
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  
  // Path alias
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, './src'),
    };
    
    return config;
  },

  // Support for SCSS/SASS
  sassOptions: {
    includePaths: [require('path').join(__dirname, 'src')],
  },

  // Image optimization
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
  },

  // Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [];
  },

  // Environment variables
  env: {},
  
  // Disable static generation globally
  output: 'standalone',
};

module.exports = nextConfig;
