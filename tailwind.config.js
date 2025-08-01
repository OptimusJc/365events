module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  content: ["./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}"],
  presets: [require("@relume_io/relume-tailwind")],
  variants: {
    extend: {},
  },
  plugins: [],
};
