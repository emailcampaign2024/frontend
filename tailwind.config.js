/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'login-backCover' : "url('https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.512/wac.92a80da2.svg')"
      },
      colors: {
        'primary':'#0052CC',
        'primaryDark':'#0041A3',
        'secondary':'#0065ff',
        'fadedBg':'#DEEBFF',
        'textSoft':'#42526e',
        'textDark':'#253858',
        'borderColor':'#E0E0E0',
        'iconColor':'#A3A2B9'
      }
    },
  },
  plugins: [],
}
