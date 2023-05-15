require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(fbx)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/models/',
            publicPath: '_next/static/models/'
          },
        },
      ],
    })

    return config
  },
}

module.exports = nextConfig
