/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
"./src/**/*.{js,jsx,ts,tsx}",
"./public/index.html",
],
theme: {
extend: {
fontFamily: {
// Adding 'Poppins' for headings and 'Inter' for body text
sans: ['Inter', 'sans-serif'], // Default sans-serif
display: ['Poppins', 'sans-serif'], // For headings, splash screen etc.
},
colors: {
// Define a slightly softer green and a complementary accent
'primary-green': {
DEFAULT: '#22C55E', // green-500
'dark': '#16A34A', // green-600
'light': '#D1FAE5', // green-100
},
'accent-yellow': {
DEFAULT: '#FBBF24', // amber-400
'light': '#FFFBEB', // amber-50
},
'neutral-bg': '#F9FAFB', // a soft off-white background
'text-dark': '#1F2937',  // A dark gray for main text
'text-medium': '#4B5563', // A medium gray for secondary text
},
},
},
plugins: [],
}