const { i18n } = require('./next-i18next.config');
module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
  */

  const nextConfig = {
    /* config options here */
    i18n,
    trailingSlash: false,
     typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
    },
    productionBrowserSourceMaps: true,
    }
  return nextConfig;
}