import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        Work: ['Work Sans', 'sans-serif'],
      },
      fontSize: {
        'feature-title': '32px',
      },
      animation: {
        'bounce-left-right': 'side-bounce 1s infinite',
      },
      keyframes: {
        'side-bounce': {
          '0%, 100%': {
            transform: 'translateX(0)',
          },
          '50%': {
            transform: 'translateX(5px)',
          },
        }
      },
      height: {
        'feature-card': '376px',
        'feature-title' : '76px',
        'footer': '760px',
      },
      width: {
        'feature-card': '330px',
        'feature-text' : '258px',
      },
      backgroundColor:{
        'feature-card': '#182225',
        'team-card': '#3D414F',
      }
      
    },
  },
  plugins: [
    require("tw-elements-react/dist/plugin.cjs")
  ],
}
export default config
