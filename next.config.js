/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  staticPageGenerationTimeout: 100,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
