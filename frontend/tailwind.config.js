/** @type {import('tailwindcss').Config} */
export default {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
