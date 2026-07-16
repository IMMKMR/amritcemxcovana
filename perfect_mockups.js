const fs = require('fs');
const htmlPath = 'c:/Users/imman/Downloads/Pitch - Amrit Cement [Recovered] Report/brand-pitch/index.html';
const cssPath = 'c:/Users/imman/Downloads/Pitch - Amrit Cement [Recovered] Report/brand-pitch/style.css';

let css = fs.readFileSync(cssPath, 'utf8');

const newCSS = `
/* ===== OFFICIAL PLATFORM MOCKUP STYLES ===== */
.pitch-row {
  display: flex; align-items: center; gap: 64px; max-width: 1200px; margin: 0 auto 80px;
}
.pitch-row.reverse { flex-direction: row-reverse; }
.pitch-context { flex: 1; }
.pitch-context h3 { font-family: 'Outfit', sans-serif; font-size: 32px; font-weight: 800; color: #1C1E21; margin-bottom: 16px; line-height: 1.2; }
.pitch-context p { font-size: 16px; color: #4A4E53; margin-bottom: 24px; line-height: 1.6; }
.pitch-badge { display: inline-block; padding: 6px 14px; background: rgba(226,31,38,0.1); color: var(--red-primary); border-radius: 50px; font-size: 13px; font-weight: 700; margin-bottom: 16px; letter-spacing: 1px; text-transform: uppercase; }
.pitch-mockup-wrapper { flex: 1; display: flex; justify-content: center; position: relative; }
.pitch-mockup-wrapper::before { content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 120%; height: 120%; background: radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%); z-index: 0; pointer-events: none; }
.mockup-inner { position: relative; z-index: 1; width: 100%; display: flex; justify-content: center; }

@media(max-width: 900px) {
  .pitch-row, .pitch-row.reverse { flex-direction: column; gap: 40px; margin-bottom: 60px; text-align: center; }
}

/* Instagram Web/App Hybrid */
.ig-mockup { max-width: 420px; width: 100%; margin: 0 auto; background: #fff; border: 1px solid #dbdbdb; border-radius: 8px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: #262626; padding-bottom: 8px; box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
.ig-header { display: flex; align-items: center; justify-content: space-between; padding: 14px; }
.ig-user-area { display: flex; align-items: center; gap: 10px; }
.ig-avatar { width: 32px; height: 32px; border-radius: 50%; border: 2px solid #fff; outline: 2px solid #d92b7f; background: #E21F26; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 11px; font-weight: bold; }
.ig-username { font-size: 14px; font-weight: 600; color: #000; }
.ig-more { font-size: 20px; font-weight: bold; line-height: 1; display:flex; align-items:center; }
.ig-image { width: 100%; display: block; aspect-ratio: 1/1; object-fit: cover; }
.ig-action-bar { display: flex; align-items: center; justify-content: space-between; padding: 6px 14px 8px; }
.ig-action-icons { display: flex; gap: 16px; align-items: center; }
.ig-icon { width: 24px; height: 24px; cursor: pointer; }
.ig-likes { font-size: 14px; font-weight: 600; color: #000; padding: 0 14px; margin-bottom: 8px; }
.ig-caption { font-size: 14px; padding: 0 14px; color: #262626; line-height: 1.3; }
.ig-caption strong { color: #000; font-weight: 600; }

/* LinkedIn */
.li-mockup { max-width: 500px; width: 100%; margin: 0 auto; background: #fff; border-radius: 8px; border: 1px solid #e0dfdc; font-family: -apple-system, system-ui, sans-serif; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.08); text-align: left; }
.li-header { display: flex; padding: 12px 16px; gap: 8px; align-items: center; }
.li-avatar { width: 48px; height: 48px; border-radius: 4px; background: #E21F26; color:#fff; display:flex; align-items:center; justify-content:center; font-weight:bold; }
.li-meta { flex: 1; display: flex; flex-direction: column; }
.li-name-row { display: flex; align-items: center; justify-content: space-between; }
.li-name { font-size: 14px; font-weight: 600; color: rgba(0,0,0,0.9); }
.li-follow { font-size: 15px; font-weight: 600; color: #0a66c2; cursor: pointer; display:flex; align-items:center; gap:4px; padding:4px 8px; }
.li-follow:hover { background: rgba(10,102,194,0.1); border-radius:4px; }
.li-sub { font-size: 12px; color: rgba(0,0,0,0.6); margin-top: -2px; }
.li-time { font-size: 12px; color: rgba(0,0,0,0.6); display: flex; align-items: center; gap: 4px; margin-top: -2px; }
.li-text { font-size: 14px; color: rgba(0,0,0,0.9); padding: 0 16px 8px; line-height: 1.5; white-space: pre-wrap; }
.li-img { width: 100%; display: block; border-top: 1px solid #e0dfdc; border-bottom: 1px solid #e0dfdc; }
.li-counts { display: flex; justify-content: space-between; padding: 8px 16px; font-size: 12px; color: rgba(0,0,0,0.6); border-bottom: 1px solid #e0dfdc; }
.li-actions { display: flex; justify-content: space-between; padding: 4px 16px; }
.li-btn { display: flex; align-items: center; justify-content: center; gap: 6px; flex: 1; padding: 12px 0; font-size: 14px; font-weight: 600; color: rgba(0,0,0,0.6); border-radius: 4px; cursor: pointer; }
.li-btn:hover { background: #f3f2ef; }
.li-icon { width: 24px; height: 24px; opacity: 0.6; }

/* Facebook */
.fb-mockup { max-width: 500px; width: 100%; margin: 0 auto; background: #fff; border-radius: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.2), 0 20px 40px rgba(0,0,0,0.08); font-family: "Segoe UI", Helvetica, Arial, sans-serif; overflow: hidden; text-align: left; }
.fb-header { display: flex; padding: 12px 16px; gap: 8px; align-items: center; }
.fb-avatar { width: 40px; height: 40px; border-radius: 50%; background: #E21F26; color:#fff; display:flex; align-items:center; justify-content:center; font-weight:bold; }
.fb-meta { flex: 1; }
.fb-name { font-size: 15px; font-weight: 600; color: #050505; }
.fb-time { font-size: 13px; color: #65676B; display: flex; align-items: center; gap: 4px; }
.fb-dots { color: #65676B; font-size: 20px; font-weight:bold; cursor:pointer; padding: 8px; display:flex; align-items:center; }
.fb-text { font-size: 15px; color: #050505; padding: 0 16px 12px; line-height: 1.4; white-space: pre-wrap; }
.fb-img { width: 100%; display: block; }
.fb-counts { display: flex; justify-content: space-between; padding: 10px 16px; font-size: 15px; color: #65676B; border-bottom: 1px solid #ced0d4; }
.fb-actions { display: flex; justify-content: space-between; padding: 4px 16px; }
.fb-btn { display: flex; align-items: center; justify-content: center; gap: 6px; flex: 1; padding: 8px 0; font-size: 15px; font-weight: 600; color: #65676B; border-radius: 4px; cursor: pointer; }
.fb-btn:hover { background: #f0f2f5; }

/* YouTube */
.yt-mockup { max-width: 500px; width: 100%; margin: 0 auto; background: #fff; border: 1px solid #e5e5e5; border-radius: 12px; font-family: "Roboto", Arial, sans-serif; padding: 16px 0 0; box-shadow: 0 20px 40px rgba(0,0,0,0.08); text-align: left; }
.yt-header { display: flex; padding: 0 16px 12px; gap: 12px; align-items: center; }
.yt-avatar { width: 40px; height: 40px; border-radius: 50%; background: #E21F26; color:#fff; display:flex; align-items:center; justify-content:center; font-weight:bold; }
.yt-meta { flex: 1; }
.yt-name { font-size: 14px; font-weight: 500; color: #0f0f0f; }
.yt-time { font-size: 12px; color: #606060; }
.yt-text { font-size: 14px; color: #0f0f0f; padding: 0 16px 12px; line-height: 1.4; white-space: pre-wrap; }
.yt-img-wrap { padding: 0 16px; }
.yt-img { width: 100%; display: block; border-radius: 12px; border: 1px solid #e5e5e5; }
.yt-actions { display: flex; padding: 12px 16px 16px; gap: 8px; align-items: center; }
.yt-pill { display: flex; align-items: center; background: #f2f2f2; border-radius: 18px; padding: 0 12px; height: 36px; font-size: 14px; font-weight: 500; color: #0f0f0f; cursor: pointer; gap:6px; }
.yt-pill:hover { background: #e5e5e5; }
.yt-pill-split { display: flex; align-items: center; background: #f2f2f2; border-radius: 18px; height: 36px; }
.yt-pill-split:hover { background: #e5e5e5; }
.yt-pill-left { display: flex; align-items: center; gap: 6px; padding: 0 12px; font-size: 14px; font-weight: 500; cursor: pointer; }
.yt-pill-sep { width: 1px; height: 24px; background: #d9d9d9; }
.yt-pill-right { display: flex; align-items: center; padding: 0 12px; cursor: pointer; }
`;

