/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{
      hostname: '*'
    }]
  }
};

export default nextConfig;
