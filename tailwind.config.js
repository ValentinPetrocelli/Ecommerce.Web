const { tailwindConfig } = require('@storefront-ui/react/tailwind-config');

module.exports = {
  presets: [tailwindConfig],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@storefront-ui/react/**/*.{js,mjs}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};