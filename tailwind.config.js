module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': 'Roboto, Arial, sans-serif',
      'serif': 'Merriweather, Georgia, serif'
    },
    extend: {
      colors: {
        'primary': '#672E9B',
        gray: {
          300: '#f0f0f0',
        }
      }
    },
  },
  variants: {},
  plugins: [],
}