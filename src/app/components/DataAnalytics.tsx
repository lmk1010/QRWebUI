'use client';

import Script from 'next/script';

export default function DataAnalytics() {
  return (
    <>
      {/* 数据监控脚本 */}
      <Script
        defer
        data-domain="qrcodehub.net"
        data-api="https://vince.charitydoing.com/api/event"
        src="https://vince.charitydoing.com/js/script.js"
      />
    </>
  );
} 