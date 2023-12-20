/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        borderClr:"#252222",
        borderClrL:"#dcdcdc",
        dark:"#0e0e0e",
        light:"#f1f1f1",
        placeholderClr:"#757564",
        placeholderClrL:"#A2A2A2",
      }
    },
  },
  plugins: [],
}
