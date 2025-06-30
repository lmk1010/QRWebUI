import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // 基本安全头部
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  
  // 爬虫友好的头部设置
  response.headers.set('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
  
  // 针对ads.txt的特殊处理
  if (request.nextUrl.pathname === '/ads.txt') {
    response.headers.set('Content-Type', 'text/plain; charset=utf-8')
    response.headers.set('Cache-Control', 'public, max-age=86400')
    response.headers.set('X-Robots-Tag', 'noindex')
  }
  
  // 针对robots.txt的特殊处理
  if (request.nextUrl.pathname === '/robots.txt') {
    response.headers.set('Content-Type', 'text/plain; charset=utf-8')
    response.headers.set('Cache-Control', 'public, max-age=3600')
  }
  
  // 针对sitemap.xml的特殊处理
  if (request.nextUrl.pathname === '/sitemap.xml') {
    response.headers.set('Content-Type', 'application/xml; charset=utf-8')
    response.headers.set('Cache-Control', 'public, max-age=3600')
  }
  
  // 为CSS和JS文件设置缓存
  if (request.nextUrl.pathname.match(/\.(css|js)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }
  
  // 为图片文件设置缓存
  if (request.nextUrl.pathname.match(/\.(png|jpg|jpeg|gif|svg|webp|ico)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }

  return response
}

export const config = {
  matcher: [
    // 匹配所有路径，除了以下几种：
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
} 