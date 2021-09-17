module.exports = {
  extends: [
    'airbnb',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    // === NextJS overriden rules ===
    '@next/next/no-img-element': 'off',

    // === React rules ===

    // Enforce a defaultProps definition for every prop that is not a required prop
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    'react/require-default-props': [
      'error',
      { ignoreFunctionalComponents: true },
    ],

    // Enforces where React component static properties should be positioned.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
    'react/static-property-placement': ['error', 'static public field'],

    // Disallow JSX props spreading
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    'react/jsx-props-no-spreading': 'warn',

    // only .jsx files may have JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],

    // === import extension overriden rules ===
    'import/extensions': [
      'error',
      {
        ts: 'never',
        tsx: 'never',
        jsx: 'never',
        css: 'always',
        json: 'always',
      },
    ],

    // When there is only a single export from a module, prefer using default export over named export.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',

    // === default overriden rules ===

    // Require braces in arrow function body
    // https://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': 'off',

    // disallow the unary operators ++ and --
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'off',

    // Disallow Early Use
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': 'off',
  },

  ignorePatterns: ['dist/'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/static-property-placement': ['error', 'property assignment'],
      },
    },
    {
      files: [
        'setup_tests.js',
        '*.test.js',
        '*.test.ts',
        '**/__mocks__/*.js',
        '**/__mocks__/*.ts',
      ],
      env: { jest: true },
    },
  ],
};
