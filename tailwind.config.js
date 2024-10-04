/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html","./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(.74,1.31,.11,1.23)', // Your custom cubic Bézier curve
      },
      boxShadow: {
        "nav" : "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
        "chart" : "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
        "custom": 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        "cards" : "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;",
        'left-to-right': '0px 0px 10px 0px rgba(0, 0, 0, 0.2), 10px 0px 20px 0px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage : {
        // rewards : 'url(../src/images/rewardsbg.webp);'
      },
    },
  },
  plugins: [],
}

