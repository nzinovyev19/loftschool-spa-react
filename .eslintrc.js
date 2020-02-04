const path = require('path');

module.exports = {
  extends: [
    "airbnb",
    "react-app",
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, 'src')],
      },
    },
  },
  rules: {
    'max-len': [2, 120],
    'react/jsx-filename-extension': [1, {
      extensions: [".js", ".jsx"]
    }],
    'react/jsx-props-no-spreading': [1, {
      custom: 'ignore',
    }],
    'template-curly-spacing': "off",
    'indent': "off",
    'no-underscore-dangle': ["error", {
      "allow": ["__REDUX_DEVTOOLS_EXTENSION__"]
    }]
  }
};
