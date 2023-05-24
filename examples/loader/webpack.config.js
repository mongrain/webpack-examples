module.exports = {
  entry: './app.js',
  mode: 'development',
  module: {
    rules: [{
      test: /\.txt$/,
      use: './const2var-loader'
    }],
  },
  output: {
    filename: 'bundle.js',
  },
};