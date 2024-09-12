/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        turquesa: '#0F7D87',
        grisOscuro: '#1a1a1a',
        verdeGradiente: '#86B22C',
        azulGradiente: '#0F7D87'
      },
      maxWidth: {
        square: '1400px',
      },
      fontFamily: {
        okta: ['Okta Neue', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
