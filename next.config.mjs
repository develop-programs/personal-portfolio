/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.microlink.io',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '/**'
            }
        ]
    },
};

export default nextConfig;
