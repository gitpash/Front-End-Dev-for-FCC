module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/imports-first': 0,
    'prettier/prettier': 2,
    'react/prop-types': 0,
    'react/destructuring-assignment': 'off',
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],

    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/require-extension': 0,
    'react/jsx-filename-extension': 0,
  },
};
