'use strict';

const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.ts'
  },
  mode: "production",
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'tyr-map',
    umdNamedDefine: true
  },
  devtool: 'source-map',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ]
  },
  externals: [nodeExternals()],
  optimization: {
    minimize: true
  }
};
