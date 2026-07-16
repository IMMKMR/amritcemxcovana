const fs = require('fs');

const srcFile = 'c:/Users/imman/Downloads/Pitch - Amrit Cement [Recovered] Report/brand-pitch/POC V2.mp4';
const destFile = 'c:/Users/imman/Downloads/Pitch - Amrit Cement [Recovered] Report/brand-pitch/assets/reel-video.mp4';

if (fs.existsSync(srcFile)) {
  fs.copyFileSync(srcFile, destFile);
  console.log('New compressed video copied successfully.');
} else {
  console.error('Source video not found!');
}
