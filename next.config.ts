const withNextIntl = require("next-intl/plugin")("./src/i8n/request.ts");
const withBundleAnalyzer = require("@next/bundle-analyzer")();
import type { NextConfig } from "next";

const nextConfig: NextConfig = withNextIntl(
  withBundleAnalyzer({
    /* config options here */
  })
);

export default nextConfig;
