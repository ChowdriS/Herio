/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
        domains: ['i.scdn.co'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.scdn.co',
            port: '',
            pathname: '/my-bucket/**',
          },
        ],
      },

};

export default nextConfig;
