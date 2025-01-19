const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {},
    screens: {
      "sm": "640px",  // Petits appareils (smartphones)
      "md": "768px",  // Tablettes
      "lg": "1024px", // Ordinateurs portables
      "xl": "1280px", // Grands écrans
      "2xl": "1536px", // Très grands écrans
    },
  },
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};
