module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
    "./src/components/**/*.{js,vue}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#ecf0f1",
      },
      boxShadow: {
        navbar: "0 0 8px 0px rgba(60, 80, 80, .8)",
      },
    },
  },
  plugins: [],
};
