/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D052C',
        textGradient: 'linear-gradient(23deg, rgba(255, 255, 255, 0.30) 32.60%, rgba(255, 255, 255, 0.00) 100%)',
        btnGradient: 'linear-gradient(135deg, #5CFFCE 0%, #00848C 66.67%)',
        bgGradient: 'linear-gradient(135deg, rgba(92, 255, 206, 0.30) 0%, rgba(0, 132, 140, 0.30) 66.67%)',
        textColor: {
          100: '#5CFFCE',
          200: '#D9D9D9',
        }
      }
    },
  },
  plugins: [],
}






