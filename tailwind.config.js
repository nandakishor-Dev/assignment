/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        lato: ["Lato"],
        garamond: ["Garamond"],
        nunito:["Nunito"],
        figtree:["Figtree"]
      },
      colors: {
        custom: '#f8faff',
        tablebg:'#F5F5F5'
      },
    },
  },
  plugins: [],
};
