/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image":
          "url('https://images.pexels.com/photos/5082981/pexels-photo-5082981.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
