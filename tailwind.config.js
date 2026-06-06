export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 40px rgba(0, 217, 255, 0.18)",
      },
      colors: {
        brand: {
          cyan: "#00D9FF",
          purple: "#8B5CFF",
          magenta: "#FF2BD6",
          green: "#25D366",
        },
      },
      fontFamily: {
        heading: ["Orbitron", "sans-serif"],
        body: ["Rajdhani", "Inter", "sans-serif"],
        button: ["Oxanium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
