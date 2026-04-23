/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0f2a4a',
          900: '#0a1f38',
          800: '#0f2a4a',
          700: '#1e3a5f',
          600: '#2b4a78',
          500: '#3d6098',
          100: '#dbe4f2',
          50: '#eef2f8',
        },
        paper: {
          DEFAULT: '#f1f3f7',
          soft: '#f6f7fa',
          deep: '#e8ecf2',
        },
      },
      container: {
        center: true,
        padding: '1.25rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1120px',
        },
      },
    },
  },
  plugins: [],
};
