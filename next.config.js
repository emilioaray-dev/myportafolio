module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
  */

  const nextConfig = {
    /* config options here */
    i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    localeDetection: false,
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