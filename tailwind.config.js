/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(0 0% 3%)', // #030303
        foreground: 'hsl(0 0% 98%)', // #fafafa
        card: 'hsl(0 0% 7%)', // #121212
        'card-foreground': 'hsl(0 0% 95%)',
        popover: 'hsl(0 0% 15%)',
        'popover-foreground': 'hsl(0 0% 95%)',
        primary: 'hsl(0 100% 50%)', // Red
        'primary-foreground': 'hsl(0 0% 98%)',
        secondary: 'hsl(0 0% 15%)',
        'secondary-foreground': 'hsl(0 0% 98%)',
        muted: 'hsl(0 0% 25%)',
        'muted-foreground': 'hsl(0 0% 63%)',
        accent: 'hsl(0 0% 15%)',
        'accent-foreground': 'hsl(0 0% 98%)',
        destructive: 'hsl(0 63% 31%)',
        'destructive-foreground': 'hsl(0 0% 98%)',
        border: 'hsl(0 0% 15%)',
        input: 'hsl(0 0% 15%)',
        ring: 'hsl(0 100% 50%)',
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      borderRadius: {
        lg: `0.5rem`,
        md: `calc(0.5rem - 2px)`,
        sm: `calc(0.5rem - 4px)`,
      },
    },
  },
  plugins: [],
}
