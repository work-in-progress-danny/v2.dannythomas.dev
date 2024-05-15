import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        '100': '25rem',   // 400px
        '110': '27.5rem', // 440px
        '120': '30rem',   // 480px
        '130': '32.5rem', // 520px
        '140': '35rem',   // 560px
        '150': '37.5rem', // 600px
        '160': '40rem',   // 640px
        '170': '42.5rem', // 680px
        '180': '45rem',   // 720px
        '190': '47.5rem', // 760px
        '200': '50rem',   // 800px
      },
    },
  },
  plugins: [],
};
export default config;
