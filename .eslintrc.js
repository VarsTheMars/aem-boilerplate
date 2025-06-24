module.exports = {
  root: true,
  extends: 'airbnb-base',
  env: {
    browser: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: true,
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    'import/extensions': ['error', { js: 'always' }], // require js file extensions in imports
    'linebreak-style': ['error', 'unix'], // enforce unix linebreaks
    'no-param-reassign': [2, { props: false }], // allow modifying properties of param
    indent: ['error', 2], // enforce 2 spaces indentation
    'eol-last': ['error', 'always'], // enforce newline at end of files
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }], // limit empty lines
  },
};
