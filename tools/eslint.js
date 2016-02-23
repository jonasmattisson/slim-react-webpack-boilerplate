import eslint from 'eslint';
import colors from 'colors';
import task from './lib/task';

function printLintErrors(logger, lintResult) {
  lintResult
    .results
    .filter(result => result.errorCount > 0)
    .forEach((result, index) => {
      logger(`${colors.white(result.filePath)}`, 1);
      result
        .messages
        .filter(message => message.severity === 2)
        .forEach(message => {
          logger(`${message.message} [rule: ${message.ruleId}]`, 2, '*');
          logger(colors.red(`Line: ${message.line} Column: ${message.column} "${message.source.trim()}"`), 3, ' ');
        });
    });
}


function printLintWarnings(logger, lintResult) {
  lintResult
    .results
    .filter(result => result.warningCount > 0)
    .forEach((result, index) => {
      logger(`${colors.white(result.filePath)}`, 1);
      result
        .messages
        .filter(message => message.severity === 1)
        .forEach(message => {
          logger(`${message.message} [rule: ${message.ruleId}]`, 2, '*');
          logger(colors.yellow(`Line: ${message.line} Column: ${message.column} "${message.source.trim()}"`), 3, ' ');
        });
    });
}


export default task('ESLint', (log) => new Promise((resolve, reject) => {
  const cli = new eslint.CLIEngine();
  const lintResult = cli.executeOnFiles(['src/**/*.jsx']);

  /* Print lint result errors */
  if (lintResult.errorCount > 0) {
    log(colors.bgRed.white(` ${lintResult.errorCount} ${lintResult.errorCount === 1 ? 'error' : 'errors'} `));
    printLintErrors(log, lintResult);
    return reject('ESLint did not pass');
  }

  /* Print lint result warnings*/
  if (lintResult.warningCount > 0) {
    log(colors.bgYellow.black(` ${lintResult.warningCount} ${lintResult.warningCount === 1 ? 'warning' : 'warnings'} `));
    printLintWarnings(log, lintResult);
  } else {
    /* No errors or warnings*/
    log(colors.green('ESLint passed! Cake to you! '));
  }

  return resolve();
}));
