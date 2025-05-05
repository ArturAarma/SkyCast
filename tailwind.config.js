module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        softPulse: 'softPulse 4s ease-in-out infinite',
        hueRotateSubtle: 'hueRotateSubtle 5s ease-in-out infinite',
        gradientShift: 'gradientShift 8s ease-in-out infinite',
      },
      keyframes: {
        softPulse: {
          '0%, 100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
          '50%': {
            opacity: 0.9,
            transform: 'scale(1.01)',
          },
        },
        hueRotateSubtle: {
          '0%, 100%': { filter: 'hue-rotate(10deg)' },
          '50%': { filter: 'hue-rotate(15deg)' },
        },
        gradientShift: {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
      },
    },
  },
  plugins: [
    // Add your Tailwind plugins here if needed
  ],
  darkMode: "class",
};
