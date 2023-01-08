/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ['./*.html'],
  theme: {
    extend: {
      spacing: {
        "big": "48px",
      },
      screens: {
        "sm": "480px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
    },
  },
  
  fontFamily: {
    heading: ['Playfair Display', 'serif'],
    body: ['Poppins', 'sans-serif']
  },

  plugins: [],
}
}