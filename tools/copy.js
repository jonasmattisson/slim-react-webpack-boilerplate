import colors from 'colors';
import task from './lib/task';
import copy from './lib/copy';
import mkdir from 'mkdirp';


export default task('Copy', (log) => {
  const onSuccess = (val) => {
    log(colors.green(`Copied "${val.source}" to "${val.destination}"`));
    return val;
  };

  const onError = (err) => {
    log(colors.red(`Error copying "${err.source}" to "${err.destination}".\n     ${err.msg}`));
    throw err.msg;
  };

  const makeDir = (dir) => new Promise((resolve, reject) => {
    mkdir(dir, {}, err => {
      if(err) reject(err);

      resolve();
    });
  });

  return makeDir('build').then(
      () => log(colors.green('Created folder /build')),
      err => { log(colors.red('Error creating folder /build')); throw err; })
    .then(() => Promise.all([
      copy('src/public', 'build/public').then(onSuccess, onError),
      copy('src/assets', 'build/public/assets').then(onSuccess, onError)
    ]));
});
