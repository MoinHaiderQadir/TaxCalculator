module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Set Poppins as default sans font
      },
    },
  },
  plugins: [require('daisyui')],

  daisyui: {
    themes: [
      {
        light: {
          primary: "#4CAF50", // Custom primary color
          secondary: "#FFC107", // Custom secondary color
          accent: "#03A9F4", // Accent color
          neutral: "#F5F5F5", // Background
          "base-100": "#FFFFFF", // Card background
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
          error: "#F44336",
        },
      },
    ],
  },
};
