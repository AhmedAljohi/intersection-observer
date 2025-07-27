const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addVariant, addUtilities }) {
  addVariant('in-view', '&.in-view')
  addUtilities({
    '.fade-in': {
      opacity: '0',
      transition: 'opacity 0.4s ease-in-out',
    },
    '.fade-in.in-view': {
      opacity: '1',
    },
  })
})