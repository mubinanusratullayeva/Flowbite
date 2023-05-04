/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {},
    container:{
      center: true,
    },
    backgroundImage: {
      'hero-image': "url('./dist/bg-imgs/phone-mockup.png')"
    }
  },
  plugins: [],
}

