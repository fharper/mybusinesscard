const fs = require('fs');
const imageToAscii = require('image-to-ascii');

const imageToAsciiOptions = {
  size: {
    width: 20,
    height: 20
  }
};

imageToAscii('./assets/avatar.png', imageToAsciiOptions, (err, avatar) => {
  fs.writeFileSync('./assets/avatar-fg.txt', avatar);
});

imageToAscii(
  './assets/avatar.png',
  {
    ...imageToAsciiOptions,
    bg: true,
    pixels: ' '
  },
  (err, avatar) => {
    fs.writeFileSync('./assets/avatar.txt', avatar);
  }
);

console.log('Avatars generated successfully.');
