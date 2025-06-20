'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect, Suspense } from 'react';

// Google Analytics 测量 ID
const GA_MEASUREMENT_ID = 'G-BY2357W9ES';

// 为 window.gtag 添加类型定义
declare global {
  interface Window {
    gtag: (
      command: string,
      target: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

// 将使用useSearchParams的逻辑提取到单独的组件
function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && typeof window.gtag === 'function') {
      // 当路由变化时，发送页面浏览事件到 Google Analytics
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''),
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export default function GoogleAnalytics() {
  return (
    <>
      {/* Google tag (gtag.js) - 使用官方提供的代码 */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
      <Suspense fallback={null}>
        <AnalyticsTracker />
      </Suspense>
    </>
  );
} 