# React + Vite

# steps to install tailwind css 
step 1. npm install -D tailwindcss postcss autoprefixer
npm install -D tailwindcss@3.4.17
npx tailwindcss init -p

step 2. Add the paths to all of your template files in your tailwind.config.js file
  /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

step 3. Add the Tailwind directives to your CSS ie in ./src/index.css file.
@tailwind base;
@tailwind components;
@tailwind utilities;
