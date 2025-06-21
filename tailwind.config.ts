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
      // 自定义断点 - 添加iPad专用断点
      screens: {
        'xs': '475px',        // 小手机
        'sm': '640px',        // 标准小屏
        'md': '768px',        // iPad mini开始
        'ipad': '768px',      // iPad专用
        'lg': '1024px',       // 大屏设备
        'xl': '1280px',       // 超大屏
        '2xl': '1536px',      // 2K屏
        // iPad专用范围断点
        'ipad-only': {'min': '768px', 'max': '1023px'},
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontWeight: {
        'extra-black': '950', // 自定义字体重量
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
        '98': '0.98',
        '97': '0.97',
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
      // 自定义间距
      spacing: {
        '18': '4.5rem',   // 72px
        '88': '22rem',    // 352px
        '128': '32rem',   // 512px
      },
      // 自定义最大宽度
      maxWidth: {
        'ipad': '768px',
        '8xl': '88rem',
        '9xl': '96rem',
      },
      // 自定义字体大小
      fontSize: {
        'xxs': ['0.625rem', { lineHeight: '0.75rem' }], // 10px
        '2.5xl': ['1.75rem', { lineHeight: '2rem' }],    // 28px
      },
      // 自定义边框宽度
      borderWidth: {
        '3': '3px',
        '5': '5px',
      },
    },
  },
  plugins: [
    aspectRatio,
    // 添加自定义工具类插件
    function({ addUtilities }: any) {
      const newUtilities = {
        // iPad专用工具类
        '.ipad-safe-area': {
          paddingLeft: '1rem',
          paddingRight: '1rem',
          '@media (min-width: 768px) and (max-width: 1023px)': {
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
          },
        },
        // 防止水平滚动
        '.prevent-horizontal-scroll': {
          overflowX: 'hidden',
          width: '100%',
          maxWidth: '100vw',
        },
      };
      
      addUtilities(newUtilities);
    }
  ],
} satisfies Config;
