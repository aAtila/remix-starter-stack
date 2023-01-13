/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "prettier",
    "plugin:tailwindcss/recommended",
    "plugin:remix-react-routes/recommended",
  ],
  // uncomment in case we need to custom tweak the options
  // "rules": {
  //   "tailwindcss/classnames-order": "warn",
  //   "tailwindcss/enforces-negative-arbitrary-values": "warn",
  //   "tailwindcss/enforces-shorthand": "warn",
  //   "tailwindcss/migration-from-tailwind-2": "warn",
  //   "tailwindcss/no-arbitrary-value": "off",
  //   "tailwindcss/no-custom-classname": "warn",
  //   "tailwindcss/no-contradicting-classname": "error"
  // }
};
