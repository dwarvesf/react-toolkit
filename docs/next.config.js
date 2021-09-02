const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const defaultConfig = {
  target: 'serverless',
  webpack: (config) => ({
    ...config,
    externals: [...config.externals, 'sharp'],
  }),
  experimental: {
    optimizeFonts: true,
    modern: true,
  },
  redirects: require('./next-redirect'),
  eslint: {
    // TODO: consider removing the setting once fixing all the ESLint warning
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = withPlugins([withBundleAnalyzer], defaultConfig)
