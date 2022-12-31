module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"', "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
