/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "sans" : "Quicksand"
    },
    extend: {
      colors: {
        "orange-primary" : "#f9a109",
        "sand" : "#FFF0DE",
        "wine" : "#80485B",
        "contrast" : "#fafafe"
      },
    },
  },
  plugins: [],
}

