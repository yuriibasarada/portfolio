/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
      prependData: `@import "variables.scss";`
    },
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    webpack(config) {
        config.experiments = {
          ...config.experiments,
          topLevelAwait: true,
        }
        return config
      }
}

module.exports = nextConfig
