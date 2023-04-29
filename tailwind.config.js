module.exports = {
    content: ["docs/**/*.html", "**/*.html", , "**/*.jsx"],
  
    theme: {
      extend: {},
    },
    variants: {
      backgroundColor: ["active", "even", "odd", "responsive"],
    },
    plugins: [require("@tailwindcss/forms"), require("tailwindcss")],
  };
  