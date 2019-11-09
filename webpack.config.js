'use strict';

var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.ts',
  mode: "production",
  output: {
    filename: 'index.js', // <-- Important
    libraryTarget: 'this' // <-- Important
  },
  target: 'node', // <-- Important
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader?'
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ]
  },
  externals: [nodeExternals()] // <-- Important
};
