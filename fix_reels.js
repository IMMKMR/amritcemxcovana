const fs = require('fs');
const htmlPath = 'c:/Users/imman/Downloads/Pitch - Amrit Cement [Recovered] Report/brand-pitch/index.html';

let html = fs.readFileSync(htmlPath, 'utf8');

const newReelsSection = `
  <div class="pitch-row reveal">
    <div class="pitch-context">
      <div class="pitch-badge">Short-form Video</div>
      <h3>Dynamic Storytelling</h3>
      <p>Reels are the engine for organic growth. We leverage trending audio and rapid-fire visual storytelling to bring the construction process to life. From dramatic before-and-afters to quick maintenance tips, this format allows AmritCem to reach new, highly engaged audiences.</p>
    </div>
    <div class="pitch-mockup-wrapper">
      <div class="mockup-inner">
        <div class="ig-phone" style="max-width:320px;width:100%;box-shadow: 0 20px 40px rgba(0,0,0,0.08);">
          <div class="ig-phone-notch"></div>
          <div class="ig-phone-screen" style="position:relative;">
            <div style="aspect-ratio:9/16;background:linear-gradient(135deg,#f0f2f5 0%,#e4e6e9 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;overflow:hidden;">
              <div style="position:absolute;inset:0;background:radial-gradient(circle at 50% 40%,rgba(200,16,46,0.15),transparent 60%);"></div>
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
              <!-- Reel UI overlay -->
              <div style="position:absolute;bottom:0;left:0;right:0;padding:16px;background:linear-gradient(transparent,rgba(0,0,0,0.7));">
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
                  <div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,var(--red-primary),var(--gold));display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;color:#fff;">AC</div>
                  <span style="font-size:13px;font-weight:600;color:#fff;">amritcem</span>
                  <span style="font-size:11px;padding:2px 10px;border:1px solid #fff;border-radius:4px;color:#fff;">Follow</span>
                </div>
                <div style="font-size:13px;color:#fff;line-height:1.4;">Building dreams, one foundation at a time 🏗️ #AmritCem #DhalaiDiwas</div>
              </div>
              <!-- Side actions -->
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
`;

// Replace everything between <div style="max-width:380px;margin:0 auto;" class="reveal">
// and </section> \n\n<!-- ===== LINKEDIN SECTION ===== -->
const reelRegex = /<div style="max-width:380px;margin:0 auto;" class="reveal">[\s\S]*?<\/section>\s*<!-- ===== LINKEDIN SECTION ===== -->/;

html = html.replace(reelRegex, newReelsSection + '\n</section>\n\n<!-- ===== LINKEDIN SECTION ===== -->');

fs.writeFileSync(htmlPath, html);
console.log('Successfully applied side-by-side pitch layouts to Reels.');
