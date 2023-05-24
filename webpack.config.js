module.exports = {
  entry: './app.js',
  mode: 'development',
  module: {
    rules: [{
      test: /\.txt$/,
      use: './examples/loader/const2var-loader'
    }],
  },
  output: {
    filename: 'bundle.js',
  },
};