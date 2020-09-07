module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['markdown', 'react', 'babel', '@typescript-eslint', 'react-hooks'],
  rules: {
    'dot-notation': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-wrap-multilines': 0,
    // Cannot use `Component.displayName` pattern on class components in TS.
    'react/static-property-placement': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-indent': 0,
    'react/jsx-filename-extension': 0,
    'react/state-in-constructor': 0,
    'react/destructuring-assignment': 0, // TODO: remove later
    'react/require-default-props': 0,
    'react/sort-comp': 0,
    'react/display-name': 0,
    'react/no-find-dom-node': 0,
    'react/no-unused-prop-types': 0,
    'react/default-props-match-prop-types': 0,
    'react-hooks/rules-of-hooks': 2, // Checks rules of Hooks

    'import/extensions': 0,
    'import/no-cycle': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'site/**',
          'tests/**',
          'scripts/**',
          '**/*.test.js',
          '**/__tests__/*',
          '*.config.js',
          '**/*.md',
        ],
      },
    ],
    // label-has-for has been deprecated
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
    'jsx-a11y/label-has-for': 0,

    'consistent-return': 0, // TODO: remove later
    'no-param-reassign': 0, // TODO: remove later
    'no-underscore-dangle': 0,
    // for (let i = 0; i < len; i++)
    'no-plusplus': 0,
    // https://eslint.org/docs/rules/no-continue
    // labeledLoop is conflicted with `eslint . --fix`
    'no-continue': 0,
    // ban this for Number.isNaN needs polyfill
    'no-restricted-globals': 0,
    'max-classes-per-file': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
  },
  overrides: [{
    files: ['**/*.ts', '**/*.tsx'],
    parserOptions: {
      // typescript-eslint specific options
      warnOnUnsupportedTypeScriptVersion: true,
    },
    rules: {
      'no-unused-vars': 0,
      '@typescript-eslint/camelcase': 0,
      '@typescript-eslint/explicit-function-return-type': ['off'],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      // No need to use prop types on TS files.
      'react/prop-types': 0,
    },
  }, ],
};