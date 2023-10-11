const eslint = "eslint --fix";
const prettier = "prettier -w";

module.exports = {
  "*.{js,cjs,mjs,jsx,ts,tsx}": [eslint, prettier],
  "*.{md,html,css,json,yml,yaml}": prettier,
};
