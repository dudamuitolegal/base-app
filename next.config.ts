import type { NextConfig } from "next";
import {siteConfig} from "@/utils/siteConfig";

const nextConfig: NextConfig = {
    output: "export",
    distDir: "out",
    images: {unoptimized: true},
    async redirects(){
        return [
            {
                source: "/go/:path*",
                destination: siteConfig.affiliateLink,
                permanent: false,
            }
        ]
    }
};

export default nextConfig;
