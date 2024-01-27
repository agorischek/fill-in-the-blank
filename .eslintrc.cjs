module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['prettier'],
  extends: [
    'eslint:recommended',
    'plugin:markdown/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['.eslintrc.{js,cjs}'],
      env: {
        node: true,
      },
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['*.md'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
};
