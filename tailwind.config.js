/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            typography: {
              DEFAULT: {
                css: {
                  '--tw-prose-body': 'transparent',
                }
              }
            },
            textShadow: {
              stroke: '0 0 0 #ffffff',
            },
          },          
    },
    plugins: [],
  };
  