const fs = require('fs');
const path = 'c:/Users/imman/Downloads/Pitch - Amrit Cement [Recovered] Report/brand-pitch/index.html';
let content = fs.readFileSync(path, 'utf8');

// Fix IG Grid Feed background
content = content.replace(/<div style="background:#000;/g, '<div style="background:#fff; border:1px solid #EFEFEF;');
content = content.replace(/border:3px solid #333;/g, 'border:3px solid #EFEFEF;');
content = content.replace(/border-bottom:1px solid rgba\(255,255,255,0\.1\);/g, 'border-bottom:1px solid #EFEFEF;');
content = content.replace(/color:#fff;/g, 'color:#1C1E21;');

// Fix reels placeholder
content = content.replace(/background:linear-gradient\(135deg,#1a1a2e 0%,#16162a 50%,#0f0f1a 100%\)/g, 'background:linear-gradient(135deg,#f0f2f5 0%,#e4e6e9 100%)');
content = content.replace(/color:rgba\(255,255,255,0\.9\)/g, 'color:#1c1e21');
content = content.replace(/border:1px solid #fff;/g, 'border:1px solid #1c1e21;');

// In the JS for IG carousel, change the dot colors
content = content.replace(/dot\.style\.background = '#E21F26'/g, "dot.style.background = '#0095F6'");
content = content.replace(/dot\.style\.background = 'rgba\\(255,255,255,0\\.5\\)'/g, "dot.style.background = 'rgba(0,0,0,0.15)'");

// Change inline dots
content = content.replace(/background:rgba\(255,255,255,0\.5\)/g, 'background:rgba(0,0,0,0.15)');
content = content.replace(/background:#E21F26/g, 'background:#0095F6');

// Add class to logo images so we can target them easily
content = content.replace(/<img src="assets\/logo-white.svg"/g, '<img class="theme-logo" src="assets/logo-white.svg"');
content = content.replace(/<img src="assets\/covana-white.png"/g, '<img class="theme-logo" src="assets/covana-white.png"');

fs.writeFileSync(path, content);
console.log('Fixed index.html inline styles');
