const fs = require('fs');
const path = 'c:/Users/imman/Downloads/Pitch - Amrit Cement [Recovered] Report/brand-pitch/index.html';
let content = fs.readFileSync(path, 'utf8');

// Remove nav links
content = content.replace(/<li><a href="#brand">Brand<\/a><\/li>\s*/g, '');
content = content.replace(/<li><a href="#audience">Audience<\/a><\/li>\s*/g, '');
content = content.replace(/<li><a href="#contact">Contact<\/a><\/li>\s*/g, '');

// Remove sections
const brandRegex = /<!-- ===== BRAND IDENTITY ===== -->[\s\S]*?<\/section>\s*<!-- ===== TARGET AUDIENCE ===== -->/g;
content = content.replace(brandRegex, '<!-- ===== TARGET AUDIENCE ===== -->');

const audienceRegex = /<!-- ===== TARGET AUDIENCE ===== -->[\s\S]*?<\/section>\s*<!-- ===== INSTAGRAM SECTION ===== -->/g;
content = content.replace(audienceRegex, '<!-- ===== INSTAGRAM SECTION ===== -->');

const ctaRegex = /<!-- ===== CTA ===== -->[\s\S]*?<\/section>\s*<!-- ===== FOOTER ===== -->/g;
content = content.replace(ctaRegex, '<!-- ===== FOOTER ===== -->');

fs.writeFileSync(path, content);
console.log('Cleaned index.html');
