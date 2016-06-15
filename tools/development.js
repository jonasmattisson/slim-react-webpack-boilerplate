/*  eslint no-console:0 */
import colors from 'colors';
import clean from './clean';
import copy from './copy';
import startDevServer from './devserver';


clean()
  .then(copy)
  .then(startDevServer);
