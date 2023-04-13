/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    {
      pattern: /^(.*?)/,
    },
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  plugins: [],
};
