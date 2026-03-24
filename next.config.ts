import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/pgi-corporate-website',
  images: { unoptimized: true },
};

export default nextConfig;
