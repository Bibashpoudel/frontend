/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.pacecode.com.np",
        port: "",
        pathname: "/image/assets/header.png",
      },
    ],
  },
};

module.exports = nextConfig;
