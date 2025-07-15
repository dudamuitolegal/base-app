import type { NextConfig } from "next";
import { siteConfig } from "@/utils/siteConfig";

const nextConfig: NextConfig = {
    output: "export",
    distDir: "out",
    async redirects() {
        return [
            {
                source: "/go/:path*",
                destination: siteConfig.defaultLink,
                permanent: false,
            },
        ];
    },
};

export default nextConfig;