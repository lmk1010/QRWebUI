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
      borderRadius: {
        'extra-large': '1.5rem',       // 24px
        't-extra-large': '1.5rem',     // 24px, specifically for top corners
      },
    },
  },
  plugins: [aspectRatio],
} satisfies Config;
