import type { NextConfig } from 'next'
import type { Configuration as WebpackConfig } from 'webpack'

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    domains: ['tile.openstreetmap.org'],
  },
  webpack: (config: WebpackConfig) => {
    if (config.module && config.module.rules) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })
    }
    return config
  },
}

export default nextConfig
