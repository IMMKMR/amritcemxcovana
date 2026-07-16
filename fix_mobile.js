const fs = require('fs');

const htmlPath = 'c:/Users/imman/Downloads/Pitch - Amrit Cement [Recovered] Report/brand-pitch/index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

// 1. Remove inline styles causing the issue
html = html.replace(
  /<div class="kv-showcase" style="display: flex; justify-content: center; gap: 32px; flex-wrap: nowrap;">/g,
  '<div class="kv-showcase-grid">'
);

html = html.replace(
  /<div class="kv-item reveal" style="max-width: 500px; width: 50%;">/g,
  '<div class="kv-item reveal">'
);

// 2. Inject responsive CSS into the head
const cssSnippet = `
  <style>
    .kv-showcase-grid {
      display: flex;
      justify-content: center;
      gap: 32px;
      flex-wrap: wrap; /* Stacks on mobile */
      margin-top: 40px;
    }
    .kv-showcase-grid .kv-item {
      width: 100%; /* Full width on mobile */
      max-width: 500px;
    }
    .kv-showcase-grid .kv-item img {
      width: 100%;
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.1);
    }
    @media (min-width: 768px) {
      .kv-showcase-grid {
        flex-wrap: nowrap; /* Side-by-side on desktop */
      }
      .kv-showcase-grid .kv-item {
        width: calc(50% - 16px);
      }
    }
  </style>
</head>`;

html = html.replace('</head>', cssSnippet);

// Wait, I also had inline styles on the <img> tags:
// <img src="assets/kv-2-new.jpeg" alt="Campaign Hero KV 2" style="width: 100%; border-radius: 12px; box-shadow: 0 12px 32px rgba(0,0,0,0.1);">
// The CSS above handles it, so we can clean up the img tags too for cleanliness (though inline is fine, the width 100% is what matters).
html = html.replace(/style="width: 100%; border-radius: 12px; box-shadow: 0 12px 32px rgba\(0,0,0,0\.1\);"/g, '');

fs.writeFileSync(htmlPath, html);
console.log('Mobile optimization applied.');
