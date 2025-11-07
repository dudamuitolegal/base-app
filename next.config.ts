import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
       {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'u6a1vj9v7vcxghjn.public.blob.vercel-storage.com',
      },
    ],
  },
};

export default nextConfig;
