const fs = require('fs');
const htmlPath = 'c:/Users/imman/Downloads/Pitch - Amrit Cement [Recovered] Report/brand-pitch/index.html';

const igSVG_heart = '<svg class="ig-icon" aria-label="Like" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.438-.283-1.791-1.509-4.303-3.752C5.152 14.081 2.5 12.194 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.543 1.117 1.543s.277-.368 1.117-1.543a4.21 4.21 0 0 1 3.675-1.941z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>';
const igSVG_comment = '<svg class="ig-icon" aria-label="Comment" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>';
const igSVG_share = '<svg class="ig-icon" aria-label="Share Post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>';
const igSVG_save = '<svg class="ig-icon" aria-label="Save" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>';
const igSVG_more = '<svg aria-label="More Options" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>';

const newPosts = [
  { img: 'new_pitch_1.jpg', cap: 'Before the First Pour comes the Five Checks! ✅ Building right starts here. #AmritCem #FiveChecks' },
  { img: 'new_pitch_2.jpg', cap: 'Are the reinforcement and formwork accurately in place? 🏗️ Build strong with AmritCem.' },
  { img: 'new_pitch_3.jpg', cap: 'Is the right concrete mix and grade confirmed? Quality matters. ✅ #DhalaiReady' },
  { img: 'new_pitch_4.jpg', cap: 'Are plumbing and electrical provisions ready? Plan ahead for a seamless build. ⚡' },
  { img: 'new_pitch_5.jpg', cap: 'Are the conditions right for a strong and lasting Dhalai? ☀️🌧️ #WeatherReady #AmritCem' },
  { img: 'new_pitch_6.jpg', cap: 'Strong foundations create lasting memories. Build your future with AmritCem. 🏠✨' }
];

