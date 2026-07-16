const fs = require('fs');
const htmlPath = 'c:/Users/imman/Downloads/Pitch - Amrit Cement [Recovered] Report/brand-pitch/index.html';

let html = fs.readFileSync(htmlPath, 'utf8');

const posts = [
  {
    img: 'pitch-1.jpg',
    badge: 'Festival Campaign',
    title: 'Honoring the Artisans',
    desc: 'Tying structural strength to emotional strength. We celebrate the artisans whose devoted hands build our homes and sculpt our festivals.',
    cap: 'Celebrating the strength and devotion behind every masterpiece. ✨ #AmritCem'
  },
  {
    img: 'pitch-2.jpg',
    badge: 'Cultural Affinity',
    title: 'Festive Connectivity',
    desc: 'Associating AmritCem with regional festivals like Durga Puja builds deep cultural affinity. We aren’t just selling cement; we are part of their celebrations.',
    cap: '🪔 Every masterpiece begins with Devoted Hands and unwavering faith. Shubho Durga Puja! 🙏'
  },
  {
    img: 'pitch-3.jpg',
    badge: 'Brand Greetings',
    title: 'Vibrant Association',
    desc: 'Maintaining a vibrant, active presence during auspicious times. High-fidelity images of Durga Puja mixed with our strong brand red captures attention.',
    cap: 'May the goddess bless your home with strength and prosperity. Shubho Navami! 🪔'
  },
  {
    img: 'pitch-4.jpg',
    badge: 'Educational Content',
    title: 'The Five Checks',
    desc: 'Establishing absolute authority by educating homeowners on the critical 5 checks before a concrete pour. This drives immense brand trust and saves.',
    cap: 'Before the First Pour comes the Five Checks! ✅ Is the foundation ready? Building right starts here. #FiveChecks'
  },
  {
    img: 'pitch-5.jpg',
    badge: 'Direct Conversion',
    title: 'Dhalai Diwas Anthem',
    desc: 'Targeting Individual Home Builders with emotional weight balanced by hard product benefits (Superior Strength, Weather Ready) to drive consideration.',
    cap: 'Some days build memories. One day builds everything else. 🏗️ Celebrating DHALAI DIWAS! ✅ Superior Strength'
  },
  {
    img: 'pitch-6.jpg',
    badge: 'Community Engagement',
    title: 'Visual Checklists',
    desc: 'Translating the "Five Checks" educational series into a high-contrast, easily digestible format that stops the scroll and encourages sharing.',
    cap: 'Are you building or renovating? Don\'t miss these essential checks before your first concrete pour. Save and share! 🏠'
  }
];

const igSVG_heart = '<svg class="ig-icon" aria-label="Like" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.438-.283-1.791-1.509-4.303-3.752C5.152 14.081 2.5 12.194 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.543 1.117 1.543s.277-.368 1.117-1.543a4.21 4.21 0 0 1 3.675-1.941z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>';
const igSVG_comment = '<svg class="ig-icon" aria-label="Comment" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>';
const igSVG_share = '<svg class="ig-icon" aria-label="Share Post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>';
const igSVG_save = '<svg class="ig-icon" aria-label="Save" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>';

