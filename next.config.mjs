/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.cidbi.com",
        pathname: "/**",
      },
    ],
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "/_next/static/videos/",
          outputPath: "static/videos/",
        },
      },
    });

    return config;
  },
};

export default nextConfig;