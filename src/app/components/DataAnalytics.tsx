'use client';

import Script from 'next/script';

export default function DataAnalytics() {
  return (
    <>
      {/* 数据监控脚本 */}
      <Script
        defer
        data-domain="qrcodehub.net"
        src="http://172.245.62.112:8200/js/script.js"
        strategy="afterInteractive"
      />
    </>
  );
} 