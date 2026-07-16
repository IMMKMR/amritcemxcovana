const fs = require('fs');
const htmlPath = 'c:/Users/imman/Downloads/Pitch - Amrit Cement [Recovered] Report/brand-pitch/index.html';

let html = fs.readFileSync(htmlPath, 'utf8');

const igSVG_heart = '<svg class="ig-icon" aria-label="Like" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.438-.283-1.791-1.509-4.303-3.752C5.152 14.081 2.5 12.194 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.543 1.117 1.543s.277-.368 1.117-1.543a4.21 4.21 0 0 1 3.675-1.941z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>';
const igSVG_comment = '<svg class="ig-icon" aria-label="Comment" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>';
const igSVG_share = '<svg class="ig-icon" aria-label="Share Post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>';
const igSVG_save = '<svg class="ig-icon" aria-label="Save" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>';
const igSVG_more = '<svg aria-label="More Options" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>';

const newIgSection = `
  <div class="pitch-row reveal">
    <div class="pitch-context">
      <div class="pitch-badge">Educational Carousel</div>
      <h3>The "Five Checks" Series</h3>
      <p>A highly engaging, swipeable Instagram carousel designed to establish AmritCem as the absolute authority in home building. By educating homeowners on the critical 5 checks before a concrete pour, we drive saves, shares, and immense brand trust.</p>
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
          
          <div class="carousel-wrap">
            <div class="carousel-track" id="igCarousel">
              <div class="carousel-slide"><img src="assets/carousel_1.png" alt="Carousel 1" class="ig-image"></div>
              <div class="carousel-slide"><img src="assets/carousel_2.png" alt="Carousel 2" class="ig-image"></div>
              <div class="carousel-slide"><img src="assets/carousel_3.png" alt="Carousel 3" class="ig-image"></div>
              <div class="carousel-slide"><img src="assets/carousel_4.png" alt="Carousel 4" class="ig-image"></div>
              <div class="carousel-slide"><img src="assets/carousel_5.png" alt="Carousel 5" class="ig-image"></div>
              <div class="carousel-slide"><img src="assets/carousel_6.png" alt="Carousel 6" class="ig-image"></div>
            </div>
            <div class="carousel-arrows">
              <button class="carousel-arrow" onclick="moveCarousel('igCarousel',-1)">‹</button>
              <button class="carousel-arrow" onclick="moveCarousel('igCarousel',1)">›</button>
            </div>
          </div>
          
          <div class="ig-action-bar">
            <div class="ig-action-icons">
              ${igSVG_heart}
              ${igSVG_comment}
              ${igSVG_share}
            </div>
            <div class="carousel-nav" id="igCarouselNav" style="margin:0;">
              <button class="carousel-dot active" onclick="goToSlide('igCarousel',0)"></button>
              <button class="carousel-dot" onclick="goToSlide('igCarousel',1)"></button>
              <button class="carousel-dot" onclick="goToSlide('igCarousel',2)"></button>
              <button class="carousel-dot" onclick="goToSlide('igCarousel',3)"></button>
              <button class="carousel-dot" onclick="goToSlide('igCarousel',4)"></button>
              <button class="carousel-dot" onclick="goToSlide('igCarousel',5)"></button>
            </div>
            <div>${igSVG_save}</div>
          </div>
          
          <div class="ig-likes">4,231 likes</div>
          <div class="ig-caption"><strong>amritcem</strong> Before the first pour — here are the 5 essential checks every homeowner must know 🏠✅ Swipe to learn → #DhalaiReady #AmritCem</div>
        </div>
      </div>
    </div>
  </div>

  <div class="pitch-row reverse reveal">
    <div class="pitch-context">
      <div class="pitch-badge">Brand Identity</div>
      <h3>Profile Grid Architecture</h3>
      <p>Our feed isn't just a collection of posts; it's a carefully curated grid architecture. By balancing educational content with emotional lifestyle visuals, we create a premium, cohesive aesthetic that establishes AmritCem as Northeast India's most trusted brand.</p>
    </div>
    <div class="pitch-mockup-wrapper">
      <div class="mockup-inner">
        <div style="background:#fff; border:1px solid #EFEFEF;border-radius:16px;padding:16px;max-width:420px;width:100%;box-shadow: 0 20px 40px rgba(0,0,0,0.08);">
          <div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
            <div style="width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,var(--red-primary),var(--gold));display:flex;align-items:center;justify-content:center;font-weight:800;font-size:18px;border:3px solid #EFEFEF;color:#fff;">AC</div>
            <div>
              <div style="font-weight:700;font-size:15px;color:#000;">amritcem</div>
              <div style="font-size:12px;color:var(--text-muted);">AmritCem | Cementing Partnerships</div>
            </div>
          </div>
          <div style="display:flex;justify-content:space-around;text-align:center;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid #EFEFEF;color:#000;">
            <div><div style="font-weight:700;">156</div><div style="font-size:11px;color:var(--text-muted);">posts</div></div>
            <div><div style="font-weight:700;">12.4K</div><div style="font-size:11px;color:var(--text-muted);">followers</div></div>
            <div><div style="font-weight:700;">234</div><div style="font-size:11px;color:var(--text-muted);">following</div></div>
          </div>
          <div class="ig-feed-grid">
            <img src="assets/pitch-1.jpg" alt="Post 1">
            <img src="assets/pitch-2.jpg" alt="Post 2">
            <img src="assets/pitch-3.jpg" alt="Post 3">
            <img src="assets/pitch-4.jpg" alt="Post 4">
            <img src="assets/pitch-5.jpg" alt="Post 5">
            <img src="assets/pitch-6.jpg" alt="Post 6">
            <img src="assets/kv-1.jpeg" alt="Post 7">
            <img src="assets/kv-2.jpeg" alt="Post 8">
            <img src="assets/kv-3.jpeg" alt="Post 9">
          </div>
        </div>
      </div>
    </div>
  </div>
`;

// Replace everything between <div style="display:grid;grid-template-columns:1fr 1fr;gap:48px;max-width:1100px;margin:0 auto;align-items:start;">
// and </section> \n\n<!-- ===== INSTAGRAM REELS SECTION ===== -->
const igRegex = /<div style="display:grid;grid-template-columns:1fr 1fr;gap:48px;max-width:1100px;margin:0 auto;align-items:start;">[\s\S]*?<\/section>\s*<!-- ===== INSTAGRAM REELS SECTION ===== -->/;

html = html.replace(igRegex, newIgSection + '\n</section>\n\n<!-- ===== INSTAGRAM REELS SECTION ===== -->');

fs.writeFileSync(htmlPath, html);
console.log('Successfully applied side-by-side pitch layouts to Instagram.');
