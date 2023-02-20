/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['a.storyblok.com']
  },
  env: {
    storyblokApiToken: process.env.STORYBLOK_API_TOKEN
  },
  i18n: {
    locales: ['en', 'nl'],
    defaultLocale: 'en'
  }
};
