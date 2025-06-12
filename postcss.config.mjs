const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      screens: {
        '4k': '3840px', // Applies for screens ≥ 3840px (4K)
        '8k': '7680px', // Applies for screens ≥ 7680px (8K)
      },
    },
  },
};

export default config;
