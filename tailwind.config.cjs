const settingsScreens = require("./tailwind.settings.screens");
const settingsFontSizes = require("./tailwind.settings.fontSizes");
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: settingsScreens,
    fontSize: settingsFontSizes,
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
        xl: '0 12px 24px var(--tw-shadow-color)',
        '2xl': '0 16px 32px var(--tw-shadow-color)',
        '3xl': '0 24px 48px var(--tw-shadow-color)',
        'xs-neon': '0 0 2px #fff, 0 0 5px #fff, 0 0 10px var(--tw-shadow-color), 0 0 20px var(--tw-shadow-color), 0 0 25px var(--tw-shadow-color), 0 0 32px var(--tw-shadow-color)',
        'sm-neon': '0 0 1px #fff, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px var(--tw-shadow-color), 0 0 40px var(--tw-shadow-color), 0 0 45px var(--tw-shadow-color), 0 0 50px var(--tw-shadow-color), 0 0 75px var(--tw-shadow-color)',
        neon: '0 0 2px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px var(--tw-shadow-color), 0 0 80px var(--tw-shadow-color), 0 0 90px var(--tw-shadow-color), 0 0 100px var(--tw-shadow-color), 0 0 150px var(--tw-shadow-color)',
      },
      colors: {
        primary: "#2B6646",
        contrast: "#fff",
        secondary: "#CCAA00",
        sub: "#FF9C00",
        neutral: "#64A1FE",
        bgbase: "#000",
        text: "#fff",
        shine: '#7DF9FF'
      },
      animation: {
        ellipsis: 'ellipsis 1.25s infinite',
        'spin-slow': 'spin 2s linear infinite',
        fade: 'opacity 150ms linear',
      },
      keyframes: {
        ellipsis: {
          '0%': { content: '"."' },
          '33%': { content: '".."' },
          '66%': { content: '"..."' },
        },
        opacity: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        },
      },
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};
