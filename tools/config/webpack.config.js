import path from 'path';
import webpack from 'webpack';

export default {
  entry: {
    build: ['./src/main.jsx']
  },
  output: {
    path: path.resolve(__dirname + '../../../build/public/scripts/'),
    publicPath: '/scripts/',
    filename: 'build.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx$|\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['style', 'raw'],
        exclude: /node_modules/
      }
    ]
  },
  stats: {
    colors: true,
    timings: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
