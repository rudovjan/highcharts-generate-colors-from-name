let path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: { path: __dirname, filename: 'docs/dist/index.dist.js' },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  },
};