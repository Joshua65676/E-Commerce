import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ['Kumbh Sans', 'sans-serif'],
      },
      colors: {
        Orange: 'hsl(26, 100%, 55%)',
        PaleOrange: 'hsl(25, 100%, 94%)',
        DarkBlue: 'hsl(220, 13%, 13%)',
        Grayishblue: 'hsl(219, 9%, 45%)',
        GrayishBlue: 'hsl(220, 14%, 75%)',
        LightGrayishBlue: 'hsl(223, 64%, 98%)',
        White: 'hsl(0, 0%, 100%)',
        Black : 'hsl(0, 0%, 0%)'
      }
    },
  },
  plugins: [],
};
export default config;
