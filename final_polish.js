const fs = require('fs');
const htmlPath = 'c:/Users/imman/Downloads/Pitch - Amrit Cement [Recovered] Report/brand-pitch/index.html';
const cssPath = 'c:/Users/imman/Downloads/Pitch - Amrit Cement [Recovered] Report/brand-pitch/style.css';

// 1. Modify style.css to reduce max-widths and enforce grid 4:5 ratio
let css = fs.readFileSync(cssPath, 'utf8');

css = css.replace(/\.ig-mockup \{ max-width: 420px;/g, '.ig-mockup { max-width: 360px;');
css = css.replace(/\.li-mockup \{ max-width: 500px;/g, '.li-mockup { max-width: 360px;');
css = css.replace(/\.fb-mockup \{ max-width: 500px;/g, '.fb-mockup { max-width: 360px;');
css = css.replace(/\.yt-mockup \{ max-width: 500px;/g, '.yt-mockup { max-width: 380px;');

if (!css.includes('.ig-feed-grid img { aspect-ratio: 4/5')) {
  css += '\n.ig-feed-grid img { aspect-ratio: 4/5; object-fit: cover; }';
}

fs.writeFileSync(cssPath, css);


// 2. Modify index.html to shorten captions and add pitch-1.jpg mockup
let html = fs.readFileSync(htmlPath, 'utf8');

// Shorten LinkedIn Captions
html = html.replace(
  /Before the First Pour comes the Five Checks! 🏗️<br><br>At AmritCem, we believe quality construction starts long before the cement is mixed\.<br><br>✅ Is the soil, excavation and foundation ready to carry your home\?<br>✅ Are the reinforcement, formwork and alignment accurately in place\?<br>✅ Is the right concrete mix, grade and quality confirmed\?<br>✅ Are plumbing, electrical provisions, equipment and the site ready\?<br>✅ Are the conditions right for a strong and lasting Dhalai\?/g,
  'Before the First Pour comes the Five Checks! 🏗️<br><br>✅ Is the foundation ready to carry your home?<br>✅ Are reinforcement & formwork accurate?<br>✅ Is the right concrete mix confirmed?<br>✅ Are site provisions ready?<br>✅ Are conditions right for Dhalai?'
);

html = html.replace(
  /Every foundation has many names\. Today, we celebrate them all\. 🏠<br><br>Dhalai Diwas isn't just a day — it's the beginning of every beginning\. It's the moment when a family's dream takes its first concrete step towards reality\.<br><br>At AmritCem, we don't just provide cement\. We provide the strength that holds memories together\./g,
  "Every foundation has many names. Today, we celebrate them all. 🏠<br><br>Dhalai Diwas isn't just a day — it's the beginning of every beginning. At AmritCem, we don't just provide cement. We provide the strength that holds memories together."
);

// Shorten Facebook Captions
html = html.replace(
  /🪔 Every masterpiece begins with Devoted Hands and unwavering faith\. AmritCem celebrates the artisans who bring both to life\.<br><br>Shubho Durga Puja! 🙏/g,
  "🪔 Every masterpiece begins with Devoted Hands and unwavering faith. AmritCem celebrates the artisans who bring both to life. Shubho Durga Puja! 🙏"
);

html = html.replace(
  /Some days build memories\. One day builds everything else\. 🏗️<br><br>Celebrating the beginning of every beginning — DHALAI DIWAS!<br><br>✅ Superior Strength ✅ Better Durability ✅ Consistent Performance/g,
  "Some days build memories. One day builds everything else. 🏗️<br><br>Celebrating DHALAI DIWAS! ✅ Superior Strength ✅ Better Durability"
);

// Shorten YouTube Captions
html = html.replace(
  /🏗️ Before the First Pour comes the Five Checks!<br><br>Are you building or renovating\? Don't miss these 5 essential checks before your first concrete pour\. Save this post and share it with anyone starting their construction journey!/g,
  "🏗️ Before the First Pour comes the Five Checks!<br><br>Don't miss these essential checks before your first concrete pour. Save and share!"
);

html = html.replace(
  /🪔 Shubho Durga Puja from AmritCem!<br><br>Every masterpiece begins with devoted hands and unwavering faith\. This festive season, we celebrate the artisans — the hands that sculpt our temples, build our homes, and pour our foundations\./g,
  "🪔 Shubho Durga Puja from AmritCem!<br><br>Every masterpiece begins with devoted hands and unwavering faith. We celebrate the artisans this festive season!"
);

const igSVG_heart = '<svg class="ig-icon" aria-label="Like" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.438-.283-1.791-1.509-4.303-3.752C5.152 14.081 2.5 12.194 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.543 1.117 1.543s.277-.368 1.117-1.543a4.21 4.21 0 0 1 3.675-1.941z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>';
const igSVG_comment = '<svg class="ig-icon" aria-label="Comment" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>';
const igSVG_share = '<svg class="ig-icon" aria-label="Share Post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>';
const igSVG_save = '<svg class="ig-icon" aria-label="Save" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>';
const igSVG_more = '<svg aria-label="More Options" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>';

const pitch1MockupHTML = `
  <div class="pitch-row reveal">
    <div class="pitch-context">
      <div class="pitch-badge">Festival Campaign</div>
      <h3>Emotional Connectivity</h3>
      <p>This creative (pitch-1) ties AmritCem's structural strength to the emotional strength of our culture. By highlighting the craftsmanship of festival artisans, we humanize the brand.</p>
    </div>
    <div class="pitch-mockup-wrapper">
      <div class="mockup-inner">
        <div class="ig-mockup">
          <div class="ig-header">
            <div class="ig-user-area">
              <div class="ig-avatar">AC</div>
              <div class="ig-username">amritcem</div>
            </div>
            <div class="ig-more">${igSVG_more}</div>
          </div>
          
          <img src="assets/pitch-1.jpg" alt="Festival Post" class="ig-image">
          
          <div class="ig-action-bar">
            <div class="ig-action-icons">
              ${igSVG_heart}
              ${igSVG_comment}
              ${igSVG_share}
            </div>
            <div>${igSVG_save}</div>
          </div>
          
          <div class="ig-likes">3,492 likes</div>
          <div class="ig-caption"><strong>amritcem</strong> Celebrating the strength and devotion behind every masterpiece. ✨ #AmritCem</div>
        </div>
      </div>
    </div>
  </div>
`;

// Insert the new mockup right before the Profile Grid View in Instagram section
html = html.replace(
  /<div class="pitch-row reverse reveal">[\s]*<div class="pitch-context">[\s]*<div class="pitch-badge">Brand Identity<\/div>/,
  pitch1MockupHTML + '\n  <div class="pitch-row reverse reveal">\n    <div class="pitch-context">\n      <div class="pitch-badge">Brand Identity</div>'
);

html = html.replace(/href="style.css\?v=\d+"/, 'href="style.css?v=7"');

fs.writeFileSync(htmlPath, html);
console.log('Successfully adjusted heights, captions, grid aspect ratio, and showcased pitch-1.');
