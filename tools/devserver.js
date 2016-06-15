import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import webpackConfig from './config/webpack.config';
import task from './lib/task';

export default task('Starting development server', () => {
  webpackConfig.entry.build.unshift('webpack-dev-server/client?http://localhost:8080/', 'webpack/hot/dev-server');

  const bundler = webpack(webpackConfig);
  const server = new WebpackDevServer(bundler, {
    contentBase: 'build/public',
    publicPath: '/scripts',
    hot: true,
    quiet: true,
    noInfo: false,
    stats: { colors: true },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  });

  server.listen(8080, 'localhost', () => {});
  return Promise.resolve();
});
