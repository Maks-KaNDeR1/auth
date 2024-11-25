import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ["fsd", "src"],
  },
  output: "export",
  assetPrefix: "/auth",
  basePath: "/auth",
};

export default nextConfig;
