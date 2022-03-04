const typography = require('@tailwindcss/typography');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    darkMode: 'media',
    screen: {
      sx: '350px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      laptop: '1200px',
      xl: '1440px'
    },
    extend: {
      backgroundImage: {}
    }
  },
  plugins: [typography]
};
