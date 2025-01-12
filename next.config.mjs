/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async rewrites() {
        return [
        {
            source: "/:path*",
            destination: "https://openapi.naver.com/:path*",
        },
        ];
    },
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'shopping-phinf.pstatic.net',
            port: '',
        }]
    },
};
// module.exports = nextConfig;
export default nextConfig;

