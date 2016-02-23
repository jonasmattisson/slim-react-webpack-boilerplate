import task from './lib/task';
import webpack from 'webpack';
import webpackConfig from '../webpack.config';

export default task('Bundling', () => new Promise((resolve, reject) => {
  const config = {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
  };
  const bundler = webpack(Object.assign(webpackConfig, config));

  bundler.run((err, stats) => {
    if (err) {
      return reject(err);
    }

    return resolve();
  });
}));
