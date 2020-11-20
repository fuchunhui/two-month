module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'semi': ['error', 'always'],
    // allow paren-less arrow functions
    'arrow-parens': ['error', 'as-needed'],
    // enforce consistent linebreak style for operators
    'operator-linebreak': ['error', 'before'],
    'space-before-function-paren': ['error', {
        'anonymous': 'always',
        'named': 'never',
        'asyncArrow': 'always'
    }],
    'no-template-curly-in-string': 'error',
    'comma-dangle': ['error', 'never'],
    // require newline at the end of files
    'eol-last': 'warn',
    // require space before blocks 
    'space-before-blocks': ['error', 'always'],
    // enforce consistent spacing before and after keywords
    'keyword-spacing': 'error',
    // enforce consistent spacing between keys and values in object literal properties
    'key-spacing': 'error',
    // require or disallow spacing between function identifiers and their invocations 
    'no-spaced-func': ['error', 'never'],
    // enforce consistent spacing before and after commas
    'comma-spacing': ['error', {
        'before': false,
        'after': true
    }],
    '@typescript-eslint/no-inferrable-types': [
      'off',
      'ignore-params',
      'ignore-properties'
    ]
  }
};
