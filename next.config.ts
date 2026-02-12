import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/nl/over-ons',
        destination: '/nl/about',
      },
      {
        source: '/nl/plantipower-all12',
        destination: '/nl/products/all12',
      },
      {
        source: '/nl/plantipower-shield',
        destination: '/nl/products/shield',
      },
    ]
  },
};

export default nextConfig;
