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
        loader: 'ts-loader?transpileOnly=false',
        exclude: /node_modules/,
        options: {
          transpileOnly: true
        }
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
