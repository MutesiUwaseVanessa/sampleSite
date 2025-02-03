/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Home.html"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 1px 8px rgba(0, 0, 0, 0.1)',
        'custom1': '0 1px 8px rgba(0, 0, 0, 0.1)',
      },
      transitionProperty: {
        'custom': 'background-color, transform',
        'custom1': 'background-color',
        'custom2': 'background',
      },
      transitionDuration: {
        'custom': '0.2s, 0.3s',
        'custom1': '0.3s',
        'custom2': '0.3s',
      },
      transitionTimingFunction: {
        'custom': 'ease-in-out',
        'custom1': 'ease-in-out',
        'custom2': 'ease-in-out',
      },
    },
  },
  plugins: [],
}

