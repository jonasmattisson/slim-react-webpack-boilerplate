export default {
  entry: {
    build: './src/main.jsx'
  },
  output: {
    filename: 'build/public/scripts/[name].js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx$|\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      }
    ]
  },
  stats: {
    colors: true,
    timings: true
  }
};

