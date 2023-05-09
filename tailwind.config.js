/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
    },
    colors: {
      /* PRIMARY COLORS */
      "p-marine-blue": "hsl(213, 96%, 18%)",
      "p-purplish-blue": "hsl(243, 100%, 62%)",
      "p-pastel-blue": "hsl(228, 100%, 84%)",
      "p-light-blue": "hsl(206, 94%, 87%)",
      "p-strawberry-red": "hsl(354, 84%, 57%)",

      /* NEUTRAL COLORS */
      "n-cool-gray": "hsl(231, 11%, 63%)",
      "n-light-gray": "hsl(229, 24%, 87%)",
      "n-magnolia": "hsl(217, 100%, 97%)",
      "n-alabaster": "hsl(231, 100%, 99%)",
      "n-white": "hsl(0, 0%, 100%)",
    },
  },
  plugins: [],
};
