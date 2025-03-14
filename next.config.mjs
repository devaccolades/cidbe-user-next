/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:false,
  images: {
    domains: [
      // 'localhost', 
      // '192.168.1.37', 
      'backend.cidbi.com',
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: '/_next/static/videos/',
          outputPath: 'static/videos/',
        },
      },
    });

    return config;
  },

};

export default nextConfig;
