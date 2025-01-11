import type { Config } from 'tailwindcss';
import aspectRatio from '@tailwindcss/aspect-ratio';

export default {
  // 告诉 Tailwind 去哪里扫描 class
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // 如果你在其他目录也会用到 Tailwind，继续添加...
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontWeight: {
        'extra-black': '950', // 自定义字体重量
      },
      gridTemplateRows: {
        // 定义自定义的行高模板
        'custom-8': 'repeat(2, 320px)', // 8 行，每行 100px 高
        'custom-12': 'repeat(12, 100px)', // 12 行，每行 100px 高
      },
      borderRadius: {
        'extra-large': '1.5rem',       // 24px
        't-extra-large': '1.5rem',     // 24px, specifically for top corners
      },
      minHeight: {
        '60': '15rem', // 240px
        '72': '18rem', // 288px
        '80': '20rem', // 320px
        '100px': '100px', // 自定义最小高度
        '200px': '200px', // 更多自定义高度
        '300px': '300px',
      },
    },
  },
  plugins: [aspectRatio],
} satisfies Config;
