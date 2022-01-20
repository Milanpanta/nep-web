module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      supportCard: "0px 29.6346px 78.5962px rgba(74, 74, 74, 0.5)",
      powerCard: "0px 4px 14px rgba(0, 0, 0, 0.1)",
      brand: "0px 7px 22px rgba(0, 0, 0, 0.05)",
    },
    fontSize: {
      h1: ["76px", "104px"],
      h2: ["61px", "72px"],
      h3: ["49px", "64px"],
    },
    fontFamily: {
      poppins: "Poppins, sans-serif",
      sora: "Sora, sans-serif",
      inter: "Inter, sans-serif",
    },
    extend: {
      colors: {
        "010311": "#010311",
        "333333": "#333333",
        "01052D": "#01052D",
        "4E7DD9": "#4E7DD9",
        "9A9A9A": "#9A9A9A",
        "b0c4db": "#b0c4db",
        "3C69FE": "#3C69FE",
        "E86BFB": "#E86BFB",
        "4289F2": "#4289F2",
        "FA5C2F": "#FA5C2F",
        "A44ED9": "#A44ED9",
        "676767": "#676767",
        "F9FAFB": "#F9FAFB",
        "FF9029": "#FF9029",
        "FF006B": "#FF006B",
        "F1F3F6": "#F1F3F6",
        "0E1028": "#0E1028",
      },
      lineHeight: {
        9.5: "2.375rem",
      },
      padding: {
        15: "3.75rem",
        11.5: "2.87rem",
      },
      margin: {
        15: "3.75rem",
        11.5: "2.87rem",
      },
    },
  },
  plugins: [],
};
