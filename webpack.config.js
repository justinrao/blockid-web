var path = require('path');

var config = {
  entry: ['babel-polyfill', path.resolve(__dirname, 'src/index.js')],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['react-hot-loader', 'babel-loader'],
      exclude: [/node_modules/, 'scripts'],
    }]
  },

};

module.exports = config;