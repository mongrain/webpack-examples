const NoConsolePlugin = require('./no-console-plugin');

module.exports = {
  entry: './app.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
  },
  plugins: [
    new NoConsolePlugin()
  ]
};