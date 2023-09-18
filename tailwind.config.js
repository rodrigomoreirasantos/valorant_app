/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        red500: "#FD4556",
        red700: "#BD3944",
        red900: "#53212B",
        light: "#FFFBF5",
        dark: "#000000",
      },
      textColor: {
        light: "#FFFBF5",
        dark: "#000000",
      },
    },
  },
  plugins: [],
};
