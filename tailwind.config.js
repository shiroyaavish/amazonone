export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f3fcf7",
          100: "#e6faf0",
          500: "#00c98d",
          700: "#0aa86f"
        }
      },
      borderRadius: {
        xl2: "1rem"
      }
    }
  },
  plugins: []
}
