module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui", "Inter"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ["Open Sans"],
    },
    extend: {
      height: {
        500: "500px",
        84: "22rem"
      }
    },
    screens: {
      // 'xxl': { 'max': '3000px' },
      // => @media (max-width: 1279px) { ... }
      xl: { max: "3000px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1300px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  variants: {
    extend: {},
    variants: {
      transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
    },
  },
  plugins: [],
};
