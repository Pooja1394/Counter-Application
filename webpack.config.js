const path = require('path');

module.exports = {
  entry: './src/index.js', // Specify the entry point
  mode: 'development', // Use development mode
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply Babel loader to .js files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
};
