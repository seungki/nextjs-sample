/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/test',
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    output:"standalone"
};

export default nextConfig;