if (!css.includes('.pitch-row')) {
  fs.writeFileSync(cssPath, css + '\n' + newCSS);
}

const igSVG_heart = '<svg class="ig-icon" aria-label="Like" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.438-.283-1.791-1.509-4.303-3.752C5.152 14.081 2.5 12.194 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.543 1.117 1.543s.277-.368 1.117-1.543a4.21 4.21 0 0 1 3.675-1.941z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>';
const igSVG_comment = '<svg class="ig-icon" aria-label="Comment" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>';
const igSVG_share = '<svg class="ig-icon" aria-label="Share Post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>';
const igSVG_save = '<svg class="ig-icon" aria-label="Save" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>';
const igSVG_more = '<svg aria-label="More Options" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>';

const liSVG_like = '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="li-icon"><path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.89L8.89 9H4.11A2.12 2.12 0 002 11.12v9A2.12 2.12 0 004.11 22.25h12.58a2.12 2.12 0 002.1-1.78l1.3-7.58a2.1 2.1 0 00-2.09-2.43zM4 20v-9h4v9zm14 0h-8v-9h7a.23.23 0 01.21.2l-1.3 7.58a.2.2 0 01-.19.18z"></path></svg>';
const liSVG_comment = '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="li-icon"><path d="M17 14.5A2.5 2.5 0 0119.5 12a2.5 2.5 0 01-2.5-2.5h-3A2.5 2.5 0 0111.5 12a2.5 2.5 0 012.5 2.5h3z" opacity="0"></path><path d="M7 9h10v1H7zm0 4h7v-1H7zm11-9H6a3 3 0 00-3 3v13.5a1.5 1.5 0 002.56 1.06L9.41 15H18a3 3 0 003-3V7a3 3 0 00-3-3zM6 6h12a1 1 0 011 1v8a1 1 0 01-1 1H9.06a1.5 1.5 0 00-1.06.44L4 19.55V7a1 1 0 011-1z"></path></svg>';
const liSVG_repost = '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="li-icon"><path d="M22 13h-4v-2h2.59l-4.59-4.59A3 3 0 0013.88 5.5l-3.32 1.66-2-4-2.6 1.3A10.15 10.15 0 0110.1 7a3 3 0 004.24.88l4.59 4.59H16v2h6v-6h-2v2.5zM12.1 19.33l3.32-1.66 2 4 2.6-1.3A10.15 10.15 0 0115.9 17a3 3 0 00-4.24-.88l-4.59-4.59H9v-2H3v6h2v-2.59l4.59 4.59A3 3 0 0011.7 18.5l3.32-1.66-2-4z"></path></svg>';
const liSVG_send = '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="li-icon"><path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path></svg>';

