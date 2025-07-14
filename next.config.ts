import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // 启用压缩
  compress: true,
  // 图片优化
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      }
    ],
  },
  // Webpack优化配置 - 暂时简化
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   // 优化分包策略
  //   if (!dev) {
  //     config.optimization = {
  //       ...config.optimization,
  //       splitChunks: {
  //         chunks: 'all',
  //         cacheGroups: {
  //           vendor: {
  //             test: /[\\/]node_modules[\\/]/,
  //             name: 'vendors',
  //             chunks: 'all',
  //           },
  //           qr: {
  //             test: /[\\/]node_modules[\\/](qrcode|qr-code-styling|qrcode\.react)[\\/]/,
  //             name: 'qr-libs',
  //             chunks: 'all',
  //             priority: 10,
  //           },
  //           icons: {
  //             test: /[\\/]node_modules[\\/](react-icons|@heroicons)[\\/]/,
  //             name: 'icons',
  //             chunks: 'all',
  //             priority: 10,
  //           },
  //           animation: {
  //             test: /[\\/]node_modules[\\/](framer-motion|gsap)[\\/]/,
  //             name: 'animation',
  //             chunks: 'all',
  //             priority: 10,
  //           }
  //         }
  //       }
  //     };
  //   }

  //   // Tree shaking优化
  //   config.optimization.usedExports = true;
  //   config.optimization.sideEffects = false;

  //   return config;
  // },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/assets/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/ads.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
