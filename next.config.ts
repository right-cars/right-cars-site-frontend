import { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: 'img.autotrader.co.za',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'img.autotrader.co.za',
        pathname: '**',
      },
    ],
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule: { test?: RegExp }) =>
      rule.test?.test?.(".svg")
    );

    // Add the rule for handling SVG as a React component via @svgr/webpack
    config.module.rules.push(
      {
        test: /\.svg$/i,
        resourceQuery: /url/, // URL resource query for handling static assets
        use: ["file-loader"], // File loader to handle SVGs as URLs
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule?.issuer,
        resourceQuery: { not: [/url/] },
        use: ["@svgr/webpack"], // Use @svgr for converting SVG to React components
      }
    );

    // Exclude .svg from the file-loader rule
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
};

export default nextConfig;
