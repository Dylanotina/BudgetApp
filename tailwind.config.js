module.exports = {
  mode : 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors :{
      'blue-light' : '#0094FA',
      'blue-dark' : '#34425A',
      'white' : '#F4F9FF',
      'black' : '#282C34',
      'grey' : '#3F4756'
    }
      
    ,
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
