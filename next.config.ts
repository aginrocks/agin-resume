import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    webpack: (config, { isServer }) => {
        // Handle PDF.js worker
        if (!isServer) {
            config.resolve.alias = {
                ...config.resolve.alias,
                canvas: false,
                encoding: false,
            };
        }
        return config;
    },
    turbopack: {
        resolveAlias: {
            canvas: './empty-module.ts',
        },
    },
    output: 'standalone',
};

export default nextConfig;
