// ================================================
// CivicSahayak — anim.js
// Heavy interactive animations. Pure JS, zero deps.
// Author: Vedant Shinde (github.com/vedant131)
// ================================================
(function () {
  'use strict';

  /* ── 1. MAGNETIC CARD TILT ────────────────────
     All .ftile, .stc, .rcard, .hcard tilt toward cursor */
  function initTilt() {
    const SEL = '.ftile, .stc, .rcard, .hcard, .prob-card, .lcard';
    document.querySelectorAll(SEL).forEach(attachTilt);

    // Re-attach for lazily rendered panels
    const obs = new MutationObserver(() => {
      document.querySelectorAll(SEL).forEach(el => {
        if (!el._tilt) attachTilt(el);
      });
    });
    obs.observe(document.body, { childList: true, subtree: true });
  }

  function attachTilt(el) {
    el._tilt = true;
    const MAX = 12;

    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width  - 0.5) * 2;
      const y = ((e.clientY - r.top)  / r.height - 0.5) * 2;
      const rx =  -y * MAX;
      const ry =   x * MAX;
      const bx = (-x * 8).toFixed(1);
      const by = (-y * 8).toFixed(1);
      el.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`;
      el.style.boxShadow = `${bx}px ${by}px 28px rgba(244,101,26,.18), 0 4px 16px rgba(15,22,41,.1)`;
      // Shine layer
      const shine = el.querySelector('._shine') || createShine(el);
      const shineX = ((e.clientX - r.left) / r.width  * 100).toFixed(1);
      const shineY = ((e.clientY - r.top)  / r.height * 100).toFixed(1);
      shine.style.background = `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255,255,255,.22) 0%, transparent 60%)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
      el.style.boxShadow = '';
      const shine = el.querySelector('._shine');
      if (shine) shine.style.background = 'transparent';
    });
  }

  function createShine(el) {
    const s = document.createElement('div');
    s.className = '_shine';
    s.style.cssText = 'position:absolute;inset:0;border-radius:inherit;pointer-events:none;transition:background .1s;z-index:10;';
    el.style.position = el.style.position || 'relative';
    el.appendChild(s);
    return s;
  }

  /* ── 2. CLICK BURST ───────────────────────────
     Particle explosion on every button / nav click */
  function initClickBurst() {
    document.addEventListener('click', e => {
      const tgt = e.target.closest('button, .ni, .wbtn, .abbtn, .wbtn2, .elig-btn, .ftile, .rcard');
      if (!tgt) return;
      burst(e.clientX, e.clientY, getComputedStyle(tgt).color || '#F4651A');
    });
  }

  function burst(cx, cy, baseColor) {
    const COLORS = ['#F4651A','#FF7A35','#0B7B6B','#1B4FD8','#D97706','#7C3AED','#16803C'];
    const count = 12 + Math.floor(Math.random() * 8);
    for (let i = 0; i < count; i++) {
      const dot = document.createElement('div');
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const size  = 4 + Math.random() * 7;
      const angle = (i / count) * Math.PI * 2 + Math.random() * .5;
      const dist  = 40 + Math.random() * 70;
      const tx    = Math.cos(angle) * dist;
      const ty    = Math.sin(angle) * dist;
      dot.style.cssText = `
        position:fixed; left:${cx}px; top:${cy}px;
        width:${size}px; height:${size}px; border-radius:50%;
        background:${color}; pointer-events:none; z-index:99999;
        transform:translate(-50%,-50%);
        transition:transform ${.4+Math.random()*.3}s cubic-bezier(.16,1,.3,1),
                   opacity   ${.4+Math.random()*.2}s ease;
      `;
      document.body.appendChild(dot);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          dot.style.transform = `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(0)`;
          dot.style.opacity = '0';
        });
      });
      setTimeout(() => dot.remove(), 700);
    }
  }

  /* ── 3. RIPPLE ON BUTTONS ─────────────────────
     Material-style ink ripple */
  function initRipple() {
    const SEL = 'button, .wbtn, .abbtn, .wbtn2, .elig-btn, .dt, .ni, .hc-call';
    document.addEventListener('pointerdown', e => {
      const tgt = e.target.closest(SEL);
      if (!tgt) return;
      const r = tgt.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const rip = document.createElement('span');
      const size = Math.max(r.width, r.height) * 2.2;
      rip.style.cssText = `
        position:absolute; border-radius:50%; pointer-events:none;
        width:${size}px; height:${size}px;
        left:${x - size/2}px; top:${y - size/2}px;
        background:rgba(255,255,255,.35);
        transform:scale(0); opacity:1;
        animation:_rippleAnim .55s cubic-bezier(.16,1,.3,1) forwards;
      `;
      if (getComputedStyle(tgt).position === 'static') tgt.style.position = 'relative';
      tgt.style.overflow = 'hidden';
      tgt.appendChild(rip);
      setTimeout(() => rip.remove(), 600);
    });

    // ripple keyframe is in static CSS
  }

  /* ── 4. TEXT SCRAMBLE on panel title ─────────
     Letters scramble → resolve on every panel switch */
  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

  function scramble(el, finalText, duration) {
    const steps = Math.ceil(duration / 40);
    let frame = 0;
    const interval = setInterval(() => {
      const resolved = Math.floor((frame / steps) * finalText.length);
      el.textContent = finalText
        .split('')
        .map((ch, i) => {
          if (ch === ' ') return ' ';
          if (i < resolved) return ch;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join('');
      frame++;
      if (frame > steps) {
        el.textContent = finalText;
        clearInterval(interval);
      }
    }, 40);
  }

  /* ── 5. TYPEWRITER for hero heading ──────────── */
  function typewriter(el, text, speed) {
    el.textContent = '';
    let i = 0;
    // Create cursor
    const cursor = document.createElement('span');
    cursor.style.cssText = 'display:inline-block;width:3px;height:.9em;background:rgba(255,255,255,.8);margin-left:2px;vertical-align:middle;animation:_blink .7s step-end infinite;';
    // blink keyframe is in static CSS

    function tick() {
      if (i <= text.length) {
        // Handle <br> and <em> tags
        el.innerHTML = text.slice(0, i).replace(/\n/g, '<br>') + cursor.outerHTML;
        i++;
        setTimeout(tick, speed + Math.random() * 30);
      } else {
        el.innerHTML = text.replace(/\n/g, '<br>');
      }
    }
    setTimeout(tick, 300);
  }



  /* ── 7. STAGGER CHILDREN on panel enter ──────── */
  function staggerPanel(panel) {
    const items = panel.querySelectorAll(
      '.ftile, .stc, .rcard, .hcard, .prob-card, .lcard, .gi-portal, .trt-step, .rsch, .dstep, .icard'
    );
    items.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(22px)';
      el.style.transition = 'none';
      setTimeout(() => {
        el.style.transition = `opacity .35s cubic-bezier(.16,1,.3,1) ${i*45}ms, transform .4s cubic-bezier(.34,1.56,.64,1) ${i*45}ms`;
        el.style.opacity = '1';
        el.style.transform = '';
      }, 20);
    });
  }

  /* ── 8. NAV ITEM RIPPLE TRAIL ─────────────────
     Orange trail dots follow active nav highlight */
  function initNavTrail() {
    const nav = document.querySelector('.sb-nav');
    if (!nav) return;
    nav.addEventListener('click', e => {
      const ni = e.target.closest('.ni');
      if (!ni) return;
      const r = ni.getBoundingClientRect();
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          const dot = document.createElement('div');
          dot.style.cssText = `
            position:fixed; z-index:9999; pointer-events:none; border-radius:50%;
            width:8px; height:8px; background:var(--or);
            left:${r.right - 16 + (Math.random()-0.5)*20}px;
            top:${r.top + r.height/2 + (Math.random()-0.5)*14}px;
            animation:_navDot .5s ease-out forwards;
          `;
          document.body.appendChild(dot);
          setTimeout(() => dot.remove(), 500);
        }, i * 60);
      }
    });

    // navDot keyframe is in static CSS
  }

  /* ── 9. STAT CARD WOBBLE on hover ─────────────
     Spring wobble when you enter a stat card */
  function initStatWobble() {
    document.querySelectorAll('.stc').forEach(el => {
      el.addEventListener('mouseenter', () => {
        const ico = el.querySelector('.stc-ico');
        if (!ico) return;
        ico.style.animation = 'none';
        ico.offsetHeight; // reflow
        ico.style.animation = 'jelly .5s cubic-bezier(.34,1.56,.64,1)';
      });
    });
  }

  /* ── 10. SCROLL-WITHIN PANEL REVEAL ──────────── */
  function initScrollReveal() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    function observeItems() {
      document.querySelectorAll('.box, .portal-row, .mblock').forEach(el => {
        if (el._observed) return;
        el._observed = true;
        el.style.opacity = '0';
        el.style.transform = 'translateY(18px)';
        el.style.transition = 'opacity .4s cubic-bezier(.16,1,.3,1), transform .45s cubic-bezier(.34,1.56,.64,1)';
        observer.observe(el);
      });
    }
    observeItems();

    const panelObs = new MutationObserver(observeItems);
    panelObs.observe(document.body, { childList: true, subtree: true });
  }

  /* ── 11. HERO HEADING TYPEWRITER ──────────────
     Runs once on load */
  function initHeroTyper() {
    const h = document.querySelector('.wb-h');
    if (!h) return;
    const text = h.innerText || h.textContent;
    typewriter(h, text, 38);
  }

  /* ── 12. PANEL TITLE SCRAMBLE ─────────────────
     Hooked into go() navigation */
  function hookGoScramble() {
    const origGo = window.go;
    if (!origGo) return;
    window.go = function(id) {
      origGo(id);
      requestAnimationFrame(() => {
        const title = document.getElementById('abar-title');
        if (title) scramble(title, title.textContent, 420);

        const panel = document.getElementById('p-' + id);
        if (panel) staggerPanel(panel);
      });
    };
  }

  /* ── 13. MAGNETIC BUTTONS ─────────────────────
     Buttons gently pull toward cursor within 60px */
  function initMagneticButtons() {
    document.querySelectorAll('.wbtn, .abbtn.pri, .elig-btn, .ai-send').forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const r = btn.getBoundingClientRect();
        const cx = r.left + r.width  / 2;
        const cy = r.top  + r.height / 2;
        const dx = (e.clientX - cx) * .28;
        const dy = (e.clientY - cy) * .28;
        btn.style.transform = `translate(${dx}px,${dy}px) scale(1.06)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
        btn.style.transition = 'transform .4s cubic-bezier(.34,1.56,.64,1)';
      });
    });
  }

  /* ── 14. HERO BADGE COUNTER ───────────────────
     Random scheme count flickers every few seconds */
  function initHeroBadge() {
    const badge = document.querySelector('.wb-badge');
    if (!badge) return;
    const base = badge.textContent;
    setInterval(() => {
      badge.style.transform = 'scale(.92)';
      badge.style.transition = 'transform .15s';
      setTimeout(() => { badge.style.transform = 'scale(1)'; }, 150);
    }, 3500);
  }

  /* ── 15. SCHEME CARD ENTRY BURST ──────────────
     When eligibility results render, cards pop in with burst */
  function watchEligibilityResults() {
    const obs = new MutationObserver(mutations => {
      mutations.forEach(m => {
        m.addedNodes.forEach(node => {
          if (node.nodeType === 1 && node.classList && node.classList.contains('rsch')) {
            const i = Array.from(node.parentNode.children).indexOf(node);
            node.style.animationDelay = `${i * 60}ms`;
          }
        });
      });
    });
    const grid = document.getElementById('er-grid');
    if (grid) obs.observe(grid, { childList: true });
    // Re-check after render
    const panelObs = new MutationObserver(() => {
      const g2 = document.getElementById('er-grid');
      if (g2 && !g2._obs) { g2._obs = true; obs.observe(g2, { childList: true }); }
    });
    panelObs.observe(document.body, { childList: true, subtree: true });
  }

    /* ── INIT ─────────────────────────────────────── */
  function init() {
    initTilt();
    initClickBurst();
    initRipple();
    initNavTrail();
    initStatWobble();
    initScrollReveal();
    hookGoScramble();
    initMagneticButtons();
    initHeroBadge();
    watchEligibilityResults();

    // Hero typewriter on first load
    setTimeout(initHeroTyper, 200);

  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 0);
  }
})();
