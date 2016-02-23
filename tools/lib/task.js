import colors from 'colors';

function formatTime(time) {
  return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}

function log(message, depth = 0, prefix = '└─') {
  const whitespace = new Array(depth*3).join(' ');
  console.log(`${whitespace}${colors.yellow(prefix)} ${message}`);
}

export default (name, task) => {
  return () => new Promise((resolve, reject) => {
    const taskStartTime = new Date();
    console.log(colors.white(`[${formatTime(taskStartTime)}] Starting task '${name}'...`));

    task(log).then((result) => {
      const taskEndTime = new Date();
      const taskTotalTime = taskEndTime.getTime() - taskStartTime.getTime();

      console.log(colors.white(`[${formatTime(taskEndTime)}] Finished task '${name}' after ${taskTotalTime} ms\n`));
      resolve(result);
    }, err => reject(err));
  });
};
