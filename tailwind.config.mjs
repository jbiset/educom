/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        educom: {
          navy: "#004171",
          lime: "#96AD2F",
          mist: "#E9EEF3",
          ink: "#0B1B2B",
        },
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        body: ["Source Sans 3", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px -30px rgba(0, 65, 113, 0.45)",
      },
    },
  },
  plugins: [],
};
