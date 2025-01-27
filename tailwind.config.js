 /**@type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          title: ['"Pacifico"', 'cursive']
        }
      },
    },
    safelist: [
      'font-title',
    ],
    plugins: [],
  };
  