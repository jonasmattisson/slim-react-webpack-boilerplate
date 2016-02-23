import del from 'del';
import task from './lib/task';

export default task('Clean', () => del(['build/*']));
