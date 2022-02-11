module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['next', 'stylelint-prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'stylelint-prettier'],
  rules: {
    'react/react-in-jsx-scope': "off",
    'react/no-unescaped-entities': 0,
    '@next/next/no-img-element': "off",
    'prettier/prettier': 1,
  },
}
