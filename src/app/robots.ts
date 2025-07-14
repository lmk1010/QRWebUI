import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://qrcodehub.net'

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/ads.txt',
          '/sitemap.xml',
          '/robots.txt',
          '/*.css',
          '/*.js',
          '/assets/',
          '/public/',
        ],
        disallow: [
          '/api/',
          '/_next/webpack-hmr',
          '/admin/',
          '/tmp/',
          '/server-manage.sh',
          '/deploy*.sh',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/ads.txt',
          '/sitemap.xml',
          '/robots.txt',
          '/*.css',
          '/*.js',
          '/assets/',
          '/public/',
          '/_next/static/',
        ],
        disallow: [
          '/api/',
          '/_next/webpack-hmr',
          '/admin/',
          '/tmp/',
        ],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: [
          '/',
          '/assets/',
          '/public/',
          '/*.png',
          '/*.jpg',
          '/*.jpeg',
          '/*.gif',
          '/*.svg',
          '/*.webp',
        ],
        disallow: [],
      },
      {
        userAgent: 'AdsBot-Google',
        allow: [
          '/',
          '/ads.txt',
          '/*.css',
          '/*.js',
          '/_next/static/',
        ],
        disallow: [
          '/api/',
          '/_next/webpack-hmr',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: [
          '/',
          '/ads.txt',
          '/sitemap.xml',
          '/*.css',
          '/*.js',
          '/_next/static/',
        ],
        disallow: [
          '/api/',
          '/_next/webpack-hmr',
          '/admin/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}