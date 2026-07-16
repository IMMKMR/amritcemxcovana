const fs = require('fs');

const htmlPath = 'c:/Users/imman/Downloads/Pitch - Amrit Cement [Recovered] Report/brand-pitch/index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

// Find the Reels mockup section
const startStr = '<div class="ig-phone-screen" style="position:relative;">';
const endStr = '<!-- ===== KEY VISUALS ===== -->'; // Since the flow was reordered, Reels is now right before Statics
// Wait, after reordering, Reels is right before `<section class="platform-section" id="statics"`

const startIdx = html.indexOf(startStr);
const endIdx = html.indexOf('<section class="platform-section" id="statics"', startIdx);

if (startIdx !== -1 && endIdx !== -1) {
  let reelsChunk = html.substring(startIdx, endIdx);

  // We want to replace everything inside the screen container (the aspect-ratio div) up to the closing div of ig-phone-screen.
  // The structure is:
  // <div class="ig-phone-screen" style="position:relative;">
  //   <div style="aspect-ratio:9/16;background:...">
  //     <div id="reelVideoContainer"...>...</div>
  //     <div id="reelPlaceholder"...>...</div>
  //     <div style="position:absolute;bottom:0;...">...</div> <!-- text -->
  //     <div style="position:absolute;right:12px;...">...</div> <!-- icons -->
  //   </div>
  // </div>
  // </div> <!-- end ig-phone -->

  const newReelsContent = `
          <div class="ig-phone-screen" style="position:relative;">
            <div style="aspect-ratio:9/16;background:#000;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;overflow:hidden; cursor:pointer;" onclick="const v = document.getElementById('reelVideo'); if(v.requestFullscreen) v.requestFullscreen(); else if(v.webkitRequestFullscreen) v.webkitRequestFullscreen();">
              <div id="reelVideoContainer" style="position:absolute;inset:0;">
                <video id="reelVideo" src="assets/reel-video.mp4" style="width:100%;height:100%;object-fit:cover;" autoplay loop muted playsinline controls></video>
              </div>
              <div style="position:absolute;top:32px;right:16px;background:rgba(0,0,0,0.5);color:#fff;padding:4px 8px;border-radius:4px;font-size:12px;font-weight:bold;z-index:20;display:flex;align-items:center;gap:4px;">
                <span>⛶</span> Fullscreen
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

`;

  // We need to carefully replace just the `ig-phone-screen` block and its closing tags.
  // Actually, it's easier to just rebuild the entire Reels `<section>` because it's completely isolated.
  const sectionStart = html.indexOf('<section class="platform-section" id="reels"');
  const sectionEnd = html.indexOf('</section>', sectionStart) + 10;
  
  const newSection = `
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
            <div style="aspect-ratio:9/16;background:#000;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;overflow:hidden;">
              
              <div id="reelVideoContainer" style="position:absolute;inset:0;">
                <video id="reelVideo" src="assets/reel-video.mp4" style="width:100%;height:100%;object-fit:cover;cursor:pointer;" autoplay loop muted playsinline onclick="if(this.paused){this.play();}else{this.pause();}"></video>
              </div>

              <!-- Fullscreen button overlay -->
              <button onclick="const v = document.getElementById('reelVideo'); if(v.requestFullscreen) { v.requestFullscreen(); v.muted=false; } else if(v.webkitRequestFullscreen) { v.webkitRequestFullscreen(); v.muted=false; }" style="position:absolute;top:36px;right:16px;background:rgba(0,0,0,0.6);color:#fff;border:1px solid rgba(255,255,255,0.3);padding:6px 12px;border-radius:20px;font-size:11px;font-weight:600;z-index:20;display:flex;align-items:center;gap:6px;cursor:pointer;backdrop-filter:blur(4px);">
                ⛶ Fullscreen
              </button>
              
              <!-- Mute/Unmute button overlay -->
              <button onclick="const v = document.getElementById('reelVideo'); v.muted = !v.muted; this.innerText = v.muted ? '🔇 Muted' : '🔊 Sound On';" style="position:absolute;top:36px;left:16px;background:rgba(0,0,0,0.6);color:#fff;border:1px solid rgba(255,255,255,0.3);padding:6px 12px;border-radius:20px;font-size:11px;font-weight:600;z-index:20;display:flex;align-items:center;gap:6px;cursor:pointer;backdrop-filter:blur(4px);">
                🔇 Muted
              </button>

              <div style="position:absolute;bottom:0;left:0;right:0;padding:16px;background:linear-gradient(transparent,rgba(0,0,0,0.8));z-index:10;pointer-events:none;">
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
                  <div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,var(--red-primary),var(--gold));display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;color:#fff;">AC</div>
                  <span style="font-size:13px;font-weight:600;color:#fff;">amritcem</span>
                  <span style="font-size:11px;padding:2px 10px;border:1px solid #fff;border-radius:4px;color:#fff;">Follow</span>
                </div>
                <div style="font-size:13px;color:#fff;line-height:1.4;">Building dreams, one foundation at a time 🏗️ #AmritCem #DhalaiDiwas</div>
              </div>
              <div style="position:absolute;right:12px;bottom:80px;display:flex;flex-direction:column;gap:16px;align-items:center;color:#fff;z-index:10;pointer-events:none;">
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
</section>`;

  html = html.substring(0, sectionStart) + newSection + html.substring(sectionEnd);
  
  // Also clean up the old loadReelVideo script block since we no longer need it
  html = html.replace(/\/\/ Reel video upload handler[\s\S]*?\}\n\}/g, '');
  
  fs.writeFileSync(htmlPath, html);
  console.log('Successfully injected video and fullscreen logic.');
} else {
  console.log('Could not find Reels section.');
}
