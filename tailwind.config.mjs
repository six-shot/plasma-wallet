/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sfpro_display_bold: ["var(--font-sfpro-display-bold)"],
        sfpro_display_medium: ["var(--font-sfpro-display-medium)"],
        sfpro_display_regular: ["var(--font-sfpro-display-regular)"],
      },
      keyframes: {
        ripple: {
          "0%": { transform: "scale(0.3)", opacity: 0 },
          "5%": { transform: "scale(0.3)", opacity: 1 },
          "50%": { transform: "scale(1)", opacity: 0.5 },
          "100%": { transform: "scale(1.5)", opacity: 0 },
        },
        softBlink: {
          "0%": { opacity: 1 },
          "50%": { opacity: 0.5 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "ripple-1": "ripple 2s linear infinite",
        "ripple-2": "ripple 2s linear infinite 0.4s",
        "ripple-3": "ripple 2s linear infinite 0.8s",
        "soft-blink": "softBlink 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
