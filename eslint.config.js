// @ts-expect-error - Next plugin is not typed
import nextPlugin from '@next/eslint-plugin-next';
import react from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import sort from 'eslint-plugin-sort';
import tailwind from 'eslint-plugin-tailwindcss';
import ts from 'typescript-eslint';

export default [
  ...ts.configs.recommended,
  ...tailwind.configs['flat/recommended'],
  react.configs.flat?.recommended,
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-hooks': pluginReactHooks,
      sort,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error', // or "error"
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      // React scope no longer necessary with new JSX transform.
      'react/react-in-jsx-scope': 'off',
      'sort/exports': 'off',
      'sort/import-members': 'off',
      'sort/imports': 'off',
      'sort/object-properties': 'error',
      'sort/string-enums': 'error',
      'sort/string-unions': 'error',
      'sort/type-properties': 'error',
    },
    settings: {
      react: { version: 'detect' },
      tailwindcss: {
        callees: ['cva', 'cn'],
        config: './tailwind.config.ts',
        ignoredKeys: ['compoundVariants', 'defaultVariants'],
        whitelist: ['dark', 'cycling-letter'],
      },
    },
  },
  // Ignore Tailwind custom classnames in logos
  {
    files: ['src/assets/logos/**/*.tsx'],
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
  },
  {
    name: 'Next Plugin',
    plugins: {
      '@next/next': nextPlugin,
      rules: {
        ...nextPlugin.configs.recommended.rules,
        ...nextPlugin.configs['core-web-vitals'].rules,
      },
    },
  },
];
