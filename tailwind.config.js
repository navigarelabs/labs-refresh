/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.html',
    './src/*.js'
  ],
  theme: {
    fontFamily:{
      'sans' : ['Lato','Helvetica Neue','Arial','Helvetica','sans-serif']
    },
    extend: {
      colors: {
        'nvg-green-light-shade':'#89d2ba',
        'nvg-green': '#44B28D',
        'nvg-blue': '#162449',
        'nvg-gold': '#DAB157',
      },
    },
  },
  plugins: [],
}

