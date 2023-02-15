/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'signin': "url('/src/assets/images/signinbg.jpg')",
        'signup': "url('/src/assets/images/signupbg.jpg')",
      },
    },
  },
  plugins: [],
}
