const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  cache: {
      type: 'filesystem'
  },
  plugins: [
    new ESLintPlugin(),
  ]
};
