const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    enabled: true,
    content: [
      './apps/shophub-test/src/**/*.{html,js,ts}',
      './libs/ui/src/**/*.{html,js,ts}'
    ],
  },
  theme: {
    colors: {
      'orange': colors.orange,
      'yellow': colors.yellow,
      'red': colors.red,
    },
    extend: {},
  },
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}
