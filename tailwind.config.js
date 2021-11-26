module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "Roboto, Arial, sans-serif",
      serif: "Merriweather, Georgia, serif",
    },
    extend: {
      colors: {
        primary: "#672E9B",
        gray: {
          300: "#f0f0f0",
        },
      },
    },
    fontSize: {
      xs: ".5rem",
      sm: ".75rem",
      tiny: ".85rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": ["2.25rem","2.5rem"],
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    maxWidth: {
      '10p': '10%',
      '20p': '20%',
      '30p': '30%',
      '40p': '40%',
      '50p': '50%',
      '60p': '60%',
      '70p': '70%',
      '80p': '80%',
      '90p': '90%',
      '100p': '100%',
     },
  },
  variants: {},
  plugins: [],
}
