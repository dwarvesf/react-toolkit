module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
      },
    },
    'import/extensions': ['.js', '.ts', '.jsx', '.tsx'],
  },
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'eslint-config-airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  plugins: [
    'react-hooks',
    '@typescript-eslint/eslint-plugin',
    'testing-library',
  ],
  rules: {
    'no-param-reassign': 'off',
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
    'jsx-a11y/no-autofocus': 'off',
    'no-bitwise': 'off',
    'consistent-return': 'off',
    'no-restricted-syntax': 'off',
    'no-continue': 'off',
    'prefer-destructuring': ['warn', { object: true, array: false }],
    'operator-assignment': 'off',
    'no-plusplus': 'off',
    'spaced-comment': 'off',
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'import/no-named-as-default': 'off',
    'prefer-object-spread': 'off',
    'no-alert': 'off',
    'no-redeclare': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-shadow': 'off',

    // TypeScript
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',

    // React
    'react/forbid-prop-types': 'off',
    'guard-for-in': 'off',
    'react/no-danger': 'off',
    'react/button-has-type': 'off',
    'react/no-unescaped-entities': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',
    'react/sort-prop-types': 'error',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'error',
  },
}
