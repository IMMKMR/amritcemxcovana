const fs = require('fs');

const htmlPath = 'c:/Users/imman/Downloads/Pitch - Amrit Cement [Recovered] Report/brand-pitch/index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

// The script already ran, so we have `<div class="kv-showcase-grid">`
// Let's check if the 3rd KV is already there, if not add it.
if (!html.includes('src="assets/kv-3.jpeg"')) {
  // Find the end of the 2nd item
  const item2 = '<div class="kv-item reveal"><img src="assets/kv-2-new.jpeg" alt="Campaign Hero KV 2" ></div>';
  const newItem3 = '\n    <div class="kv-item reveal"><img src="assets/kv-3.jpeg" alt="Campaign Hero KV 3" ></div>';
  
  html = html.replace(item2, item2 + newItem3);
}

// Update the CSS to handle 3 items in a row (33.333% width instead of 50%)
// So they don't look giant or wrap awkwardly.
html = html.replace(
  'width: calc(50% - 16px);',
  'width: calc(33.333% - 22px);'
);

fs.writeFileSync(htmlPath, html);
console.log('Added 3rd KV and adjusted grid width for 3 items.');