function getFbHtml(post, index) {
  const isRev = index % 2 !== 0 ? ' reverse' : '';
  return \`
  <div class="pitch-row\${isRev} reveal">
    <div class="pitch-context">
      <div class="pitch-badge">\${post.badge}</div>
      <h3>\${post.title}</h3>
      <p>\${post.desc}</p>
    </div>
    <div class="pitch-mockup-wrapper">
      <div class="mockup-inner">
        <div class="fb-mockup">
          <div class="fb-header">
            <div class="fb-avatar">AC</div>
            <div class="fb-meta">
              <div class="fb-name">AmritCem <span style="color:#0866FF;font-size:12px;">✓</span></div>
              <div class="fb-time">Sponsored · 🌐</div>
            </div>
            <div class="fb-dots">...</div>
          </div>
          <div class="fb-text">\${post.cap}</div>
          <img src="assets/\${post.img}" class="fb-img" alt="Facebook Post">
          <div class="fb-counts">
            <div style="display:flex;align-items:center;gap:4px;">
              <div style="background:#0866FF;border-radius:50%;padding:4px;width:18px;height:18px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;">👍</div>
              <div style="background:#F02849;border-radius:50%;padding:4px;width:18px;height:18px;display:flex;align-items:center;justify-content:center;color:#fff;margin-left:-8px;font-size:10px;">❤️</div>
              \${(3.2 + index).toFixed(1)}K
            </div>
            <div>\${245 + index * 12} Comments</div>
          </div>
          <div class="fb-actions">
            <div class="fb-btn">Like</div><div class="fb-btn">Comment</div><div class="fb-btn">Share</div>
          </div>
        </div>
      </div>
    </div>
  </div>\`;
}

function getLiHtml(post, index) {
  const isRev = index % 2 !== 0 ? ' reverse' : '';
  return \`
  <div class="pitch-row\${isRev} reveal">
    <div class="pitch-context">
      <div class="pitch-badge">\${post.badge}</div>
      <h3>\${post.title}</h3>
      <p>\${post.desc}</p>
    </div>
    <div class="pitch-mockup-wrapper">
      <div class="mockup-inner">
        <div class="li-mockup">
          <div class="li-header">
            <div class="li-avatar">AC</div>
            <div class="li-meta">
              <div class="li-name-row"><span class="li-name">AmritCem</span></div>
              <div class="li-sub">Cement Manufacturing</div>
              <div class="li-time">\${index + 2}d • 🌐</div>
            </div>
          </div>
          <div class="li-text">\${post.cap}</div>
          <img src="assets/\${post.img}" class="li-img" alt="LinkedIn Post">
          <div class="li-counts"><div>👍 ❤️ 💡 \${1247 + index * 15}</div></div>
          <div class="li-actions">
            <div class="li-btn">Like</div><div class="li-btn">Comment</div><div class="li-btn">Repost</div>
          </div>
        </div>
      </div>
    </div>
  </div>\`;
}

function getYtHtml(post, index) {
  const isRev = index % 2 !== 0 ? ' reverse' : '';
  return \`
  <div class="pitch-row\${isRev} reveal">
    <div class="pitch-context">
      <div class="pitch-badge">\${post.badge}</div>
      <h3>\${post.title}</h3>
      <p>\${post.desc}</p>
    </div>
    <div class="pitch-mockup-wrapper">
      <div class="mockup-inner">
        <div class="yt-mockup">
          <div class="yt-header">
            <div class="yt-avatar">AC</div>
            <div class="yt-meta">
              <div class="yt-name">AmritCem ✓</div>
              <div class="yt-time">\${index + 1} days ago</div>
            </div>
          </div>
          <div class="yt-text">\${post.cap}</div>
          <div class="yt-img-wrap"><img src="assets/\${post.img}" class="yt-img" alt="YouTube Post"></div>
          <div class="yt-actions">
            <div class="yt-pill">👍 \${1.8 + index}K</div>
            <div class="yt-pill">Share</div>
          </div>
        </div>
      </div>
    </div>
  </div>\`;
}

// Generate the full HTML blocks
const fbHtmlAll = posts.map((p, i) => getFbHtml(p, i)).join('\\n');
const liHtmlAll = posts.map((p, i) => getLiHtml(p, i)).join('\\n');
const ytHtmlAll = posts.map((p, i) => getYtHtml(p, i)).join('\\n');

// Replace everything between platform header and end of section
html = html.replace(
  /<section class="platform-section" id="facebook">([\s\S]*?)<div class="platform-header reveal">([\s\S]*?)<\/div>([\s\S]*?)<\/section>/,
  '<section class="platform-section" id="facebook">$1<div class="platform-header reveal">$2</div>\\n' + fbHtmlAll + '\\n</section>'
);

html = html.replace(
  /<section class="platform-section" id="linkedin">([\s\S]*?)<div class="platform-header reveal">([\s\S]*?)<\/div>([\s\S]*?)<\/section>/,
  '<section class="platform-section" id="linkedin">$1<div class="platform-header reveal">$2</div>\\n' + liHtmlAll + '\\n</section>'
);

html = html.replace(
  /<section class="platform-section" id="youtube">([\s\S]*?)<div class="platform-header reveal">([\s\S]*?)<\/div>([\s\S]*?)<\/section>/,
  '<section class="platform-section" id="youtube">$1<div class="platform-header reveal">$2</div>\\n' + ytHtmlAll + '\\n</section>'
);

// Increment version
html = html.replace(/href="style.css\?v=\d+"/, 'href="style.css?v=9"');

fs.writeFileSync(htmlPath, html);
console.log('Successfully generated all 6 posts for all platforms with matching copy.');
