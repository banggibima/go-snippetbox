/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../html/**/*.tmpl"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
