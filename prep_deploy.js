const fs = require('fs');
const path = require('path');

const srcDir1 = 'c:/Users/imman/Downloads/Pitch - Amrit Cement [Recovered] Report/FInal';
const srcFile2 = 'c:/Users/imman/Downloads/Pitch - Amrit Cement [Recovered] Report/WhatsApp Image 2026-07-16 at 12.02.25 PM.jpeg';
const destDir = 'c:/Users/imman/Downloads/Pitch - Amrit Cement [Recovered] Report/brand-pitch/assets';

// Copy 6 FInal files
for(let i=1; i<=6; i++) {
  const src = path.join(srcDir1, `Pitch - Amrit Cement  (${i}).jpg`);
  const dest = path.join(destDir, `new_pitch_${i}.jpg`);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${src} to ${dest}`);
  } else {
    console.log(`File missing: ${src}`);
  }
}

// Copy WhatsApp file
if (fs.existsSync(srcFile2)) {
  fs.copyFileSync(srcFile2, path.join(destDir, 'kv-new.jpeg'));
  console.log(`Copied WhatsApp image to kv-new.jpeg`);
} else {
  console.log(`File missing: ${srcFile2}`);
}

// Update index.html
const htmlPath = 'c:/Users/imman/Downloads/Pitch - Amrit Cement [Recovered] Report/brand-pitch/index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

html = html.replace(/\.\.\/FInal\/Pitch - Amrit Cement  \((\d)\)\.jpg/g, 'assets/new_pitch_$1.jpg');
html = html.replace(/\.\.\/WhatsApp Image 2026-07-16 at 12.02.25 PM\.jpeg/g, 'assets/kv-new.jpeg');

fs.writeFileSync(htmlPath, html);
console.log('HTML updated successfully.');
