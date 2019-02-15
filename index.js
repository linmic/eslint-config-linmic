module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:testcafe/recommended'],
  plugins: ['flowtype', 'security', 'jest', 'testcafe'],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
    'flowtype': {
      'onlyFilesWithFlowAnnotation': false
    },
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
    'jsx-a11y/aria-role': [2, { ignoreNonDOM: true }],
    'flowtype/define-flow-type': 1,
    'flowtype/use-flow-type': 1,
    'import/no-unresolved': [2, { caseSensitive: false }],
    'global-require': 0,
    'spaced-comment': 0,
    'react/prop-types': 0,
    'max-len': 0,
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: ['block-like'] },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'any', prev: ['case', 'default'], next: 'block-like' },
      { blankLine: 'any', prev: 'block-like', next: ['case', 'default'] },
    ],
    'no-param-reassign': ['error', { props: false }],
    'eol-last': ['error', 'always'],
  },
  globals: {
    SyntheticEvent: true,
  },
  env: {
    'browser': true,
    'node': true,
    'jest/globals': true,
  },
};
