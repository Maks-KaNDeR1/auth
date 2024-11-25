import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ["fsd", "src"],
  },
};

export default nextConfig;
