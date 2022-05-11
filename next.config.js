/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
//   images: {
//     domains: ['images.unsplash.com'],
//     formats: ['image/avif', 'image/webp'],
//   },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

module.exports = nextConfig
