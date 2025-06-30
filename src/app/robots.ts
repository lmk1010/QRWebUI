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
          '/_next/static/chunks/',
          '/_next/webpack-hmr',
          '/admin/',
          '/tmp/',
          '/*.json',
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
        ],
        disallow: [
          '/api/',
          '/_next/static/chunks/',
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
        ],
        disallow: [
          '/api/',
          '/_next/',
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
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
} 