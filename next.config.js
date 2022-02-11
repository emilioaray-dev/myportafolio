module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
  */
  const nextConfig = {
    /* config options here */
    i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es'
  },
  }
  return nextConfig;
}