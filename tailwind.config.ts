import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'azul': {
          900: '#0d3b66', // Primária
        },
        'dourado': {
          500: '#f4d35e', // Secundária
        },
        'coral': {
          500: '#f95738', // Destaque
        },
        'creme': {
          50: '#faf0ca', // Fundo
        },
      },
      fontFamily: {
        'merriweather': ['var(--font-merriweather)'],
        'sans': ['var(--font-open-sans)'],
      },
      spacing: {
        // Sistema de 8px
        '1': '0.25rem',    // 4px
        '2': '0.5rem',     // 8px
        '3': '0.75rem',    // 12px
        '4': '1rem',       // 16px
        '5': '1.25rem',    // 20px
        '6': '1.5rem',     // 24px
        '8': '2rem',       // 32px
        '10': '2.5rem',    // 40px
        '12': '3rem',      // 48px
        '16': '4rem',      // 64px
        '20': '5rem',      // 80px
        '24': '6rem',      // 96px
        '32': '8rem',      // 128px
        '40': '10rem',     // 160px
        '48': '12rem',     // 192px
        '56': '14rem',     // 224px
        '64': '16rem',     // 256px
      },
    },
  },
  plugins: [],
}

export default config 