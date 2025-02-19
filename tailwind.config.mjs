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
    },
  },
  plugins: [],
};
