const fs = require('fs');

const srcFile = 'c:/Users/imman/Downloads/Pitch - Amrit Cement [Recovered] Report/WhatsApp Image 2026-07-16 at 1.39.59 PM.jpeg';
const destFile = 'c:/Users/imman/Downloads/Pitch - Amrit Cement [Recovered] Report/brand-pitch/assets/kv-2-new.jpeg';

if (fs.existsSync(srcFile)) {
  fs.copyFileSync(srcFile, destFile);
  console.log('Image copied successfully.');
} else {
  console.error('Source image not found!');
}
