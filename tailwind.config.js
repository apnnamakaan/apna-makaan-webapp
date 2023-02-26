/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {

    screens: {
      'mob': { 'min': '640px', 'max': '1023px' },
      'tab': { 'min': '1024px', 'max': '1535px' },
      'pc': { 'min': '1536px' },

    },

    extend: {
      backgroundImage: {
        'signin': "url('/src/assets/images/signinbg.jpg')",
        'signup': "url('/src/assets/images/signupbg.jpg')",
      },
    },
  },
  plugins: [],
}
