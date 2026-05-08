/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#00485A',
        'dash-bg': '#E6EDEF',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        card: '0px 0px 2px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
