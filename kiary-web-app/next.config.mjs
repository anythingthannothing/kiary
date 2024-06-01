/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static.kiary.com',
                pathname: '*'
            }
        ]
    }
};

export default nextConfig;
