import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern', // or "modern"
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        // pathname: ''
      },
    ],
  },
};

export default nextConfig;
