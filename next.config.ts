import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [50, 60, 70, 80, 90, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },
  allowedDevOrigins: ["*", "10.10.7.47"],
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
};

export default nextConfig;
