/*  eslint no-console:0 */
import colors from 'colors';
import clean from './clean';
import copy from './copy';
import bundle from './bundle';


clean()
  .then(copy)
  .then(bundle)
  .then(() => {
    // Build succeeded
    console.log(colors.rainbow(require('./lib/cake')));
  })
  .catch(err => {
    // Build failed
    console.log(colors.red('\n********* BUILD FAILED *********'));
    console.log(err ? colors.red(`Reason: ${err}`) : '');

    process.exit(1);
  });
