/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff0000',
        text: '#08090a',
        paragraph: '#546285',
        heading: '#191B22',
        alice: '#fff5f5', // F5FBFC
        secondary: '#f7f7f7',
        accent: '#b30000',
      },
      backgroundImage: {
        'button-wave': 'url("../public/icon/button-wave.svg")',
        'banner-wave': 'url("../public/icon/banner-wave.svg")',
        'content-pattern': 'url("../public/icon/content-pattern.svg")',
        'bg-content': 'url("../public/icon/bg-content.svg")',
        'drawn-arrow': 'url("../public/icon/drawn-arrow.svg")',
        'pattern-01': 'url("../public/icon/pattern-01.svg")',
        'pattern-footer': 'url("../public/icon/pattern-footer.svg")',
        'group-photo': 'url("../public/img/group-photo.jpg")',
        yumyum: 'url("../public/icon/yumyum.png")',
      },
      screens: {
        sm: '576px',
      },
    },
  },
  plugins: [],
};
