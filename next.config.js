/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'maarefa.vercel.app']
  },
  i18n: {
    locales: ['ar'],
    defaultLocale: 'ar'
  }
}

module.exports = nextConfig
