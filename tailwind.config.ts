
import type { Config } from 'tailwindcss'
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: { colors: { brand: { navy: "#031B5E" } }, boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.08)" } },
    fontFamily: { sans: ["Inter","system-ui","Segoe UI","Roboto","Helvetica","Arial","sans-serif"] }
  },
  plugins: []
}
export default config
