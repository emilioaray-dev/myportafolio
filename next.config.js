module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
  */
  const { i18n } = require('./next-i18next.config');
  const nextConfig = {
    /* config options here */
    i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en'
    },
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