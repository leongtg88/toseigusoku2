// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue,svelte}"],
  theme: { extend: {
    screens: {
      'cr-3xl': {'min': '1536px', 'max': '1730px'},
      'cr-4xl': {'min': '1731px', 'max': '1920px'},
  } },
  plugins: [],
}
}