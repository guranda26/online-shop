/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "./build",
  eslint: {
    dirs: ["src"],
  },
};

export default nextConfig;
