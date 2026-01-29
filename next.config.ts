import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/halla_corp",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
