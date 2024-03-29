module.exports = {
  enable: true,
  mode: 'jit',
  darkMode: false, 
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],// or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5', 
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
