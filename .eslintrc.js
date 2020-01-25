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
    'react/jsx-filename-extension': [1, {
      extensions: [".js", ".jsx"]
    }],
    'template-curly-spacing': "off",
    'indent': "off"
  }
};
