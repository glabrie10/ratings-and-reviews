const { createResults, createPhoto } = require('./data');
const fs = require('fs');

const generateResults = (callback) => {
  const writeResults = fs.createWriteStream('results1.csv')
  let i = 100000
    const write = () => {
      let status = true;
        while (i > 0 && status) {
          i--;
          let resultId = 100000 - i
          const results = createResults(resultId)
            if (i === 0) {
              writeResults.write(results, 'utf-8', () => { writeResults.end(); callback(); });
            } else {
              status = writeResults.write(results, 'utf-8');
            }
        }
        if (i > 0) {
          writeResults.once('drain', write)
        }
    }
    write();
};

const generatePhotos = (callback) => {
  const writePhotos = fs.createWriteStream('photos1.csv')
  let i = 500000
  const write = () => {
    let status = true;
    while (i > 0 && status) {
      i--;
      let reviewId = Math.floor(Math.random() * 10000000);
      const newPhoto = createPhoto(reviewId)
      if (i === 0) {
        writePhotos.write(newPhoto, 'utf-8', () => { writePhotos.end(); callback(); });
      } else {
        status = writePhotos.write(newPhoto, 'utf-8');
      }
    }
    if (i > 0) {
      writePhotos.once('drain', write)
    }
  }
  write()
};




//generateResults(() => {})
generatePhotos(() => {})