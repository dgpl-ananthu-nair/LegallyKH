(() => {
  if (window.__mate) return; window.__mate = true;
  const NAVY = '#1d2a4a', SAFF = '#d9772b', GREEN = '#2f6b45', CREAM = '#f7f4ec', CHAKRA = '#000080';
  const LS = k => { try { return localStorage.getItem('mate-' + k); } catch (e) { return null; } };
  const SS = (k, v) => { try { localStorage.setItem('mate-' + k, v); } catch (e) {} };
  const page = /article/i.test(location.pathname) ? 'article' : /papers/i.test(location.pathname) ? 'papers' : /case/i.test(location.pathname) ? 'cases' : 'home';

  const QUIPS = [
    'Article 21 is my favourite. Life, liberty and long naps.',
    'Fun fact: the original Constitution was handwritten, not typed.',
    'Objection! …sorry, reflex.',
    'Click me and pick \u201cAsk me\u201d. I can sniff out any article or case.',
    'Drag me anywhere. I\u2019m very portable.',
    'You read three articles. That deserves a treat. For me.',
    'Woof means “read Maneka Gandhi again”.',
    'Kesavananda Bharati was heard for 68 days. I can nap longer.',
    'Press / to search. I won\u2019t tell anyone you forgot Art. 356.',
    'Basic structure: can\u2019t be amended. Like my love for belly rubs.',
    'Ambedkar called Article 32 the heart and soul. Mine is treats.',
    'Psst. The papers page shows what KSLU loves to ask.',
    '395 articles at the start. I\u2019ve read about four.',
    'Stand up, stretch. Article 19(1)(d) says you may move freely.'
  ];

  const TOURS = {
    home: [
      [null, 'Namaste! I\u2019m Laddoo, your study pup. Let me show you around this map of the Constitution.'],
      ['nav', 'This bar stays on top. Tap any Part number to jump straight to it.'],
      ['input[placeholder^="Search"]', 'Search anything here: an article number, a case name or a topic. Press / from anywhere.'],
      ['a[id^="part-"]', 'Every Part header opens a summary page. A \u2197 means there\u2019s a detailed page behind it.'],
      ['a[href*="Article"][style*="grid-template-columns:50px"]', 'Click any article for its text, key points, cases in IRAC and exam questions.'],
      ['a[href*="Case"]', 'Cases A\u2013Z lists every case on the site, linked to its articles.'],
      ['a[href*="Papers"], a[href*="papers"]', 'Past KSLU papers live here, mapped to articles and units.'],
      [null, 'That\u2019s it! Click me any time for the tour again, or to tell me to be quiet.']
    ],
    article: [
      [null, 'This is an article page. Here\u2019s how to read it.'],
      ['main h1', 'The article\u2019s heading. The badges beside it show which semester and unit it belongs to.'],
      ['main section', 'First, what it says, in plain words.'],
      ['main article', 'Cases are laid out as Issue, Rule, Application, Conclusion. Perfect for answers.'],
      ['main footer', 'Use previous and next to walk through the Part in order.'],
      [null, 'Good luck. Read the IRAC aloud, it sticks better.']
    ],
    papers: [
      [null, 'These are real KSLU question papers, transcribed.'],
      ['button', 'Switch semesters here.'],
      ['main section', 'Each unit shows how many questions it attracted. Start with the big numbers.'],
      [null, 'Every question links to its article page. Happy revising!']
    ],
    cases: [
      [null, 'Every case on the site, sorted A to Z.'],
      ['main input', 'Type a party name, citation or article to filter.'],
      ['main section', 'Each case links to every article it\u2019s discussed under.'],
      [null, 'Tip: test yourself by covering the article tags.']
    ]
  };

  const css = `
  :host{all:initial;font-family:'Noto Sans',system-ui,sans-serif;font-stretch:87.5%}
  .bubble,.peek,.tab,.ask input{font-family:'Noto Sans',system-ui,sans-serif}
  *{box-sizing:border-box}
  .wrap{position:fixed;bottom:10px;left:0;z-index:2147483000;width:84px;height:92px;transition-property:left,bottom;transition-duration:2.6s;transition-timing-function:ease-in-out;touch-action:none;pointer-events:auto;font-family:'Noto Sans',system-ui,sans-serif}
  .wrap.fast{transition:left .9s cubic-bezier(.5,0,.3,1),bottom .9s cubic-bezier(.5,0,.3,1)}
  .body{position:absolute;inset:0;cursor:pointer;transform-origin:50% 100%}
  .flip .owl{transform:scaleX(-1)}
  .owl{width:84px;height:92px;display:block;transition:transform .3s}
  .walk .body{animation:bob .38s ease-in-out infinite}
  .drag{transition:none!important}
  .drag .body{cursor:grabbing;animation:dangle .5s ease-in-out infinite!important}
  @keyframes dangle{0%,100%{transform:rotate(-7deg) scale(1.05)}50%{transform:rotate(7deg) scale(1.05)}}
  .tab{position:fixed;right:0;bottom:18px;z-index:2147483000;display:none;align-items:center;gap:6px;padding:7px 12px 7px 10px;background:${NAVY};color:${CREAM};border:0;border-left:3px solid ${SAFF};font:600 12px/1 'Noto Sans Mono',monospace;letter-spacing:.06em;cursor:pointer;box-shadow:0 4px 14px rgba(29,42,74,.25);transform:translateX(62%);transition:transform .25s}
  .tab:hover,.tab:focus-visible{transform:none}
  .tab svg{width:16px;height:16px;flex:none}
  .peek{position:fixed;z-index:2147483000;width:84px;height:92px;display:none;cursor:pointer;transition:transform .6s cubic-bezier(.3,1.5,.5,1)}
  .peek.on .owl{animation:tilt 1.5s ease-in-out infinite;transform-origin:50% 60%}
  .peek .lid{animation:pblink 2.4s infinite}
  .peek .tongue{transform:scaleY(1)}
  @keyframes tilt{0%,100%{transform:rotate(-7deg)}50%{transform:rotate(7deg)}}
  @keyframes pblink{0%,44%,52%,100%{opacity:0}48%{opacity:1}}
  .bubble.chat{width:340px;max-width:calc(100vw - 20px)}
  .log{max-height:260px;overflow:auto;display:flex;flex-direction:column;gap:6px;margin:2px 0 8px}
  .m{padding:6px 9px;font-size:13.5px;line-height:1.45;text-wrap:pretty}
  .m.you{align-self:flex-end;background:${NAVY};color:${CREAM};max-width:85%}
  .m.dog{align-self:flex-start;background:#fff;border:1px solid #e0d9c8;max-width:96%}
  .m a{color:${NAVY};font-weight:600;text-decoration:underline;text-decoration-color:${SAFF};text-underline-offset:2px}
  .m a:hover{color:${SAFF}}
  .m .hit{display:block;padding:4px 0 2px;border-top:1px dashed #e0d9c8;margin-top:4px}
  .m small{color:#5b6273}
  .ask{display:flex;gap:6px}
  .ask input{flex:1;min-width:0;font:14px 'Noto Sans',system-ui,sans-serif;padding:7px 9px;border:1.5px solid ${NAVY};background:#fff;color:${NAVY};outline:none;border-radius:0}
  .ask input:focus{border-color:${SAFF}}
  .ask button{font:600 12px/1 'Noto Sans Mono',monospace;padding:0 12px;border:1.5px solid ${NAVY};background:${NAVY};color:${CREAM};cursor:pointer}
  .ask button:hover{background:${SAFF};border-color:${SAFF}}
  .idle .body{animation:breathe 3.2s ease-in-out infinite}
  .owl{filter:drop-shadow(0 0 .6px rgba(211,154,92,.6))}
  .sleep .body{animation:breathe 4.5s ease-in-out infinite}
  .hop .body{animation:hop .6s ease-out 2}
  .spin .chakra{animation:spin 1.2s linear 2;transform-origin:42px 68px}
  .spin .body{animation:chase 1.1s ease-in-out 2}
  .tail{transform-origin:60px 74px;animation:wag .45s ease-in-out infinite}
  .sleep .tail{animation:none;transform:rotate(18deg)}
  .walk .ear-l,.hop .ear-l{animation:flop .38s ease-in-out infinite;transform-origin:22px 27px;transform-box:view-box}
  .walk .ear-r,.hop .ear-r{animation:flop .38s ease-in-out infinite reverse;transform-origin:62px 27px;transform-box:view-box}
  .tongue{transform-origin:42px 49px;transition:transform .2s}
  .sleep .tongue{transform:scaleY(0)}
  .wave .wing-r{animation:wave .35s ease-in-out 5;transform-origin:49px 69px}
  .lid{transition:opacity .1s;opacity:0}
  .blink .lid,.sleep .lid{opacity:1}
  .z{position:absolute;right:-4px;top:-6px;font:700 15px/1 'Noto Serif',Georgia,serif;color:${NAVY};opacity:0}
  .sleep .z{animation:zz 2.4s ease-in infinite}
  .sleep .z:nth-child(2){animation-delay:.8s;font-size:12px}
  .sleep .z:nth-child(3){animation-delay:1.6s;font-size:10px}
  @keyframes bob{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-4px) rotate(3deg)}}
  @keyframes breathe{0%,100%{transform:scale(1,1)}50%{transform:scale(1.03,.97)}}
  @keyframes hop{0%{transform:translateY(0)}40%{transform:translateY(-26px) scale(.95,1.05)}70%{transform:translateY(0) scale(1.08,.92)}100%{transform:none}}
  @keyframes spin{to{transform:rotate(360deg)}}
  @keyframes wave{0%,100%{transform:rotate(0)}50%{transform:rotate(-140deg)}}
  @keyframes wag{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(16deg)}}
  @keyframes flop{0%,100%{transform:rotate(0)}50%{transform:rotate(9deg)}}
  @keyframes chase{0%,100%{transform:scaleX(1)}25%{transform:scaleX(-1) translateY(-6px)}50%{transform:scaleX(1)}75%{transform:scaleX(-1) translateY(-6px)}}
  @keyframes zz{0%{opacity:0;transform:translate(0,0)}30%{opacity:1}100%{opacity:0;transform:translate(14px,-30px)}}
  .bubble{position:fixed;z-index:2147483001;max-width:280px;background:${CREAM};color:${NAVY};border:1.5px solid ${NAVY};padding:10px 12px;font-size:14px;line-height:1.45;box-shadow:0 6px 20px rgba(29,42,74,.18);opacity:0;transform:translateY(6px);transition:opacity .25s,transform .25s;pointer-events:none}
  .bubble.on{opacity:1;transform:none;pointer-events:auto}
  .bubble b{font-family:'Noto Serif',Georgia,serif}
  .bubble .tag{display:block;font:600 10.5px/1 'Noto Sans Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:${SAFF};margin-bottom:5px}
  .row{display:flex;gap:6px;margin-top:9px;flex-wrap:wrap}
  .row button{font:600 12px/1 'Noto Sans Mono',monospace;padding:6px 9px;border:1.5px solid ${NAVY};background:transparent;color:${NAVY};cursor:pointer}
  .row button.p{background:${NAVY};color:${CREAM}}
  .row button:hover{background:${SAFF};border-color:${SAFF};color:#fff}
  .dots{margin-left:auto;align-self:center;font:500 11px 'Noto Sans Mono',monospace;color:#5b6273}
  .ring{position:fixed;z-index:2147482999;border:2.5px solid ${SAFF};box-shadow:0 0 0 9999px rgba(29,42,74,.28);pointer-events:none;opacity:0;transition:all .45s cubic-bezier(.5,0,.3,1)}
  .ring.on{opacity:1}
  @media (prefers-reduced-motion:reduce){.wrap{transition:none}.body,.z,.chakra,.wing-r,.tail,.ear-l,.ear-r{animation:none!important}}
  `;

  const fluff = (cx, cy, rx, ry, n, k = 1.2) => { let d = ''; for (let i = 0; i <= n; i++) { const t = i / n * 2 * Math.PI, x = cx + rx * Math.cos(t), y = cy + ry * Math.sin(t); if (!i) { d += 'M' + x.toFixed(1) + ' ' + y.toFixed(1); continue; } const m = (i - .5) / n * 2 * Math.PI; d += ' Q' + (cx + rx * k * Math.cos(m)).toFixed(1) + ' ' + (cy + ry * k * Math.sin(m)).toFixed(1) + ' ' + x.toFixed(1) + ' ' + y.toFixed(1); } return d + 'Z'; };
  const owl = `<svg class="owl" viewBox="0 0 84 92" aria-hidden="true">
    <ellipse cx="42" cy="89" rx="24" ry="3" fill="rgba(29,42,74,.15)"/>
    <g class="tail"><path d="${fluff(68, 66, 8, 7, 9, 1.28)}" fill="#efc48e" stroke="#d39a5c" stroke-width=".7"/><path d="${fluff(73, 56, 6.5, 6, 8, 1.3)}" fill="#efc48e" stroke="#d39a5c" stroke-width=".7"/><path d="${fluff(73, 56, 3.5, 3, 6, 1.3)}" fill="${CREAM}"/></g>
    <path d="${fluff(42, 70, 22, 17, 18)}" fill="#efc48e" stroke="#d39a5c" stroke-width=".7"/>
    <path d="${fluff(42, 72, 12, 13, 12, 1.22)}" fill="${CREAM}"/>
    <path d="${fluff(25, 85, 8, 4.5, 8, 1.25)}" fill="#efc48e" stroke="#d39a5c" stroke-width=".6"/><path d="${fluff(59, 85, 8, 4.5, 8, 1.25)}" fill="#efc48e" stroke="#d39a5c" stroke-width=".6"/>
    <rect x="31" y="68" width="8" height="19" rx="4" fill="#efc48e"/><ellipse cx="35" cy="86.5" rx="5" ry="3" fill="${CREAM}"/>
    <g class="wing-r"><rect x="45" y="68" width="8" height="19" rx="4" fill="#efc48e"/><ellipse cx="49" cy="86.5" rx="5" ry="3" fill="${CREAM}"/></g>
    <path d="M24 57 Q42 66 60 57 L60 61 Q42 70 24 61 Z" fill="${GREEN}"/>
    <g class="chakra"><circle cx="42" cy="68" r="5.5" fill="#f2d48a" stroke="${CHAKRA}" stroke-width="1"/>
      ${Array.from({length:12},(_,i)=>`<line x1="42" y1="68" x2="${42+5*Math.cos(i*Math.PI/6)}" y2="${68+5*Math.sin(i*Math.PI/6)}" stroke="${CHAKRA}" stroke-width=".6"/>`).join('')}</g>
    <path d="${fluff(42, 37, 21, 19, 20, 1.14)}" fill="#efc48e" stroke="#d39a5c" stroke-width=".7"/><path d="${fluff(42, 19, 6, 3.5, 7, 1.35)}" fill="#efc48e"/>
    <path class="ear-l" d="${fluff(19, 38, 7.5, 13, 12, 1.22)}" fill="${NAVY}" transform="rotate(18 19 38)"/>
    <path class="ear-r" d="${fluff(65, 38, 7.5, 13, 12, 1.22)}" fill="${NAVY}" transform="rotate(-18 65 38)"/>
    <path d="${fluff(42, 30, 5, 8, 8, 1.25)}" fill="${CREAM}" opacity=".75"/>
    <path d="${fluff(42, 46, 12, 8.5, 12, 1.18)}" fill="${CREAM}"/>
    <circle class="pupil" cx="34" cy="36" r="3.4" fill="${NAVY}"/><circle class="pupil" cx="50" cy="36" r="3.4" fill="${NAVY}"/>
    <circle cx="35.2" cy="34.8" r="1.1" fill="#fff"/><circle cx="51.2" cy="34.8" r="1.1" fill="#fff"/>
    <g class="lid"><circle cx="34" cy="36" r="4.2" fill="#efc48e"/><circle cx="50" cy="36" r="4.2" fill="#efc48e"/>
      <path d="M30 36.5 Q34 39.5 38 36.5" stroke="${NAVY}" stroke-width="1.4" fill="none" stroke-linecap="round"/><path d="M46 36.5 Q50 39.5 54 36.5" stroke="${NAVY}" stroke-width="1.4" fill="none" stroke-linecap="round"/></g>
    <ellipse cx="28" cy="43" rx="3" ry="1.8" fill="#e8907a" opacity=".45"/><ellipse cx="56" cy="43" rx="3" ry="1.8" fill="#e8907a" opacity=".45"/>
    <ellipse cx="42" cy="42.5" rx="3.6" ry="2.6" fill="${NAVY}"/>
    <path d="M42 45 L42 47.5 M42 47.5 Q39.5 50 37 48.5 M42 47.5 Q44.5 50 47 48.5" stroke="${NAVY}" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    <path class="tongue" d="M40 49.3 Q42 55 44 49.3 Z" fill="#e8907a"/>
  </svg>`;

  class ScreenMate extends HTMLElement {
    connectedCallback() {
      const r = this.attachShadow({ mode: 'open' });
      r.innerHTML = `<style>${css}</style><div class="ring"></div><div class="wrap idle"><div class="body" title="Laddoo the study pup">${owl}<span class="z">z</span><span class="z">z</span><span class="z">z</span></div></div><div class="bubble"></div><div class="peek" title="Laddoo is peeking. Click to call him back.">${owl}</div><button class="tab" title="Bring Laddoo back"><svg viewBox="0 0 20 20" aria-hidden="true"><ellipse cx="10" cy="13.5" rx="4.6" ry="3.8" fill="${SAFF}"/><circle cx="4.5" cy="8.5" r="2" fill="${SAFF}"/><circle cx="8" cy="5.2" r="2" fill="${SAFF}"/><circle cx="12" cy="5.2" r="2" fill="${SAFF}"/><circle cx="15.5" cy="8.5" r="2" fill="${SAFF}"/></svg>Laddoo</button>`;
      this.w = r.querySelector('.wrap'); this.b = r.querySelector('.bubble'); this.ring = r.querySelector('.ring'); this.tab = r.querySelector('.tab');
      this.tab.onclick = () => this.show();
      this.pk = r.querySelector('.peek'); this.pk.onclick = () => this.comeBack();
      let pos = null; try { pos = JSON.parse(LS('pos') || 'null'); } catch (e) {}
      this.x = pos ? Math.min(pos.x, innerWidth - 100) : 24; this.y = pos ? Math.min(pos.y, innerHeight - 150) : 10; this.place(); this.mode = 'idle'; this.tour = null;
      const body = this.w.querySelector('.body');
      body.addEventListener('pointerdown', e => { e.preventDefault(); body.setPointerCapture(e.pointerId); this.drag = { sx: e.clientX, sy: e.clientY, x0: this.x, y0: this.y, moved: false }; });
      body.addEventListener('pointermove', e => {
        const d = this.drag; if (!d) return;
        const dx = e.clientX - d.sx, dy = e.clientY - d.sy;
        if (!d.moved && Math.hypot(dx, dy) < 5) return;
        if (!d.moved) { d.moved = true; clearTimeout(this.wt); this.dragging = true; this.hush(); if (this.mode === 'sleep' || this.mode === 'walk') this.mode = 'idle'; this.set(this.mode); }
        this.x = Math.max(4, Math.min(innerWidth - 88, d.x0 + dx)); this.y = Math.max(4, Math.min(innerHeight - 140, d.y0 - dy)); this.place();
      });
      const up = e => {
        const d = this.drag; this.drag = null; if (!d) return;
        if (!d.moved) { e.stopPropagation(); this.menu(); return; }
        this.dragging = false; this.set('idle'); this.parkedUntil = Date.now() + 90000;
        SS('pos', JSON.stringify({ x: Math.round(this.x), y: Math.round(this.y) }));
        this.act('hop', 1300);
        const L = ['Okay, I\u2019ll sit here.', 'Whee! Again?', 'Good spot. Very sniffable.', 'New office. Same lawyer.'];
        this.say(L[Math.floor(Math.random() * L.length)], null, null, 2400);
      };
      body.addEventListener('pointerup', up); body.addEventListener('pointercancel', up);
      document.addEventListener('mousemove', e => this.look(e), { passive: true });
      window.addEventListener('resize', () => { this.x = Math.min(this.x, innerWidth - 100); this.y = Math.min(this.y, innerHeight - 150); this.place(); this.posBubble(); });
      this.blinkLoop();
      if (LS('hidden') === '1') { this.hide(true); return; }
      if (LS('muted') === '1') { this.set('sleep'); return; }
      setTimeout(() => {
        if (!LS('toured-' + page)) this.say(page === 'home' ? 'Hi! I\u2019m <b>Laddoo</b>. Want a quick tour?' : 'New page! Want me to show you around?', [['Show me', () => this.startTour(), 1], ['Later', () => { SS('toured-' + page, '1'); this.hush(); }]], 'Laddoo');
        else this.say(QUIPS[Math.floor(Math.random() * QUIPS.length)], null, null, 4500);
        this.loop();
      }, 1800);
    }
    place() { this.w.style.left = this.x + 'px'; this.w.style.bottom = this.y + 'px'; }
    randY() { return Math.random() < .45 ? 10 : 10 + Math.random() * Math.max(0, innerHeight - 280); }
    hide(quiet) {
      this.hidden = true; SS('hidden', '1'); clearTimeout(this.lt); clearTimeout(this.wt);
      this.tour = null; this.fastMove = false; this.ring.classList.remove('on'); this.hush();
      if (quiet) { this.w.style.display = 'none'; this.schedulePeek(8000); return; }
      const off = this.x + 42 < innerWidth / 2 ? -120 : innerWidth + 40;
      this.flipped = off < this.x; this.set('walk'); this.w.style.transitionDuration = '900ms'; this.x = off; this.place();
      this.wt = setTimeout(() => { this.w.style.display = 'none'; this.set('idle'); this.schedulePeek(12000); }, 950);
    }
    schedulePeek(ms) { clearTimeout(this.pt); this.pt = setTimeout(() => this.peek(), ms != null ? ms : 22000 + Math.random() * 28000); }
    peek() {
      if (!this.hidden) return;
      const side = ['bottom', 'bottom', 'left', 'right'][Math.floor(Math.random() * 4)], pk = this.pk;
      const midY = 90 + Math.random() * Math.max(0, innerHeight - 280);
      let L, T, R0, TR;
      if (side === 'bottom') { L = 40 + Math.random() * Math.max(0, innerWidth - 170); T = innerHeight + 4; R0 = 0; TR = 'translateY(-48px)'; }
      else if (side === 'right') { L = innerWidth + 4; T = midY; R0 = -90; TR = 'translateX(-46px)'; }
      else { L = -88; T = midY; R0 = 90; TR = 'translateX(46px)'; }
      this.peekSide = { side, L, T };
      pk.style.transition = 'none'; pk.style.left = L + 'px'; pk.style.top = T + 'px'; pk.style.transform = 'rotate(' + R0 + 'deg)'; pk.style.display = 'block';
      void pk.offsetWidth; pk.style.transition = '';
      requestAnimationFrame(() => { pk.classList.add('on'); pk.style.transform = TR + ' rotate(' + R0 + 'deg)'; });
      clearTimeout(this.pkt);
      this.pkt = setTimeout(() => {
        pk.classList.remove('on'); pk.style.transform = 'rotate(' + R0 + 'deg)';
        setTimeout(() => { if (this.hidden && !pk.classList.contains('on')) pk.style.display = 'none'; }, 650);
        this.schedulePeek();
      }, 2800 + Math.random() * 1600);
    }
    comeBack() {
      clearTimeout(this.pt); clearTimeout(this.pkt);
      const p = this.peekSide || { side: 'bottom', L: innerWidth / 2, T: innerHeight };
      this.pk.classList.remove('on'); this.pk.style.display = 'none';
      this.hidden = false; SS('hidden', '0'); SS('muted', '0');
      const cy = Math.max(10, Math.min(innerHeight - 150, innerHeight - p.T - 110));
      let sx, sy, tx, ty;
      if (p.side === 'bottom') { sx = p.L; sy = -110; tx = p.L; ty = 10; }
      else if (p.side === 'right') { sx = innerWidth + 30; sy = cy; tx = innerWidth - 170; ty = cy; }
      else { sx = -110; sy = cy; tx = 70; ty = cy; }
      this.w.style.transitionDuration = '0ms'; this.x = sx; this.y = sy; this.place(); this.w.style.display = ''; void this.w.offsetWidth;
      this.fastMove = true;
      this.walkTo(tx, () => { this.fastMove = false; this.set('idle'); this.act('hop', 1300); this.ask(); this.loop(); }, ty);
    }
    ask() {
      const Q = [
        ['Which Article did Dr. Ambedkar call the \u201cheart and soul\u201d of the Constitution?', ['Art. 14', 'Art. 21', 'Art. 32'], 2, 'Article 32, the right to constitutional remedies.'],
        ['Which case laid down the basic structure doctrine?', ['Golak Nath', 'Kesavananda Bharati', 'Minerva Mills'], 1, 'Kesavananda Bharati (1973), decided by 13 judges.'],
        ['The right to privacy was declared a fundamental right in\u2026', ['Puttaswamy', 'Maneka Gandhi', 'A.K. Gopalan'], 0, 'K.S. Puttaswamy v. Union of India (2017), 9 judges.'],
        ['Which Amendment added the Fundamental Duties?', ['42nd', '44th', '86th'], 0, 'The 42nd Amendment, 1976 inserted Part IVA.'],
        ['President\u2019s Rule in a State is imposed under\u2026', ['Art. 352', 'Art. 356', 'Art. 360'], 1, 'Article 356. S.R. Bommai (1994) limits its use.'],
        ['The right to education for children aged 6\u201314 is in\u2026', ['Art. 21A', 'Art. 45', 'Art. 51A(k)'], 0, 'Article 21A, inserted by the 86th Amendment, 2002.'],
        ['Which case held that procedure under Art. 21 must be fair, just and reasonable?', ['Maneka Gandhi', 'ADM Jabalpur', 'Shreya Singhal'], 0, 'Maneka Gandhi v. Union of India (1978).'],
        ['Section 66A of the IT Act was struck down in\u2026', ['Shreya Singhal', 'Anuradha Bhasin', 'Romesh Thappar'], 0, 'Shreya Singhal v. Union of India (2015).'],
        ['Which Article abolishes untouchability?', ['Art. 15', 'Art. 17', 'Art. 23'], 1, 'Article 17. Practising it in any form is an offence.'],
        ['The creamy layer exclusion comes from\u2026', ['Indra Sawhney', 'M. Nagaraj', 'N.M. Thomas'], 0, 'Indra Sawhney v. Union of India (1992), the Mandal case.']
      ];
      let i; do { i = Math.floor(Math.random() * Q.length); } while (i === this.lastQ && Q.length > 1); this.lastQ = i;
      const [q, opts, ans, why] = Q[i];
      const greet = ['Missed me? Quick one:', 'I\u2019m back! Pop quiz:', 'Psst, try this:', 'Before you shoo me again:'][Math.floor(Math.random() * 4)];
      this.say(greet + '<br><b>' + q + '</b>', opts.map((o, k) => [o, () => this.answer(k === ans, why)]).concat([['Not now', () => this.hush()]]), 'Laddoo asks');
    }
    answer(ok, why) {
      this.act(ok ? 'spin' : 'wave', ok ? 2400 : 1900);
      this.say((ok ? '<b>Woof, correct!</b> ' : '<b>Not quite.</b> ') + why, [['Another', () => this.ask(), 1], ['Thanks', () => this.hush()]], 'Laddoo');
    }
    show() {
      this.hidden = false; SS('hidden', '0'); SS('muted', '0');
      this.tab.style.display = 'none'; this.w.style.display = '';
      this.x = innerWidth - 120; this.y = 10; this.set('idle'); this.place();
      this.act('hop', 1300); this.say('I\u2019m back! Drag me anywhere, or click me for options.', null, null, 3500); this.loop();
    }
    set(m) { this.mode = m; this.w.className = 'wrap ' + m + (this.flipped ? ' flip' : '') + (this.fastMove ? ' fast' : '') + (this.dragging ? ' drag' : ''); }
    look(e) {
      if (this.mode === 'sleep') return;
      const rc = this.w.getBoundingClientRect(), dx = e.clientX - (rc.left + 42), dy = e.clientY - (rc.top + 38), d = Math.hypot(dx, dy) || 1;
      const k = this.flipped ? -1 : 1;
      this.w.querySelectorAll('.pupil').forEach(p => p.setAttribute('transform', `translate(${(dx / d) * 2.4 * k} ${(dy / d) * 2.4})`));
    }
    blinkLoop() {
      clearTimeout(this.bt);
      this.bt = setTimeout(() => { if (this.mode !== 'sleep') { this.w.classList.add('blink'); setTimeout(() => this.w.classList.remove('blink'), 140); } this.blinkLoop(); }, 2500 + Math.random() * 3500);
    }
    walkTo(x, cb, y) {
      x = Math.max(8, Math.min(innerWidth - 92, x));
      const ny = y == null ? this.y : Math.max(10, Math.min(innerHeight - 150, y));
      this.flipped = x < this.x; this.set('walk');
      const dist = Math.hypot(x - this.x, ny - this.y);
      const dur = this.fastMove ? 900 : Math.max(900, Math.min(4200, dist * 7));
      this.w.style.transitionDuration = dur + 'ms';
      this.x = x; this.y = ny; this.place(); this.posBubble();
      clearTimeout(this.wt); this.wt = setTimeout(() => { this.set('idle'); cb && cb(); }, dur);
    }
    act(name, ms) { this.set(name); clearTimeout(this.at); this.at = setTimeout(() => this.mode === name && this.set('idle'), ms); }
    loop() {
      clearTimeout(this.lt);
      this.lt = setTimeout(() => {
        if (this.hidden) return;
        if (this.tour || LS('muted') === '1' || this.b.classList.contains('on')) return this.loop();
        const r = Math.random();
        if (r < .4) { if ((this.parkedUntil || 0) < Date.now()) this.walkTo(Math.random() * innerWidth, null, this.randY()); else this.act('wave', 1900); }
        else if (r < .52) this.act('hop', 1300);
        else if (r < .64) { this.act('spin', 2500); this.say('Wheee! Chasing my tail!', null, null, 2000); }
        else if (r < .74) this.act('wave', 1900);
        else if (r < .86) { this.set('sleep'); this.lt = setTimeout(() => { this.set('idle'); this.say('Huh? I was reading. With my eyes closed.', null, null, 3000); this.loop(); }, 9000 + Math.random() * 6000); return; }
        else this.say(QUIPS[Math.floor(Math.random() * QUIPS.length)], null, null, 5000);
        this.loop();
      }, 6000 + Math.random() * 7000);
    }
    say(html, buttons, tag, ttl) {
      clearTimeout(this.st);
      this.b.innerHTML = (tag ? `<span class="tag">${tag}</span>` : '') + `<div>${html}</div>`;
      if (buttons) { const row = document.createElement('div'); row.className = 'row'; buttons.forEach(([t, fn, p]) => { if (t === '·') { const s = document.createElement('span'); s.className = 'dots'; s.textContent = fn; row.appendChild(s); return; } const btn = document.createElement('button'); btn.textContent = t; if (p) btn.className = 'p'; btn.onclick = e => { e.stopPropagation(); fn(); }; row.appendChild(btn); }); this.b.appendChild(row); }
      this.b.classList.add('on'); this.posBubble();
      if (ttl) this.st = setTimeout(() => this.hush(), ttl);
    }
    hush() { this.b.classList.remove('on', 'chat'); this.chatOn = false; }
    base() { const a = document.querySelector('a[href*="rticle"]'); const h = a && a.getAttribute('href'); return h && /rticle[^?#]*\.html/i.test(h) ? h.split(/[?#]/)[0] : (/\.dc\.html/i.test(location.pathname) ? 'Article.dc.html' : 'article.html'); }
    ensureData() {
      const P = window.COI && window.COI.parts;
      if (P && P['III'] && P['XVIII']) return;
      ['part1-2', 'part3', 'part4', 'part5', 'part6-7', 'part8-10', 'part11', 'part12-21'].forEach(f => { if (!document.querySelector('script[src*="' + f + '.js"]')) { const sc = document.createElement('script'); sc.src = './data/' + f + '.js'; sc.onload = () => { this.ix = null; }; document.head.appendChild(sc); } });
    }
    index() {
      if (this.ix && this.ixN === Object.keys((window.COI && window.COI.parts) || {}).length) return this.ix;
      const P = (window.COI && window.COI.parts) || {}, arts = [];
      Object.values(P).forEach(p => Object.entries(p.articles || {}).forEach(([id, a]) => arts.push({
        id, part: p.part || p.key, title: (a.title || '').replace(/\s*\[Omitted\]$/, ''), summary: a.summary || '',
        t: (a.title || '').toLowerCase(), x: [id, a.title, a.summary, (a.clauses || []).join(' '), (a.amendments || []).join(' ')].join(' ').toLowerCase(),
        cases: (a.cases || []).map(c => ({ name: c.name, cite: c.cite || '', n: (c.name || '').toLowerCase(), x: [c.i, c.r, c.c].join(' ').toLowerCase() }))
      })));
      this.ixN = Object.keys(P).length; this.ix = arts; return arts;
    }
    chat() {
      clearTimeout(this.st); this.ensureData(); this.chatOn = true;
      if (this.mode === 'sleep') this.set('idle');
      const b = this.b; b.classList.add('chat');
      b.innerHTML = '<span class="tag">Ask Laddoo</span><div class="log"></div><form class="ask"><input placeholder="\u201carticle 21\u201d, \u201ccases on privacy\u201d\u2026" aria-label="Ask Laddoo"><button>Ask</button></form><div class="row"><button class="x">Close</button><span class="dots">Esc to close</span></div>';
      this.log = b.querySelector('.log');
      this.hist = this.hist || [['dog', 'Woof! Ask me about any article, case or topic. I\u2019ll sniff it out.']];
      this.renderLog();
      const inp = b.querySelector('input');
      b.querySelector('.x').onclick = e => { e.stopPropagation(); this.hush(); };
      inp.addEventListener('keydown', e => { e.stopPropagation(); if (e.key === 'Escape') this.hush(); });
      inp.addEventListener('keyup', e => e.stopPropagation());
      b.querySelector('form').onsubmit = e => {
        e.preventDefault(); const q = inp.value.trim(); if (!q) return; inp.value = '';
        this.addMsg('you', this.esc(q)); this.addMsg('dog', '<i>sniff sniff\u2026</i>'); this.act('hop', 700);
        setTimeout(() => { this.hist.pop(); this.addMsg('dog', this.reply(q)); }, 420);
      };
      b.classList.add('on'); this.posBubble(); setTimeout(() => inp.focus(), 60);
    }
    esc(t) { return t.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
    addMsg(w, h) { this.hist.push([w, h]); if (this.hist.length > 14) this.hist.shift(); if (this.chatOn) this.renderLog(); }
    renderLog() { this.log.innerHTML = this.hist.map(([w, h]) => '<div class="m ' + w + '">' + h + '</div>').join(''); this.log.scrollTop = 1e6; this.posBubble(); }
    reply(q) {
      const t = q.toLowerCase().trim(), pick = a => a[Math.floor(Math.random() * a.length)], B = this.base();
      const link = id => '<a href="' + B + '?a=' + encodeURIComponent(id) + '">Art. ' + id + '</a>';
      if (/^(hi+|hello|hey|namaste|yo)\b/.test(t)) return pick(['Woof! Hi! What are we studying?', 'Namaste! Ask me about an article or a case.']);
      if (/\b(help|what can you do|how)\b/.test(t) && t.length < 30) return 'Try:<span class="hit">\u2022 <b>article 21</b> or just <b>356</b></span><span class="hit">\u2022 a topic: <b>privacy</b>, <b>emergency</b>, <b>reservation</b></span><span class="hit">\u2022 a case: <b>kesavananda</b>, <b>maneka</b></span><span class="hit">\u2022 <b>part iv</b>, <b>quiz</b>, <b>tour</b>, <b>shoo</b></span>';
      if (/\bquiz\b/.test(t)) { setTimeout(() => { this.hush(); this.ask(); }, 600); return 'Quiz time! Here comes one\u2026'; }
      if (/\btour\b/.test(t)) { setTimeout(() => { this.hush(); this.startTour(); }, 600); return 'Follow me!'; }
      if (/\b(shoo|bye|go away|goodbye)\b/.test(t)) { setTimeout(() => this.hide(), 900); return 'Okay, okay. I\u2019ll be around\u2026'; }
      if (/\b(sleep|nap)\b/.test(t)) { setTimeout(() => { this.hush(); SS('muted', '1'); this.set('sleep'); }, 900); return 'Zzz\u2026 click me to wake me.'; }
      if (/good (boy|dog|pup)|treat|belly|pat\b|love you/.test(t)) { this.act('spin', 2400); return pick(['*happy tail wag* Woof woof!', 'Treat accepted. Now read Article 21.']); }
      const P = (window.COI && window.COI.parts) || {};
      const pm = t.match(/\bpart\s+([ivxl]+a?|\d+a?)\b/);
      if (pm) {
        let k = pm[1].toUpperCase();
        if (/^\d/.test(k)) { const n = parseInt(k), sfx = k.replace(/^\d+/, ''); const rn = [[10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]; let v = n, out = ''; rn.forEach(([d, r]) => { while (v >= d) { out += r; v -= d; } }); k = out + sfx; }
        const p = P[k];
        return p ? '<b>Part ' + p.part + '</b> \u00b7 ' + this.esc(p.title) + ' <small>(' + (p.range || '') + ')</small><span class="hit"><a href="' + B + '?part=' + k + '">Open Part ' + p.part + ' \u2192</a></span>' : 'I don\u2019t have Part ' + k + ' yet. Sniff again later!';
      }
      const ix = this.index();
      if (!ix.length) return 'My notes are still loading. Ask me again in a second?';
      const am = t.match(/\bart(?:icle)?s?\.?\s*(\d{1,3}[a-z]{0,2})\b/) || t.match(/^(\d{1,3}[a-z]{0,2})$/);
      if (am) {
        const id = am[1].toUpperCase(), a = ix.find(x => x.id === id);
        if (!a) return 'I haven\u2019t got a page for Article ' + this.esc(id) + ' yet.';
        let s1 = a.summary.split(/(?<=\.)\s/)[0] || ''; if (s1.length > 230) s1 = s1.slice(0, 227) + '\u2026';
        return '<b>Article ' + id + '</b> \u00b7 ' + this.esc(a.title) + '<br>' + this.esc(s1) + (a.cases.length ? '<br><small>Key cases: ' + a.cases.slice(0, 3).map(c => '<i>' + this.esc(c.name) + '</i>').join('; ') + '</small>' : '') + '<span class="hit"><a href="' + B + '?a=' + encodeURIComponent(id) + '">Open Article ' + id + ' \u2192</a></span>';
      }
      const STOP = new Set('the and for with what which who whom about tell show give find case cases article articles under law laws does from into that this there their are was were is of on in to a an me my any all explain meaning define definition please related relating regarding'.split(' '));
      const toks = t.split(/[^a-z0-9]+/).filter(w => w.length > 2 && !STOP.has(w));
      if (!toks.length) return 'Hmm, sniff\u2026 try \u201carticle 21\u201d or a topic like \u201cprivacy\u201d.';
      const has = (s, w) => s.indexOf(w) >= 0;
      const scored = ix.map(a => { let sc = 0; toks.forEach(w => { if (has(a.t, w)) sc += 6; if (has(a.x, w)) sc += 2; a.cases.forEach(c => { if (has(c.n, w)) sc += 3; else if (has(c.x, w)) sc += .5; }); }); return [sc, a]; }).filter(x => x[0] > 0).sort((p, q2) => q2[0] - p[0]);
      const ch = []; const seen = new Set();
      ix.forEach(a => a.cases.forEach(c => { let sc = 0; toks.forEach(w => { if (has(c.n, w)) sc += 5; if (has(c.x, w)) sc += 1; }); const key = c.n.slice(0, 40); if (sc > 0 && !seen.has(key + a.id)) { seen.add(key + a.id); ch.push([sc, c, a]); } }));
      ch.sort((p, q2) => q2[0] - p[0]);
      const wantCases = /\bcases?\b|\bv\.?\s|\bvs\b/.test(t) || (ch.length && ch[0][0] >= 5 * toks.length);
      if (!scored.length && !ch.length) return 'Couldn\u2019t sniff anything on \u201c' + this.esc(q) + '\u201d. Try another word?';
      let out = pick(['Here\u2019s what my nose found:', 'Sniffed these out:', 'Found some! Woof:']);
      const artHtml = scored.slice(0, wantCases ? 2 : 4).map(([, a]) => '<span class="hit">' + link(a.id) + ' ' + this.esc(a.title) + '</span>').join('');
      const caseHtml = ch.slice(0, wantCases ? 4 : 2).map(([, c, a]) => '<span class="hit"><i>' + this.esc(c.name) + '</i> <small>' + this.esc(c.cite) + '</small> \u2192 ' + link(a.id) + '</span>').join('');
      return out + (wantCases ? caseHtml + artHtml : artHtml + caseHtml);
    }
    posBubble() {
      if (!this.b) return;
      const bw = this.b.offsetWidth || 260, bh = this.b.offsetHeight || 80;
      let left = this.x + 42 - bw / 2; left = Math.max(10, Math.min(innerWidth - bw - 10, left));
      this.b.style.left = left + 'px';
      const bottom = parseFloat(this.w.style.bottom || 10);
      const above = innerHeight - bottom - 92 - bh - 10;
      this.b.style.top = (above >= 56 ? above : Math.min(innerHeight - bh - 10, innerHeight - bottom + 8)) + 'px';
    }
    menu() {
      if (this.tour) return;
      if (this.mode === 'sleep') { this.set('idle'); this.act('hop', 1300); }
      const muted = LS('muted') === '1';
      this.say('Woof! What shall we do? <span style="color:#5b6273;font-size:12.5px">(Drag me to move me.)</span>', [['Ask me', () => this.chat(), 1], ['Take the tour', () => this.startTour()], ['Quiz me', () => this.ask()], ['Tell me something', () => this.say(QUIPS[Math.floor(Math.random() * QUIPS.length)], null, null, 5000)], [muted ? 'Wake up' : 'Shh, nap time', () => { if (muted) { SS('muted', '0'); this.set('idle'); this.say('I\u2019m back!', null, null, 2000); this.loop(); } else { SS('muted', '1'); this.hush(); this.set('sleep'); } }], ['Shoo!', () => { this.say('Fine, fine. I\u2019ll be around\u2026', null, null, 1200); setTimeout(() => this.hide(), 1100); }]], 'Laddoo');
    }
    startTour() {
      const steps = (TOURS[page] || []).filter(([sel]) => !sel || this.find(sel));
      this.tour = { steps, i: 0 }; this.fastMove = true; this.step();
    }
    find(sel) { const els = [...document.querySelectorAll(sel)]; return els.find(el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; }); }
    step() {
      const t = this.tour, [sel, text] = t.steps[t.i], last = t.i === t.steps.length - 1;
      const btns = [];
      if (t.i > 0) btns.push(['Back', () => { t.i--; this.step(); }]);
      btns.push([last ? 'Done' : 'Next', () => { if (last) this.endTour(); else { t.i++; this.step(); } }, 1]);
      if (!last) btns.push(['Skip', () => this.endTour()]);
      btns.push(['·', (t.i + 1) + ' / ' + t.steps.length]);
      const show = () => this.say(text, btns, 'Tour');
      const el = sel && this.find(sel);
      if (!el) { this.ring.classList.remove('on'); this.y = 10; this.walkTo(innerWidth / 2 - 42, () => { this.act('wave', 1500); show(); }); return; }
      let r = el.getBoundingClientRect();
      if (r.top < 60 || r.bottom > innerHeight - 140) { window.scrollTo({ top: window.scrollY + r.top - innerHeight / 3, behavior: 'smooth' }); }
      setTimeout(() => {
        r = el.getBoundingClientRect();
        const pad = 6; Object.assign(this.ring.style, { left: r.left - pad + 'px', top: r.top - pad + 'px', width: Math.min(r.width, innerWidth - r.left) + pad * 2 + 'px', height: Math.min(r.height, 260) + pad * 2 + 'px' });
        this.ring.classList.add('on');
        const below = r.bottom + 100 < innerHeight;
        this.y = below ? Math.max(10, innerHeight - r.bottom - 100) : 10;
        const tx = r.left + Math.min(r.width, 300) / 2 - 42;
        this.walkTo(tx, () => { this.act('hop', 1300); show(); });
        this.hush();
      }, 450);
    }
    endTour() {
      SS('toured-' + page, '1'); this.tour = null; this.fastMove = false; this.ring.classList.remove('on'); this.y = 10;
      this.say('Happy studying! Click me if you need me.', null, null, 3000); this.act('wave', 1900); this.loop();
    }
  }
  customElements.define('screen-mate', ScreenMate);
  const mount = () => { if (!document.querySelector('screen-mate')) document.body.appendChild(document.createElement('screen-mate')); };
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', mount) : mount();
})();
