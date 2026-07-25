import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E0E10",
        panel: "#17171A",
        rail: "#232326",
        amber: "#F2A649",
        ember: "#D9663B",
        bone: "#EDE9E1",
        mute: "#8B8B93",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
