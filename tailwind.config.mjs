/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f4',
          100: '#dcf0e4',
          200: '#bae0cc',
          300: '#8ec7a8',
          400: '#5ca77d',
          500: '#3d8c5e',
          600: '#2f6f4a',
          700: '#27583d',
          800: '#234733',
          900: '#1d3a2b',
        },
        accent: {
          50: '#fdf8f3',
          100: '#faefe3',
          200: '#f4dcc7',
          300: '#eabf9c',
          400: '#df9b69',
          500: '#d68042',
          600: '#c46a35',
          700: '#a2562c',
          800: '#824627',
          900: '#6a3a22',
        },
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
