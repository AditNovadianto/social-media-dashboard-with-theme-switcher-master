module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        "Lime-Green": "hsl(163, 72%, 41%)",
        "Bright-Red": "hsl(356, 69%, 56%)",
        Facebook: "hsl(208, 92%, 53%)",
        Twitter: "hsl(203, 89%, 53%)",
        Youtube: "hsl(348, 97%, 39%)",
        Toggle: "hsl(230, 22%, 74%)",
        "Very-Dark-Blue-(BG)": "hsl(230, 17%, 14%)",
        "Very-Dark-Blue-(Top-BG-Pattern)": "hsl(232, 19%, 15%)",
        "Dark-Desatured-Blue-(Card-BG)": "hsl(228, 28%, 20%)",
        "Desatured-Blue-(Text)": "hsl(228, 34%, 66%)",
        White: "hsl(0, 0%, 100%)",
        "Very-Pale-Blue-(Top-BG-Pattern)": "hsl(225, 100%, 98%)",
        "Light-Grayish-Blue-(Card-BG)": "hsl(227, 47%, 96%)",
        "Dark-Grayish-Blue-(Text)": "hsl(228, 12%, 44%)",
        "Very-Dark-Blue-(Text)": "hsl(230, 17%, 14%)",
      },
      fontFamily: {
        Inter: "'Inter', sans-serif",
      },
      backgroundImage: {
        "Linear-Gradient-Instagram":
          "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
        "Linear-Gradient-Toggle":
          "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
      },
      grid: {
        template1: "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
