import { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: '页面未找到 - QRCodeHub',
  description: '很抱歉，您访问的页面不存在',
};

// 单独导出viewport配置
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

// 使用Suspense包裹可能使用useSearchParams的组件
function NotFoundContent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">页面未找到</h2>
      <p className="mt-2 text-gray-600">
        很抱歉，您访问的页面不存在或已被移除
      </p>
      <Link 
        href="/"
        className="px-6 py-3 mt-8 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
      >
        返回首页
      </Link>
    </div>
  );
}

export default function NotFound() {
  return (
    <Suspense fallback={<div>加载中...</div>}>
      <NotFoundContent />
    </Suspense>
  );
} 