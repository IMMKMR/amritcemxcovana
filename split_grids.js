const fs = require('fs');
const htmlPath = 'c:/Users/imman/Downloads/Pitch - Amrit Cement [Recovered] Report/brand-pitch/index.html';

let html = fs.readFileSync(htmlPath, 'utf8');

const igSVG_heart = '<svg class="ig-icon" aria-label="Like" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.438-.283-1.791-1.509-4.303-3.752C5.152 14.081 2.5 12.194 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.543 1.117 1.543s.277-.368 1.117-1.543a4.21 4.21 0 0 1 3.675-1.941z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>';
const igSVG_comment = '<svg class="ig-icon" aria-label="Comment" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>';
const igSVG_share = '<svg class="ig-icon" aria-label="Share Post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>';
const igSVG_save = '<svg class="ig-icon" aria-label="Save" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>';
const igSVG_more = '<svg aria-label="More Options" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>';

const topicalPosts = [
  { img: 'new_pitch_2.jpg', cap: 'Are the reinforcement and formwork accurately in place? 🏗️ Build strong with AmritCem.', likes: '3,102' },
  { img: 'new_pitch_3.jpg', cap: 'Is the right concrete mix and grade confirmed? Quality matters. ✅ #DhalaiReady', likes: '4,519' },
  { img: 'new_pitch_5.jpg', cap: 'Are the conditions right for a strong and lasting Dhalai? ☀️🌧️ #WeatherReady #AmritCem', likes: '3,912' }
];

const infographicPosts = [
  { img: 'new_pitch_1.jpg', cap: 'Before the First Pour comes the Five Checks! ✅ Building right starts here. #AmritCem #FiveChecks', likes: '2,847' },
  { img: 'new_pitch_4.jpg', cap: 'Are plumbing and electrical provisions ready? Plan ahead for a seamless build. ⚡', likes: '1,294' },
  { img: 'new_pitch_6.jpg', cap: 'Strong foundations create lasting memories. Build your future with AmritCem. 🏠✨', likes: '5,011' }
];

function getIgMockup(post, i) {
  return `
    <div class="ig-mockup" style="max-width: 100%; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-radius: 12px; overflow: hidden; border: 1px solid #e5e5e5; display: flex; flex-direction: column; background: #fff;">
      <div class="ig-header" style="padding: 12px 16px; display:flex; justify-content:space-between; align-items:center;">
        <div class="ig-user-area" style="display:flex; align-items:center; gap:12px;">
          <div class="ig-avatar" style="width: 32px; height: 32px; border-radius: 50%; background: #E21F26; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 11px; font-weight: bold;">AC</div>
          <div class="ig-username" style="font-size: 14px; font-weight: 600; color: #000;">amritcem</div>
        </div>
        <div class="ig-more" style="display:flex; align-items:center;">${igSVG_more}</div>
      </div>
      <img src="../FInal/${post.img.replace('new_pitch_', 'Pitch - Amrit Cement  (').replace('.jpg', ').jpg')}" alt="Feed Post" class="ig-image" style="width: 100%; aspect-ratio: 4/5; object-fit: contain; background: #fff; flex:1;">
      <div class="ig-action-bar" style="display: flex; align-items: center; justify-content: space-between; padding: 12px 16px 8px;">
        <div class="ig-action-icons" style="display: flex; gap: 16px; align-items: center;">
          ${igSVG_heart}
          ${igSVG_comment}
          ${igSVG_share}
        </div>
        <div>${igSVG_save}</div>
      </div>
      <div class="ig-likes" style="padding: 0 16px; font-size: 14px; font-weight: 600; color: #000; margin-bottom: 6px;">${post.likes} likes</div>
      <div class="ig-caption" style="padding: 0 16px 16px; font-size: 14px; line-height: 1.5; color: #000;"><strong>amritcem</strong> ${post.cap}</div>
    </div>`;
}

const newLayout = `
  <div class="compact-context reveal" style="margin-bottom: 24px;">
    <h3>Topical Connect</h3>
    <p>Leveraging cultural moments and regional festivals like Durga Puja to build deep emotional resonance with our audience in the Northeast.</p>
  </div>
  <div class="mockups-grid reveal" style="margin-bottom: 80px;">
    ${topicalPosts.map(p => getIgMockup(p)).join('')}
  </div>

  <div class="compact-context reveal" style="margin-bottom: 24px;">
    <h3>Educational Infographics</h3>
    <p>Establishing absolute authority in home building with our "Five Checks" series, designed to be highly saveable and shareable.</p>
  </div>
  <div class="mockups-grid reveal">
    ${infographicPosts.map(p => getIgMockup(p)).join('')}
  </div>
`;

// Use regex to replace everything between <div class="compact-context reveal"> and the end of the <div class="mockups-grid reveal">
const regex = /<div class="compact-context reveal">[\s\S]*?<\/div>\s*<div class="mockups-grid reveal">[\s\S]*?<!-- Post 6 -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*/;
// Actually, it's easier to just match from the first compact-context to right before <div class="pitch-row reveal" style="margin-top: 80px;">
const startStr = '<div class="compact-context reveal">';
const endStr = '<div class="pitch-row reveal" style="margin-top: 80px;">';
const startIndex = html.indexOf(startStr);
const endIndex = html.indexOf(endStr);

if (startIndex !== -1 && endIndex !== -1) {
  const before = html.substring(0, startIndex);
  const after = html.substring(endIndex);
  const finalHtml = before + newLayout + '\n  ' + after;
  fs.writeFileSync(htmlPath, finalHtml);
  console.log('Successfully divided the grid into Topical and Infographic sections.');
} else {
  console.log('Could not find the target sections.');
}
