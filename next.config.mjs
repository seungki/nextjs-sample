/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/base',
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    output:"standalone"
};

export default nextConfig;
