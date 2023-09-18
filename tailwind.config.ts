import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        colorPrimary: "#EDB218",
        colorSecondary: "#757575",
        'whatsapp': '#25d366',
      },
    },
  },
  plugins: [],
}
export default config;
