import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['dev/**', 'dist/**', 'README.md'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
);
