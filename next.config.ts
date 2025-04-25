import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    traillingSlash: false,
    output: "export",
    distDir: "out",
    images: {unoptimized: true}
};

export default nextConfig;
