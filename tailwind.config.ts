import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      smallest: "420px",
      mobile: "480px",
      minMiddle: "500px",
      middleM: "590px",
      // Brave responsive design mode
      mobileS: "300px",
      mobileM: "375px",
      mobileL: "450px",
      tablet: "768px",
      laptop: "1024px",
      laptopM: "1280px",
      laptopL: "1440px",
    },
    extend: {
      colors: {
        "main-blue": "#2E5BFF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
