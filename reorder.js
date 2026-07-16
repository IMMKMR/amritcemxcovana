const fs = require('fs');

const htmlPath = 'c:/Users/imman/Downloads/Pitch - Amrit Cement [Recovered] Report/brand-pitch/index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

// 1. Fix KV side-by-side
html = html.replace(
  /<div class="kv-showcase" style="display: flex; justify-content: center; gap: 32px; flex-wrap: wrap;">/g,
  '<div class="kv-showcase" style="display: flex; justify-content: center; gap: 32px; flex-wrap: nowrap;">'
);
// Make items slightly more responsive for side-by-side
html = html.replace(
  /style="max-width: 500px; width: 100%;"/g,
  'style="max-width: 500px; width: 50%;"'
);

// 2. Reorder sections
// Extract Instagram Header
const igHeaderStart = html.indexOf('<div class="platform-header reveal">');
const igHeaderEnd = html.indexOf('<div class="compact-context reveal"', igHeaderStart);
const igHeader = html.substring(igHeaderStart, igHeaderEnd);

// Extract Topical Connect
const topicalStart = html.indexOf('<div class="compact-context reveal"', igHeaderEnd);
const topicalEnd = html.indexOf('<div class="compact-context reveal"', topicalStart + 10);
const topicalBlock = html.substring(topicalStart, topicalEnd);

// Extract Educational Infographics
const eduStart = topicalEnd;
const eduEnd = html.indexOf('<div class="pitch-row reveal"', eduStart);
const eduBlock = html.substring(eduStart, eduEnd);

// Extract Carousel
const carouselStart = eduEnd;
const carouselEnd = html.indexOf('</section>', carouselStart);
const carouselBlock = html.substring(carouselStart, carouselEnd);

// Reels is its own section
const reelsStart = html.indexOf('<section class="platform-section" id="reels"');
const reelsEnd = html.indexOf('</section>', reelsStart) + 10;
const reelsBlock = html.substring(reelsStart, reelsEnd);

// Reassemble the flow
// Flow: Carousel -> Video (Reels) -> Infographic -> Topical -> KV
// So Instagram section will contain: Header + Carousel + Infographic + Topical
// BUT wait, Reels is a section. Should Reels interrupt the Instagram section?
// Yes, Reels is `<section id="reels">`.
// We should probably just have:
// <section id="instagram"> Header + Carousel </section>
// <section id="reels"> Video </section>
// <section id="instagram-statics"> Infographic + Topical </section>
// <section id="visuals"> KV </section>

const sectionIgStart = html.substring(0, igHeaderStart);

const newBody = `
${igHeader}
${carouselBlock}
</section>

${reelsBlock}

<section class="platform-section" id="statics" style="padding-top: 80px;">
${eduBlock}
${topicalBlock}
</section>
`;

const afterReels = html.substring(reelsEnd);
// the afterReels already contains the visuals section and footer.

fs.writeFileSync(htmlPath, sectionIgStart + newBody + afterReels);
console.log('Reordered successfully.');
