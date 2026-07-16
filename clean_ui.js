const fs = require('fs');
const htmlPath = 'c:/Users/imman/Downloads/Pitch - Amrit Cement [Recovered] Report/brand-pitch/index.html';

let html = fs.readFileSync(htmlPath, 'utf8');

const posts = [
  { img: 'pitch-1.jpg', cap: 'Celebrating the strength and devotion behind every masterpiece. ✨ #AmritCem' },
  { img: 'pitch-2.jpg', cap: '🪔 Every masterpiece begins with Devoted Hands. Shubho Durga Puja! 🙏' },
  { img: 'pitch-3.jpg', cap: 'May the goddess bless your home with strength. Shubho Navami! 🪔' },
  { img: 'pitch-4.jpg', cap: 'Before the First Pour comes the Five Checks! ✅ #FiveChecks' },
  { img: 'pitch-5.jpg', cap: 'Some days build memories. One day builds everything else. 🏗️' },
  { img: 'pitch-6.jpg', cap: "Are you building? Don't miss these essential checks! 🏠" }
];

function getFbHtml(post) {
  return `
        <div class="fb-mockup" style="max-width: 100%; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-radius: 12px; overflow: hidden; border: 1px solid #e5e5e5; display: flex; flex-direction: column; background: #fff;">
          <div class="fb-header" style="padding: 12px 16px;">
            <div class="fb-avatar">AC</div>
            <div class="fb-meta">
              <div class="fb-name">AmritCem <span style="color:#0866FF;font-size:12px;">✓</span></div>
              <div class="fb-time">Sponsored</div>
            </div>
          </div>
          <div class="fb-text" style="font-size: 13px; padding: 0 16px 12px;">${post.cap}</div>
          <img src="assets/${post.img}" class="fb-img" alt="Facebook Post" style="flex:1;">
          <div class="fb-actions" style="padding: 8px 16px; border-top: 1px solid #eee;">
            <div class="fb-btn" style="font-size:13px;">👍 Like</div>
            <div class="fb-btn" style="font-size:13px;">💬 Comment</div>
          </div>
        </div>`;
}

function getLiHtml(post) {
  return `
        <div class="li-mockup" style="max-width: 100%; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-radius: 12px; overflow: hidden; border: 1px solid #e5e5e5; display: flex; flex-direction: column; background: #fff;">
          <div class="li-header" style="padding: 12px 16px;">
            <div class="li-avatar">AC</div>
            <div class="li-meta">
              <div class="li-name-row"><span class="li-name" style="font-size: 14px;">AmritCem</span></div>
              <div class="li-sub" style="font-size: 11px;">Cement Manufacturing</div>
            </div>
          </div>
          <div class="li-text" style="font-size: 13px; padding: 0 16px 12px;">${post.cap}</div>
          <img src="assets/${post.img}" class="li-img" alt="LinkedIn Post" style="flex:1;">
          <div class="li-actions" style="padding: 8px 16px; border-top: 1px solid #eee;">
            <div class="li-btn" style="font-size:13px;">👍 Like</div>
            <div class="li-btn" style="font-size:13px;">💬 Comment</div>
          </div>
        </div>`;
}

function getYtHtml(post) {
  return `
        <div class="yt-mockup" style="max-width: 100%; border: none; background: transparent; display: flex; flex-direction: column;">
          <div class="yt-header" style="padding: 0 0 8px;">
            <div class="yt-avatar">AC</div>
            <div class="yt-meta">
              <div class="yt-name" style="font-size:13px;">AmritCem ✓</div>
              <div class="yt-time" style="font-size:11px;">1 day ago</div>
            </div>
          </div>
          <div class="yt-text" style="font-size: 13px; padding: 0 0 12px;">${post.cap}</div>
          <div class="yt-img-wrap" style="padding: 0; flex: 1;"><img src="assets/${post.img}" class="yt-img" alt="YouTube Post" style="height:100%;"></div>
        </div>`;
}

const fbGrid = `
  <div class="compact-context reveal">
    <h3>Facebook Strategy</h3>
    <p>A mass communication channel leveraging emotional and festive connections to drive engagement.</p>
  </div>
  <div class="mockups-grid reveal">${posts.map(p => getFbHtml(p)).join('')}</div>`;

const liGrid = `
  <div class="compact-context reveal">
    <h3>LinkedIn B2B Positioning</h3>
    <p>Cementing our authority with technical expertise, corporate milestones, and brand strength.</p>
  </div>
  <div class="mockups-grid reveal">${posts.map(p => getLiHtml(p)).join('')}</div>`;

const ytGrid = `
  <div class="compact-context reveal">
    <h3>YouTube Community</h3>
    <p>Visual checklists and vibrant brand associations that keep subscribers engaged between videos.</p>
  </div>
  <div class="mockups-grid reveal">${posts.map(p => getYtHtml(p)).join('')}</div>`;

html = html.replace(
  /<section class="platform-section" id="facebook">([\s\S]*?)<div class="platform-header reveal">([\s\S]*?)<\/div>([\s\S]*?)<\/section>/,
  '<section class="platform-section" id="facebook">$1<div class="platform-header reveal">$2</div>\n' + fbGrid + '\n</section>'
);

html = html.replace(
  /<section class="platform-section" id="linkedin">([\s\S]*?)<div class="platform-header reveal">([\s\S]*?)<\/div>([\s\S]*?)<\/section>/,
  '<section class="platform-section" id="linkedin">$1<div class="platform-header reveal">$2</div>\n' + liGrid + '\n</section>'
);

html = html.replace(
  /<section class="platform-section" id="youtube">([\s\S]*?)<div class="platform-header reveal">([\s\S]*?)<\/div>([\s\S]*?)<\/section>/,
  '<section class="platform-section" id="youtube">$1<div class="platform-header reveal">$2</div>\n' + ytGrid + '\n</section>'
);

let css = fs.readFileSync('c:/Users/imman/Downloads/Pitch - Amrit Cement [Recovered] Report/brand-pitch/style.css', 'utf8');
css = css.replace(/\.pitch-badge \{[^\}]+\}/, '.pitch-badge { display: none; }');
fs.writeFileSync('c:/Users/imman/Downloads/Pitch - Amrit Cement [Recovered] Report/brand-pitch/style.css', css);

html = html.replace(/href="style.css\?v=\d+"/, 'href="style.css?v=12"');
fs.writeFileSync(htmlPath, html);
console.log('Successfully generated elegant grids and removed generic AI styles.');
