import ncp from 'ncp';

export default (source, destination) => {
  return new Promise((resolve, reject) => {
    ncp(source, destination, err => {
      if (err) {
        return reject({ msg: err, source, destination });
      }

      return resolve({ source, destination });
    });
  });
}