function getIgMockup(post) {
  return \`
        <div class="ig-mockup" style="max-width: 100%; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-radius: 12px; overflow: hidden; border: 1px solid #e5e5e5; display: flex; flex-direction: column; background: #fff;">
          <div class="ig-header" style="padding: 12px 16px; display:flex; justify-content:space-between; align-items:center;">
            <div class="ig-user-area" style="display:flex; align-items:center; gap:12px;">
              <div class="ig-avatar" style="width: 32px; height: 32px; border-radius: 50%; background: #E21F26; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 11px; font-weight: bold;">AC</div>
              <div class="ig-username" style="font-size: 14px; font-weight: 600; color: #000;">amritcem</div>
            </div>
            <div class="ig-more" style="display:flex; align-items:center;">\${igSVG_more}</div>
          </div>
          
          <img src="assets/\${post.img}" alt="Feed Post" class="ig-image" style="width: 100%; aspect-ratio: 4/5; object-fit: contain; background: #fff; flex:1;">
          
          <div class="ig-action-bar" style="display: flex; align-items: center; justify-content: space-between; padding: 12px 16px 8px;">
            <div class="ig-action-icons" style="display: flex; gap: 16px; align-items: center;">
              \${igSVG_heart}
              \${igSVG_comment}
              \${igSVG_share}
            </div>
            <div>\${igSVG_save}</div>
          </div>
          
          <div class="ig-likes" style="padding: 0 16px; font-size: 14px; font-weight: 600; color: #000; margin-bottom: 6px;">2,847 likes</div>
          <div class="ig-caption" style="padding: 0 16px 16px; font-size: 14px; line-height: 1.5; color: #000;"><strong>amritcem</strong> \${post.cap}</div>
        </div>\`;
}

const igGrid = \`
  <div class="compact-context reveal">
    <h3>Instagram Campaign Layout</h3>
    <p>We present the new 6 campaign creatives specifically tailored for Instagram's engaging feed format. This unifies our message in a single, high-impact scroll.</p>
  </div>
  <div class="mockups-grid reveal">\${newPosts.map(p => getIgMockup(p)).join('')}</div>\`;

const newHtml = \`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AmritCem — Brand Pitch Deck | Cementing Partnerships</title>
  <meta name="description" content="AmritCem brand pitch showcasing social media strategy. Premium cement brand from Northeast India.">
  <link rel="stylesheet" href="style.css?v=14">
</head>
<body>

<!-- ===== NAVIGATION ===== -->
<nav class="nav" id="nav">
  <a href="#" class="nav-logo">
    <img class="theme-logo" src="assets/logo-white.svg" alt="AmritCem" style="height:32px;">
  </a>
  <ul class="nav-links">
    <li><a href="#hero">Overview</a></li>
    <li><a href="#instagram">Social Campaign</a></li>
    <li><a href="#reels">Reels</a></li>
    <li><a href="#visuals">Key Visuals</a></li>
  </ul>
</nav>

<!-- ===== HERO ===== -->
<section class="hero" id="hero">
  <div class="hero-bg-pattern"></div>
  <div class="hero-grid-overlay"></div>
  <div class="hero-content reveal">
    <div class="hero-badge"><span class="dot"></span> Brand Pitch 2026</div>
    <div style="display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:32px;">
      <img class="theme-logo" src="assets/covana-white.png" alt="Covana" style="height:28px;opacity:0.8;">
      <span style="font-size:18px;color:var(--text-muted);">×</span>
      <img class="theme-logo" src="assets/logo-white.svg" alt="AmritCem" style="height:22px;opacity:0.8;">
    </div>
    <h1>Building <span class="accent">Stronger</span> Foundations,<br>One Story at a Time</h1>
    <p class="hero-sub">A comprehensive digital brand strategy for AmritCem — Northeast India's trusted cement brand, crafted to cement partnerships and build legacies.</p>
  </div>
</section>

<!-- ===== INSTAGRAM SECTION ===== -->
<section class="platform-section" id="instagram">
  <div class="platform-header reveal">
    <div class="platform-icon instagram">📷</div>
    <div>
      <div class="platform-name">Instagram</div>
      <div class="platform-tag">@amritcem · Primary Social Channel</div>
    </div>
  </div>

  \${igGrid}

  <div class="pitch-row reveal" style="margin-top: 80px;">
    <div class="pitch-context">
      <h3>The "Five Checks" Carousel</h3>
      <p>A highly engaging, swipeable Instagram carousel designed to establish AmritCem as the absolute authority in home building. By educating homeowners on the critical 5 checks before a concrete pour, we drive saves, shares, and immense brand trust.</p>
    </div>
    <div class="pitch-mockup-wrapper">
      <div class="mockup-inner">
        <div class="ig-mockup" style="max-width:360px;">
          <div class="ig-header">
            <div class="ig-user-area">
              <div class="ig-avatar" style="width: 32px; height: 32px; border-radius: 50%; background: #E21F26; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 11px; font-weight: bold;">AC</div>
              <div class="ig-username">amritcem</div>
            </div>
            <div class="ig-more">\${igSVG_more}</div>
          </div>
          
          <div class="carousel-wrap">
            <div class="carousel-track" id="igCarousel">
              <div class="carousel-slide"><img src="assets/carousel_1.png" alt="Carousel 1" class="ig-image" style="aspect-ratio:4/5; object-fit:contain; background:#fff;"></div>
              <div class="carousel-slide"><img src="assets/carousel_2.png" alt="Carousel 2" class="ig-image" style="aspect-ratio:4/5; object-fit:contain; background:#fff;"></div>
              <div class="carousel-slide"><img src="assets/carousel_3.png" alt="Carousel 3" class="ig-image" style="aspect-ratio:4/5; object-fit:contain; background:#fff;"></div>
              <div class="carousel-slide"><img src="assets/carousel_4.png" alt="Carousel 4" class="ig-image" style="aspect-ratio:4/5; object-fit:contain; background:#fff;"></div>
              <div class="carousel-slide"><img src="assets/carousel_5.png" alt="Carousel 5" class="ig-image" style="aspect-ratio:4/5; object-fit:contain; background:#fff;"></div>
              <div class="carousel-slide"><img src="assets/carousel_6.png" alt="Carousel 6" class="ig-image" style="aspect-ratio:4/5; object-fit:contain; background:#fff;"></div>
            </div>
            <div class="carousel-arrows">
              <button class="carousel-arrow" onclick="moveCarousel('igCarousel',-1)">‹</button>
              <button class="carousel-arrow" onclick="moveCarousel('igCarousel',1)">›</button>
            </div>
          </div>
          
          <div class="ig-action-bar">
            <div class="ig-action-icons">
              \${igSVG_heart}
              \${igSVG_comment}
              \${igSVG_share}
            </div>
            <div class="carousel-nav" id="igCarouselNav" style="margin:0;">
              <button class="carousel-dot active" onclick="goToSlide('igCarousel',0)"></button>
              <button class="carousel-dot" onclick="goToSlide('igCarousel',1)"></button>
              <button class="carousel-dot" onclick="goToSlide('igCarousel',2)"></button>
              <button class="carousel-dot" onclick="goToSlide('igCarousel',3)"></button>
              <button class="carousel-dot" onclick="goToSlide('igCarousel',4)"></button>
              <button class="carousel-dot" onclick="goToSlide('igCarousel',5)"></button>
            </div>
            <div>\${igSVG_save}</div>
          </div>
          
          <div class="ig-likes">4,231 likes</div>
          <div class="ig-caption"><strong>amritcem</strong> Before the first pour — here are the 5 essential checks every homeowner must know 🏠✅ Swipe to learn → #AmritCem</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== INSTAGRAM REELS SECTION ===== -->
<section class="platform-section" id="reels" style="background:#f9f9f9; padding: 80px 48px;">
  <div class="platform-header reveal">
    <div class="platform-icon instagram">🎬</div>
    <div>
      <div class="platform-name">Instagram Reels</div>
      <div class="platform-tag">@amritcem · Short-form Video Content</div>
    </div>
  </div>
  
  <div class="pitch-row reveal">
    <div class="pitch-context">
      <h3>Dynamic Storytelling</h3>
      <p>Reels are the engine for organic growth. We leverage trending audio and rapid-fire visual storytelling to bring the construction process to life. From dramatic before-and-afters to quick maintenance tips, this format allows AmritCem to reach new, highly engaged audiences.</p>
    </div>
    <div class="pitch-mockup-wrapper">
      <div class="mockup-inner">
        <div class="ig-phone" style="max-width:320px;width:100%;box-shadow: 0 20px 40px rgba(0,0,0,0.08); border-radius: 40px; border: 12px solid #000; overflow:hidden;">
          <div class="ig-phone-notch" style="position:absolute; top:0; left:50%; transform:translateX(-50%); width:120px; height:24px; background:#000; border-bottom-left-radius:16px; border-bottom-right-radius:16px; z-index:10;"></div>
          <div class="ig-phone-screen" style="position:relative;">
            <div style="aspect-ratio:9/16;background:linear-gradient(135deg,#f0f2f5 0%,#e4e6e9 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;overflow:hidden;">
              <div id="reelVideoContainer" style="position:absolute;inset:0;display:none;">
                <video id="reelVideo" style="width:100%;height:100%;object-fit:cover;" loop muted playsinline></video>
              </div>
              <div id="reelPlaceholder" style="position:relative;text-align:center;padding:24px;">
                <div style="width:72px;height:72px;border-radius:50%;border:2px solid rgba(200,16,46,0.4);display:flex;align-items:center;justify-content:center;margin:0 auto 16px;background:rgba(200,16,46,0.1);">
                  <span style="font-size:28px;">▶</span>
                </div>
                <div style="font-family:'Outfit',sans-serif;font-size:18px;font-weight:700;margin-bottom:8px;">Reel Coming Soon</div>
                <div style="font-size:13px;color:var(--text-muted);line-height:1.5;">Short-form brand video content<br>will be showcased here</div>
                <label for="reelUpload" style="display:inline-flex;align-items:center;gap:8px;margin-top:20px;padding:10px 24px;border-radius:50px;background:rgba(200,16,46,0.2);border:1px solid rgba(200,16,46,0.4);color:var(--red-primary);font-size:13px;font-weight:600;cursor:pointer;transition:all .3s;">
                  📎 Drop Reel Video
                </label>
                <input type="file" id="reelUpload" accept="video/*" style="display:none;" onchange="loadReelVideo(this)">
              </div>
              <div style="position:absolute;bottom:0;left:0;right:0;padding:16px;background:linear-gradient(transparent,rgba(0,0,0,0.7));">
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
                  <div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,var(--red-primary),var(--gold));display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;color:#fff;">AC</div>
                  <span style="font-size:13px;font-weight:600;color:#fff;">amritcem</span>
                  <span style="font-size:11px;padding:2px 10px;border:1px solid #fff;border-radius:4px;color:#fff;">Follow</span>
                </div>
                <div style="font-size:13px;color:#fff;line-height:1.4;">Building dreams, one foundation at a time 🏗️ #AmritCem #DhalaiDiwas</div>
              </div>
              <div style="position:absolute;right:12px;bottom:80px;display:flex;flex-direction:column;gap:16px;align-items:center;color:#fff;">
                <div style="text-align:center;"><div style="font-size:24px;">♡</div><div style="font-size:11px;font-weight:bold;">24.5K</div></div>
                <div style="text-align:center;"><div style="font-size:24px;">💬</div><div style="font-size:11px;font-weight:bold;">1,847</div></div>
                <div style="text-align:center;"><div style="font-size:24px;">↗</div><div style="font-size:11px;font-weight:bold;">Share</div></div>
                <div style="text-align:center;"><div style="font-size:24px;line-height:1;">⋯</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== KEY VISUALS ===== -->
<section class="section" id="visuals">
  <div class="section-header reveal">
    <div class="section-label">Key Visuals</div>
    <h2 class="section-title">Campaign Hero Imagery</h2>
    <p class="section-desc">High-impact key visuals designed for outdoor, print, and digital media — capturing the essence of Dhalai Diwas.</p>
  </div>
  <div class="kv-showcase">
    <div class="kv-item reveal"><img src="assets/kv-1.jpeg" alt="Dhalai Diwas KV 1"></div>
    <div class="kv-item reveal"><img src="assets/kv-2.jpeg" alt="Dhalai Diwas KV 2"></div>
    <div class="kv-item reveal"><img src="assets/kv-3.jpeg" alt="Dhalai Diwas KV 3"></div>
    <div class="kv-item reveal"><img src="assets/kv-4.jpeg" alt="Dhalai Diwas KV 4"></div>
  </div>
</section>

<!-- ===== FOOTER ===== -->
<footer class="footer">
  <div style="display:flex;align-items:center;gap:12px;">
    <img class="theme-logo" src="assets/covana-white.png" alt="Covana" style="height:20px;opacity:0.6;">
    <span>×</span>
    <img class="theme-logo" src="assets/logo-white.svg" alt="AmritCem" style="height:16px;opacity:0.6;">
  </div>
  <div>© 2026 AmritCem Brand Pitch — Confidential</div>
  <div>Crafted by Covana with precision & strategy</div>
</footer>

<script>
// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Carousel
const carousels = {};
function initCarousel(id) {
  const track = document.getElementById(id);
  if(!track) return;
  carousels[id] = { current: 0, total: track.children.length };
}
function moveCarousel(id, dir) {
  const c = carousels[id];
  c.current = (c.current + dir + c.total) % c.total;
  updateCarousel(id);
}
function goToSlide(id, idx) {
  carousels[id].current = idx;
  updateCarousel(id);
}
function updateCarousel(id) {
  const track = document.getElementById(id);
  const c = carousels[id];
  Array.from(track.children).forEach((s, i) => {
    s.style.transform = \`translateX(-\${c.current * 100}%)\`;
  });
  const navId = id + 'Nav';
  const nav = document.getElementById(navId);
  if(nav) {
    Array.from(nav.children).forEach((dot, i) => {
      dot.classList.toggle('active', i === c.current);
    });
  }
}

// Instagram Carousel
function initIgCarousel() {
  const track = document.querySelector('.ig-carousel-track');
  const prevBtn = document.querySelector('.ig-prev');
  const nextBtn = document.querySelector('.ig-next');
  const dots = document.querySelectorAll('.ig-dot');
  if(!track || !prevBtn || !nextBtn) return;
  
  let currentSlide = 0;
  const totalSlides = 6;

  function update() {
    track.style.transform = \`translateX(-\${currentSlide * 16.666}%)\`;
    dots.forEach((dot, index) => {
      if(index === currentSlide) {
        dot.style.background = '#0095F6';
        dot.style.transform = 'scale(1.2)';
        dot.classList.add('active');
      } else {
        dot.style.background = 'rgba(0,0,0,0.15)';
        dot.style.transform = 'scale(1)';
        dot.classList.remove('active');
      }
    });
    prevBtn.style.display = currentSlide === 0 ? 'none' : 'block';
    nextBtn.style.display = currentSlide === totalSlides - 1 ? 'none' : 'block';
  }

  prevBtn.addEventListener('click', () => {
    if(currentSlide > 0) {
      currentSlide--;
      update();
    }
  });

  nextBtn.addEventListener('click', () => {
    if(currentSlide < totalSlides - 1) {
      currentSlide++;
      update();
    }
  });
}
document.addEventListener('DOMContentLoaded', initIgCarousel);

// Nav scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('nav').style.padding =
    window.scrollY > 50 ? '10px 48px' : '16px 48px';
});

// Reel video upload handler
function loadReelVideo(input) {
  if(input.files && input.files[0]) {
    const url = URL.createObjectURL(input.files[0]);
    const container = document.getElementById('reelVideoContainer');
    const video = document.getElementById('reelVideo');
    const placeholder = document.getElementById('reelPlaceholder');
    video.src = url;
    container.style.display = 'block';
    placeholder.style.display = 'none';
    video.play();
  }
}

// Init
initCarousel('igCarousel');
</script>
</body>
</html>\`;

fs.writeFileSync(htmlPath, newHtml);
console.log('Successfully consolidated to one platform and injected all 6 new posts.');
