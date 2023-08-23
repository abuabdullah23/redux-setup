module.exports = {
  env: {
    browser: true, es2020: true, es2022: true, "node": true,
    "amd": true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
  
  // Method 2:
  "no-unused-vars": ["warn", { "varsIgnorePattern": "VARIABLE_NAME"}]
}
