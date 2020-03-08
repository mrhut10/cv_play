const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      screens: {
        xxsm: '380px',
        xsm: '430px'
      },
      minWidth: {
        '1/5':'20%',
        '1/4':'25%',
        '1/2':'50%',
        '3/4':'75%'
      },
      colors: {
        base: colors.red,
        base2: colors.indigo
      },
      borderRadius: {
        heavy: '50%',
        light: '10%',
      }
    },
  },
  variants: {},
  plugins: []
}
