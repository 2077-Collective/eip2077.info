/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      p: {
        custom: 'clamp(1rem, 0.6522rem + 1.7391vw, 2rem)',
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