const fbSVG_like = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>';
const fbSVG_comment = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>';
const fbSVG_share = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"></path></svg>';

const ytSVG_like = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>';
const ytSVG_dislike = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zM17 2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"></path></svg>';
const ytSVG_share = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"></path></svg>';
const ytSVG_comment = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>';

let html = fs.readFileSync(htmlPath, 'utf8');

// ==== INSTAGRAM CAROUSEL ====
const igMockupHTML = `
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
`;
html = html.replace(/<div style="max-width:420px;margin:64px auto 0;" class="reveal">[\s\S]*?<\/section>\s*<!-- ===== INSTAGRAM REELS SECTION ===== -->/, igMockupHTML + '\n</section>\n\n<!-- ===== INSTAGRAM REELS SECTION ===== -->');


// ==== LINKEDIN REWRITE ====
const liMockupHTML = `
  <div class="pitch-row reveal">
    <div class="pitch-context">
      <div class="pitch-badge">B2B Strategy</div>
      <h3>Cementing Industry Authority</h3>
      <p>LinkedIn is our core channel for communicating with project builders, dealers, and industry professionals. We position AmritCem as a thought leader by sharing deep technical expertise, corporate milestones, and the underlying strength of our manufacturing processes.</p>
    </div>
    <div class="pitch-mockup-wrapper">
      <div class="mockup-inner">
        <div class="li-mockup">
          <div class="li-header">
            <div class="li-avatar">AC</div>
            <div class="li-meta">
              <div class="li-name-row">
                <span class="li-name">AmritCem</span>
                <span class="li-follow"><span style="font-size:18px;">+</span> Follow</span>
              </div>
              <div class="li-sub">Cement Manufacturing · 10,001+ employees</div>
              <div class="li-time">2d • 🌐</div>
            </div>
          </div>
          <div class="li-text">Before the First Pour comes the Five Checks! 🏗️<br><br>At AmritCem, we believe quality construction starts long before the cement is mixed.<br><br>✅ Is the soil, excavation and foundation ready to carry your home?<br>✅ Are the reinforcement, formwork and alignment accurately in place?<br>✅ Is the right concrete mix, grade and quality confirmed?<br>✅ Are plumbing, electrical provisions, equipment and the site ready?<br>✅ Are the conditions right for a strong and lasting Dhalai?</div>
          <img src="assets/pitch-4.jpg" class="li-img" alt="LinkedIn Post">
          <div class="li-counts">
            <div>👍 ❤️ 💡 1,247</div>
            <div>89 comments • 34 reposts</div>
          </div>
          <div class="li-actions">
            <div class="li-btn">${liSVG_like} Like</div>
            <div class="li-btn">${liSVG_comment} Comment</div>
            <div class="li-btn">${liSVG_repost} Repost</div>
            <div class="li-btn">${liSVG_send} Send</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="pitch-row reverse reveal">
    <div class="pitch-context">
      <div class="pitch-badge">Brand Milestone</div>
      <h3>Celebrating Dhalai Diwas</h3>
      <p>A B2B adaptation of the emotional Dhalai Diwas campaign. Here, we speak directly to our vast network of channel partners, contractors, and builders, thanking them for being the silent architects behind thousands of new beginnings.</p>
    </div>
    <div class="pitch-mockup-wrapper">
      <div class="mockup-inner">
        <div class="li-mockup">
          <div class="li-header">
            <div class="li-avatar">AC</div>
            <div class="li-meta">
              <div class="li-name-row">
                <span class="li-name">AmritCem</span>
                <span class="li-follow"><span style="font-size:18px;">+</span> Follow</span>
              </div>
              <div class="li-sub">Cement Manufacturing · 10,001+ employees</div>
              <div class="li-time">5d • 🌐</div>
            </div>
          </div>
          <div class="li-text">Every foundation has many names. Today, we celebrate them all. 🏠<br><br>Dhalai Diwas isn't just a day — it's the beginning of every beginning. It's the moment when a family's dream takes its first concrete step towards reality.<br><br>At AmritCem, we don't just provide cement. We provide the strength that holds memories together.</div>
          <img src="assets/kv-3.jpeg" class="li-img" alt="LinkedIn Post">
          <div class="li-counts">
            <div>👍 ❤️ 🎉 2,891</div>
            <div>156 comments • 67 reposts</div>
          </div>
          <div class="li-actions">
            <div class="li-btn">${liSVG_like} Like</div>
            <div class="li-btn">${liSVG_comment} Comment</div>
            <div class="li-btn">${liSVG_repost} Repost</div>
            <div class="li-btn">${liSVG_send} Send</div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
html = html.replace(/<div style="display:grid;grid-template-columns:1fr 1fr;gap:48px;max-width:1200px;margin:0 auto;">[\s\S]*?<\/section>\s*<!-- ===== FACEBOOK SECTION ===== -->/, liMockupHTML + '\n</section>\n\n<!-- ===== FACEBOOK SECTION ===== -->');


// ==== FACEBOOK REWRITE ====
const fbMockupHTML = `
  <div class="pitch-row reveal">
    <div class="pitch-context">
      <div class="pitch-badge">Festive Connectivity</div>
      <h3>Tapping into Emotions</h3>
      <p>Facebook serves as our mass communication channel for everyday homeowners. By associating AmritCem with regional festivals like Durga Puja, we build deep cultural affinity. We aren't just selling cement; we are part of their celebrations.</p>
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
          <div class="fb-text">🪔 Every masterpiece begins with Devoted Hands and unwavering faith. AmritCem celebrates the artisans who bring both to life.<br><br>Shubho Durga Puja! 🙏</div>
          <img src="assets/pitch-2.jpg" class="fb-img" alt="Facebook Post">
          <div class="fb-counts">
            <div style="display:flex;align-items:center;gap:4px;">
              <div style="background:#0866FF;border-radius:50%;padding:4px;width:18px;height:18px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;">👍</div>
              <div style="background:#F02849;border-radius:50%;padding:4px;width:18px;height:18px;display:flex;align-items:center;justify-content:center;color:#fff;margin-left:-8px;font-size:10px;">❤️</div>
              3.2K
            </div>
            <div>245 Comments · 189 Shares</div>
          </div>
          <div class="fb-actions">
            <div class="fb-btn">${fbSVG_like} Like</div>
            <div class="fb-btn">${fbSVG_comment} Comment</div>
            <div class="fb-btn">${fbSVG_share} Share</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="pitch-row reverse reveal">
    <div class="pitch-context">
      <div class="pitch-badge">Direct Conversion</div>
      <h3>The Dhalai Diwas Anthem</h3>
      <p>We leverage Facebook's hyper-local targeting to push the Dhalai Diwas campaign directly to Individual Home Builders. The messaging balances emotional weight with hard product benefits (Superior Strength, Weather Ready) to drive consideration.</p>
    </div>
    <div class="pitch-mockup-wrapper">
      <div class="mockup-inner">
        <div class="fb-mockup">
          <div class="fb-header">
            <div class="fb-avatar">AC</div>
            <div class="fb-meta">
              <div class="fb-name">AmritCem <span style="color:#0866FF;font-size:12px;">✓</span></div>
              <div class="fb-time">2 days ago · 🌐</div>
            </div>
            <div class="fb-dots">...</div>
          </div>
          <div class="fb-text">Some days build memories. One day builds everything else. 🏗️<br><br>Celebrating the beginning of every beginning — DHALAI DIWAS!<br><br>✅ Superior Strength ✅ Better Durability ✅ Consistent Performance</div>
          <img src="assets/pitch-5.jpg" class="fb-img" alt="Facebook Post">
          <div class="fb-counts">
            <div style="display:flex;align-items:center;gap:4px;">
              <div style="background:#0866FF;border-radius:50%;padding:4px;width:18px;height:18px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;">👍</div>
              <div style="background:#F02849;border-radius:50%;padding:4px;width:18px;height:18px;display:flex;align-items:center;justify-content:center;color:#fff;margin-left:-8px;font-size:10px;">❤️</div>
              5.1K
            </div>
            <div>412 Comments · 298 Shares</div>
          </div>
          <div class="fb-actions">
            <div class="fb-btn">${fbSVG_like} Like</div>
            <div class="fb-btn">${fbSVG_comment} Comment</div>
            <div class="fb-btn">${fbSVG_share} Share</div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
