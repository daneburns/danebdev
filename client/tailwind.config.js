module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fefefd",
          100: "#fdfcfa",
          200: "#fbf8f3",
          300: "#f9f4eb",
          400: "#f4ecdd",
          500: "#EFE4CE",
          600: "#d7cdb9",
          700: "#b3ab9b",
          800: "#8f897c",
          900: "#757065",
        },
        leather: {
          50: "#fdfbf9",
          100: "#faf7f2",
          200: "#f3eadf",
          300: "#ebdecc",
          400: "#dcc5a6",
          500: "#CDAC80",
          600: "#b99b73",
          700: "#9a8160",
          800: "#7b674d",
          900: "#64543f",
        },
        couch: {
          50: "#fdfdfd",
          100: "#fafcfb",
          200: "#f3f6f5",
          300: "#ecf1ef",
          400: "#dee7e4",
          500: "#D0DCD8",
          600: "#bbc6c2",
          700: "#9ca5a2",
          800: "#7d8482",
          900: "#666c6a",
        },
        plant: {
          50: "#f6f6f4",
          100: "#ecede9",
          200: "#d0d1c8",
          300: "#b3b5a7",
          400: "#7b7e64",
          500: "#424622",
          600: "#3b3f1f",
          700: "#32351a",
          800: "#282a14",
          900: "#202211",
        },
        dark: {
          50: "#f4f4f5",
          100: "#e9e9ea",
          200: "#c8c8cc",
          300: "#a7a7ad",
          400: "#66656f",
          500: "#242331",
          600: "#20202c",
          700: "#1b1a25",
          800: "#16151d",
          900: "#121118",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};