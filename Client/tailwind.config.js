/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ghostwhite: "#edeff8",
        white: "#fff",
        black: "#000",
        "default-black": "#191919",
        "special-bg2": "rgba(255, 255, 255, 0.7)",
        "primary-color": "#299d91",
        gainsboro: "rgba(217, 217, 217, 0.82)",
        "gray-05": "#e8e8e8",
        "gray-03": "#9f9f9f",
        pink: "#eec0c0",
      },
      spacing: {},
      fontFamily: {
        "regular-16-24": "Inter",
      },
      borderRadius: {
        sm: "14px",
        xl: "20px",
        "29xl": "48px",
        "159xl": "178px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      xs: "12px",
      lgi: "19px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
