var path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

var config = {
  entry: ['babel-polyfill', path.resolve(__dirname, 'src/index.js')],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: [/node_modules/, 'scripts'],
      query:
      {
        presets: ['es2015', 'react', 'stage-0']
      }
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['build'], { root: path.resolve(__dirname, '..') }),
    new webpack.NormalModuleReplacementPlugin(
      /environments\/environment\.js/,
      'environment.prod.js'
    ),
    new webpack.IgnorePlugin(/vertx/),
  ]
};

module.exports = config;