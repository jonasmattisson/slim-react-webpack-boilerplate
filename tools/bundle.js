import task from './lib/task';
import deepMerge from 'deep-merge';
import webpack from 'webpack';
import webpackConfig from './config/webpack.config';
import webpackProductionConfig from './config/webpack.production.config';

export default task('Bundling', () => new Promise((resolve, reject) => {
  const onSameKeyMergeStrategy = (target, source) => [].concat(target, source);
  const merge = deepMerge(onSameKeyMergeStrategy);
  const bundler = webpack(merge(webpackConfig, webpackProductionConfig));

  bundler.run((err) => {
    if (err) {
      return reject(err);
    }

    return resolve();
  });
}));
