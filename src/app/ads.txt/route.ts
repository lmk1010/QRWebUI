import { NextResponse } from 'next/server'

export async function GET() {
  const adsContent = `# ads.txt for qrcodehub.net
# This file is used by advertisers to verify authorized digital sellers

# Google AdSense
google.com, pub-7152647568736288, DIRECT, f08c47fec0942fa0

# Additional common ad networks (uncomment if needed)
# googlesyndication.com, pub-7152647568736288, DIRECT, f08c47fec0942fa0
# googleadservices.com, pub-7152647568736288, DIRECT, f08c47fec0942fa0

# Last updated: 2024-01-01
# Contact: admin@qrcodehub.net`

  return new NextResponse(adsContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
      'X-Robots-Tag': 'noindex',
    },
  })
} 