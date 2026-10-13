/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  async redirects() {
    return [
      "ongoing-projects",
      "completed-projects",
      "upcoming-projects",
      "featured-projects",
      "ready-to-occupy-flats-thrissur",
    ].map((category) => ({
      source: `/${category}/:slug`,
      destination: "/projects/:slug",
      permanent: true,
    }));
  },

  images: {
    unoptimized: true,
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
