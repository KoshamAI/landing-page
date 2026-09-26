import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  outputFileTracingRoot: process.cwd(),
};
export default nextConfig;
