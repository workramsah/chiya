// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'infinite-scroll-right': 'scrollRight 20s linear infinite',
        'infinite-scroll-left': 'scrollLeft 20s linear infinite',
      },
      keyframes: {
        scrollRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
