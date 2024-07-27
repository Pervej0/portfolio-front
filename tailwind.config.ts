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
    },
    fontFamily: {
      mono: ["ui-monospace", "SFMono-Regular"],
      openSansExtraBold: ["OpenSans ExtraBold"],
      openSansBold: ["OpenSans Bold"],
      openSansMedium: ["OpenSans Medium"],
      openSansRegular: ["OpenSans Regular"],
      openSansLight: ["OpenSans Light"],
    },
  },
  plugins: [],
};
export default config;
