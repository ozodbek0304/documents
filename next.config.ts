/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.hujjat.uz",
      "d280q91s0zg1ey.cloudfront.net",
    ],
  },
  reactStrictMode: true,
  trailingSlash: true,
};

module.exports = nextConfig;
