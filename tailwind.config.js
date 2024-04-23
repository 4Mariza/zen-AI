const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::webkit-scrollbar': {
          'display': 'none',
        },
      })
    })
  ]
}