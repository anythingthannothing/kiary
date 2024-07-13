import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(new URL(".", import.meta.url));
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static.kiary.com',
                pathname: '*'
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '*'
            }
        ]
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    },
};

export default nextConfig;
