const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');

const pathToFiles = './imagesAndVideos';
let inputsChain;

fs.readdir(pathToFiles, (err, items) => {
  console.log("Files being combined...");
  console.log(items);
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const completePath = `${pathToFiles}/${item}`;
    if(!inputsChain) {
      inputsChain = ffmpeg()
        .input(completePath)
    } else {
      inputsChain = inputsChain.input(completePath);
    }
  }
  inputsChain
    .mergeToFile('./output.mov', './imagesAndVideos');
});


