window.COI_UI = (function () {
  const CSS = '@keyframes coiSpin{to{transform:rotate(360deg)}}@keyframes coiSpoke{from{opacity:0;transform:scaleY(.15)}to{opacity:1;transform:scaleY(1)}}@keyframes coiBar{0%{transform:scaleX(.05)}100%{transform:scaleX(1)}}@keyframes coiRise{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}html{scroll-behavior:smooth}body{transition:opacity .28s ease}';
  if (!document.getElementById('coi-ui-css')) { const s = document.createElement('style'); s.id = 'coi-ui-css'; s.textContent = CSS; document.head.appendChild(s); }
  const first = !sessionStorage.getItem('coi-seen');
  sessionStorage.setItem('coi-seen', '1');
  const minDelay = first ? 1100 : 380;

  function loader(React, { leaving, label }) {
    const h = React.createElement;
    const spokes = [];
    for (let i = 0; i < 24; i++) {
      spokes.push(h('g', { key: i, transform: 'rotate(' + i * 15 + ')' },
        h('path', { d: 'M0 -6 L1.4 -26 L0 -45 L-1.4 -26 Z', fill: '#000080', style: { transformBox: 'fill-box', transformOrigin: '50% 100%', animation: 'coiSpoke .32s ease-out both', animationDelay: (i * 28) + 'ms' } }),
        h('circle', { cy: -47, r: 1.3, transform: 'rotate(7.5)', fill: '#000080', style: { animation: 'coiSpoke .3s ease-out both', animationDelay: (i * 28 + 120) + 'ms' } })));
    }
    return h('div', { style: { position: 'fixed', inset: 0, zIndex: 9999, background: '#f7f4ec', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 22, opacity: leaving ? 0 : 1, transition: 'opacity .5s ease', pointerEvents: leaving ? 'none' : 'auto' } },
      h('svg', { viewBox: '-50 -50 100 100', width: 108, height: 108, style: { animation: 'coiSpin 6s linear infinite', overflow: 'visible' } },
        h('circle', { r: 47, fill: 'none', stroke: '#000080', strokeWidth: 2.6 }),
        h('circle', { r: 6, fill: '#000080' }), spokes),
      h('div', { style: { width: 168, height: 5, border: '1px solid #d9d3c4', overflow: 'hidden' } },
        h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', height: '100%', transformOrigin: 'left', animation: 'coiBar 1.1s cubic-bezier(.6,0,.3,1) infinite alternate' } },
          h('div', { style: { background: '#ff9933' } }), h('div', { style: { background: '#ffffff' } }), h('div', { style: { background: '#138808' } }))),
      h('div', { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, animation: 'coiRise .5s ease .2s both' } },
        h('div', { style: { fontFamily: "'Noto Serif',serif", fontWeight: 700, fontSize: 22, color: '#1d2a4a' } }, 'Constitution of India'),
        h('div', { style: { fontFamily: "'Noto Sans Mono',monospace", fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#5b6273' } }, label || 'Loading')));
  }

  let installed = false;
  function install() {
    if (installed) return; installed = true;
    document.body.style.opacity = '1';
    window.addEventListener('pageshow', () => { document.body.style.opacity = '1'; });
    document.addEventListener('click', e => {
      const a = e.target.closest && e.target.closest('a[href]');
      if (!a || a.target || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const raw = a.getAttribute('href');
      if (!raw || raw.startsWith('#') || raw.startsWith('mailto:')) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return;
      if (url.pathname === location.pathname && url.search === location.search) return;
      e.preventDefault();
      document.body.style.opacity = '0';
      setTimeout(() => { location.href = url.href; }, 260);
    });
  }

  function boot(comp, isReady) {
    install();
    const t0 = Date.now();
    const go = () => {
      setTimeout(() => {
        comp.setState({ leaving: true });
        setTimeout(() => comp.setState({ loading: false }), 520);
      }, Math.max(0, minDelay - (Date.now() - t0)));
    };
    const fonts = document.fonts ? document.fonts.ready : Promise.resolve();
    const data = new Promise(res => { const tick = () => (!isReady || isReady()) ? res() : setTimeout(tick, 40); tick(); });
    Promise.all([fonts, data]).then(go);
  }
  return { loader, boot };
})();
