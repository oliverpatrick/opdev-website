const site = require('./src/site').site;

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  trailingSlash: site.trailingSlash,
  basePath:
    site.basePathname !== '/' ? site.basePathname : '',

  swcMinify: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'aceternity.com',
      },
    ],
  },
};
