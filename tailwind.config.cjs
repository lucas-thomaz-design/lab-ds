/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize:{
      xs: 14,
      md: 16,
      lg: 18,
      xl: 20,
      xl: 24,
      xxl: 32,
    },

    colors: {
      transparent: 'transparent',

      black: '#000',
      black: '#fff',

      //Dark
      slate: {
        900: '#0F172A',
        800: '#1E293B',
        700: '#334155',
        500: '#64748B',
        200: '#E2E8F0',
        50:  '#F8FAFC', 
      },

      //Accent
      sky: {
        500: '#0EA5E9',
        400: '#38BDF8',
      },
      
    },
    
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
