import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output standalone for Docker/EC2, or use 'export' for pure S3 static
  // For S3 static: output: "export"
  images: {
    // All images are self-hosted in /public — no external domains needed
    unoptimized: false,
  },
  // Disable default favicon route — we use our own
  // Strict mode for catching React issues early
  reactStrictMode: true,
};

export default nextConfig;
