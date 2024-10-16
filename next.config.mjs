/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const repo = "frontend-mentor-challenges";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? assetPrefix : "",
  basePath: isProd ? basePath : "",
};

export default nextConfig;
