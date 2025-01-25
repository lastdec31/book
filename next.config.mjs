/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    // async rewrites() {
    //     return [
    //     {
    //         source: "/:path*",
    //         destination: "http://www.aladin.co.kr/:path*",
    //     },
    //     ];
    // },
    images: {
        remotePatterns: [
            // {
            //     protocol: 'https',
            //     hostname: 'shopping-phinf.pstatic.net',
            //     port: '',
            // },
            {
                protocol: 'https',
                hostname: 'image.aladin.co.kr',
                port: '',
            },
        ]
    },
};
// module.exports = nextConfig;
export default nextConfig;

