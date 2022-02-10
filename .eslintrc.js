module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['next'],
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
    'react/react-in-jsx-scope': false,
    'react/no-unescaped-entities': false,
    '@next/next/no-page-custom-font': false,
    '@next/next/no-img-element': false,
    'prettier/prettier': true,
  },
}