html = html.replace(/<div style="display:grid;grid-template-columns:1fr 1fr;gap:48px;max-width:1200px;margin:0 auto;">[\s\S]*?<\/section>\s*<!-- ===== YOUTUBE SECTION ===== -->/, fbMockupHTML + '\n</section>\n\n<!-- ===== YOUTUBE SECTION ===== -->');


// ==== YOUTUBE REWRITE ====
const ytMockupHTML = `
  <div class="pitch-row reveal">
    <div class="pitch-context">
      <div class="pitch-badge">Community Engagement</div>
      <h3>Visual Checklists</h3>
      <p>YouTube Community Posts allow us to engage subscribers between video uploads. We translate the "Five Checks" educational series into a high-contrast, easily digestible format that stops the scroll on YouTube mobile feeds.</p>
    </div>
    <div class="pitch-mockup-wrapper">
      <div class="mockup-inner">
        <div class="yt-mockup">
          <div class="yt-header">
            <div class="yt-avatar">AC</div>
            <div class="yt-meta">
              <div class="yt-name">AmritCem ✓</div>
              <div class="yt-time">3 days ago</div>
            </div>
            <div style="font-size:24px;color:#0f0f0f;font-weight:bold;margin-top:-10px;">⋮</div>
          </div>
          <div class="yt-text">🏗️ Before the First Pour comes the Five Checks!<br><br>Are you building or renovating? Don't miss these 5 essential checks before your first concrete pour. Save this post and share it with anyone starting their construction journey!</div>
          <div class="yt-img-wrap"><img src="assets/pitch-6.jpg" class="yt-img" alt="YouTube Post"></div>
          <div class="yt-actions">
            <div class="yt-pill-split">
              <div class="yt-pill-left">${ytSVG_like} 1.8K</div>
              <div class="yt-pill-sep"></div>
              <div class="yt-pill-right">${ytSVG_dislike}</div>
            </div>
            <div class="yt-pill">${ytSVG_share} Share</div>
            <div class="yt-pill">${ytSVG_comment} 342</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="pitch-row reverse reveal">
    <div class="pitch-context">
      <div class="pitch-badge">Festival Alignment</div>
      <h3>Vibrant Brand Association</h3>
      <p>By bringing festive greetings to YouTube Community, we maintain a vibrant, active presence. High-fidelity images of Durga Puja mixed with our strong brand red captures attention and drives community likes.</p>
    </div>
    <div class="pitch-mockup-wrapper">
      <div class="mockup-inner">
        <div class="yt-mockup">
          <div class="yt-header">
            <div class="yt-avatar">AC</div>
            <div class="yt-meta">
              <div class="yt-name">AmritCem ✓</div>
              <div class="yt-time">1 week ago</div>
            </div>
            <div style="font-size:24px;color:#0f0f0f;font-weight:bold;margin-top:-10px;">⋮</div>
          </div>
          <div class="yt-text">🪔 Shubho Durga Puja from AmritCem!<br><br>Every masterpiece begins with devoted hands and unwavering faith. This festive season, we celebrate the artisans — the hands that sculpt our temples, build our homes, and pour our foundations.</div>
          <div class="yt-img-wrap"><img src="assets/pitch-3.jpg" class="yt-img" alt="YouTube Post"></div>
          <div class="yt-actions">
            <div class="yt-pill-split">
              <div class="yt-pill-left">${ytSVG_like} 2.4K</div>
              <div class="yt-pill-sep"></div>
              <div class="yt-pill-right">${ytSVG_dislike}</div>
            </div>
            <div class="yt-pill">${ytSVG_share} Share</div>
            <div class="yt-pill">${ytSVG_comment} 518</div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
html = html.replace(/<div style="display:grid;grid-template-columns:1fr 1fr;gap:48px;max-width:1200px;margin:0 auto;">[\s\S]*?<\/section>\s*<!-- ===== KEY VISUALS ===== -->/, ytMockupHTML + '\n</section>\n\n<!-- ===== KEY VISUALS ===== -->');

html = html.replace(/href="style.css\?v=\d+"/, 'href="style.css?v=5"');

fs.writeFileSync(htmlPath, html);
console.log('Successfully updated HTML and CSS to photorealistic mockups WITH new side-by-side layout.');
