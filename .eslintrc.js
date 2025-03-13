module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['flowtype', 'react'],
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react']
    },
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true
  }
}; 