/* ============================================================
   THE AMERICAN BATTERY — Redesign JS (tae.js)
   nav/footer inject · theme toggle · slider · reveal · counters · form
   Set data-depth on <html> for relative paths (0 = root).
============================================================ */
(function () {
  'use strict';
  const depth = parseInt(document.documentElement.dataset.depth || '0');
  const base = depth === 0 ? '' : '../'.repeat(depth);

  /* ---- THEME ---- */
  window.toggleTheme = function () {
    const cur = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = cur === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('tae-theme', next); } catch (e) {}
  };

  const sun = '<svg class="i-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/></svg>';
  const moon = '<svg class="i-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';

  /* ---- NAV ---- */
  const navEl = document.getElementById('nav-placeholder');
  if (navEl) {
    navEl.innerHTML = `
<nav id="nav">
  <a class="brand" href="${base}index.html">The American<span class="b"> Energy</span></a>
  <ul class="nav-links">
    <li><a href="${base}index.html#america-first">America First</a></li>
    <li class="has-dd"><button>Energy Sources <span class="nav-arrow">▾</span></button>
      <div class="nav-dd wide">
        <div><span class="dd-label">Generation</span>
          <a href="${base}energy-sources/solar.html"><span class="sym">☀</span>Solar</a>
          <a href="${base}energy-sources/nuclear.html"><span class="sym">⬡</span>Nuclear</a>
          <a href="${base}energy-sources/natural-gas.html"><span class="sym">▲</span>Natural Gas</a>
          <a href="${base}energy-sources/wind.html"><span class="sym">⟳</span>Wind</a></div>
        <div><span class="dd-label">Sources &amp; Storage</span>
          <a href="${base}energy-sources/hydro.html"><span class="sym">≈</span>Hydropower</a>
          <a href="${base}energy-sources/geothermal.html"><span class="sym">⛰</span>Geothermal</a>
          <a href="${base}energy-sources/storage.html"><span class="sym">▮</span>Battery Storage</a>
          <a href="${base}energy-sources/index.html">All Energy Sources →</a></div>
      </div></li>
    <li class="has-dd"><button>Value Chain <span class="nav-arrow">▾</span></button>
      <div class="nav-dd">
        <span class="dd-label">Supply Chain Stages</span>
        <a href="${base}index.html#value-chain">Full Value Chain Overview</a>
        <a href="${base}index.html#value-chain">01 — Exploration &amp; Mining</a>
        <a href="${base}index.html#value-chain">02 — Refining &amp; Processing</a>
        <a href="${base}index.html#value-chain">03 — Active Materials</a>
        <a href="${base}index.html#value-chain">04 — Cell Manufacturing</a>
        <a href="${base}index.html#value-chain">05 — Packs &amp; Systems</a>
        <a href="${base}index.html#value-chain">06 — Use, Reuse &amp; Recycle</a>
      </div></li>
    <li class="has-dd"><button>Critical Minerals <span class="nav-arrow">▾</span></button>
      <div class="nav-dd wide">
        <div><span class="dd-label">Cathode Metals</span>
          <a href="${base}critical-minerals/lithium.html"><span class="sym">Li</span>Lithium</a>
          <a href="${base}critical-minerals/phosphorus.html"><span class="sym">P</span>Phosphorus</a>
          <a href="${base}critical-minerals/iron.html"><span class="sym">Fe</span>Iron</a>
          <a href="${base}critical-minerals/nickel.html"><span class="sym">Ni</span>Nickel</a>
          <a href="${base}critical-minerals/cobalt.html"><span class="sym">Co</span>Cobalt</a></div>
        <div><span class="dd-label">Anode &amp; Structure</span>
          <a href="${base}critical-minerals/graphite.html"><span class="sym">C</span>Graphite</a>
          <a href="${base}critical-minerals/copper.html"><span class="sym">Cu</span>Copper</a>
          <a href="${base}critical-minerals/manganese.html"><span class="sym">Mn</span>Manganese</a>
          <a href="${base}critical-minerals/aluminum.html"><span class="sym">Al</span>Aluminum</a>
          <a href="${base}critical-minerals/steel-and-alloys.html"><span class="sym">Fe+</span>Steel &amp; Alloys</a></div>
      </div></li>
    <li class="has-dd"><button>Cell Technology <span class="nav-arrow">▾</span></button>
      <div class="nav-dd wide">
        <div><span class="dd-label">Chemistries</span>
          <a href="${base}cell-technology/index.html">Technology Overview</a>
          <a href="${base}cell-technology/bmlmp.html">BMLMP — High-Mn LFP</a>
          <a href="${base}cell-technology/lfp.html">LFP — Iron Phosphate</a>
          <a href="${base}cell-technology/nmc.html">NMC — Ni Mn Cobalt</a>
          <a href="${base}cell-technology/solid-state.html">Solid-State &amp; Semi-Solid</a></div>
        <div><span class="dd-label">Platform</span>
          <a href="${base}cell-technology/american-bms.html">American BMS</a>
          <a href="${base}cell-technology/digital-dna.html">Digital DNA Traceability</a>
          <a href="${base}cell-technology/cell-to-container.html">Cell-to-Container</a>
          <a href="${base}index.html#contact">Request Cell Specs</a></div>
      </div></li>
    <li class="has-dd"><button>Applications <span class="nav-arrow">▾</span></button>
      <div class="nav-dd">
        <span class="dd-label">Sectors</span>
        <a href="${base}applications/ai-data-centers.html">AI Data Centers</a>
        <a href="${base}applications/electric-vehicles.html">Electric Vehicles</a>
        <a href="${base}applications/grid-and-bess.html">Grid &amp; BESS</a>
        <a href="${base}applications/defense-and-mission-critical.html">Defense &amp; Mission-Critical</a>
        <a href="${base}applications/homes-and-buildings.html">Homes &amp; Buildings</a>
        <a href="${base}applications/portable-electronics-and-tools.html">Portable Electronics &amp; Tools</a>
      </div></li>
    <li><a href="${base}index.html#contact">Contact</a></li>
  </ul>
  <div class="nav-right">
    <button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme">${sun}${moon}</button>
    <a class="nav-cta" href="${base}index.html#contact">Partner With Us</a>
    <button class="nav-burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
</nav>
<div class="mnav" id="mnav">
  <div class="msec"><div class="mh"><a href="${base}index.html#america-first" style="color:inherit">America First</a></div></div>
  ${mSection('Energy Sources', [['All Energy Sources', base + 'energy-sources/index.html'], ['Solar', base + 'energy-sources/solar.html'], ['Nuclear', base + 'energy-sources/nuclear.html'], ['Natural Gas', base + 'energy-sources/natural-gas.html'], ['Wind', base + 'energy-sources/wind.html'], ['Hydropower', base + 'energy-sources/hydro.html'], ['Geothermal', base + 'energy-sources/geothermal.html'], ['Battery Storage', base + 'energy-sources/storage.html']])}
  ${mSection('Value Chain', [['Full Value Chain Overview', base + 'index.html#value-chain'], ['Mining & Exploration', base + 'index.html#value-chain'], ['Refining & Processing', base + 'index.html#value-chain'], ['Cell Manufacturing', base + 'index.html#value-chain'], ['Packs & Systems', base + 'index.html#value-chain'], ['Recycling & Second Life', base + 'index.html#value-chain']])}
  ${mSection('Critical Minerals', [['All Minerals', base + 'critical-minerals/index.html'], ['Lithium', base + 'critical-minerals/lithium.html'], ['Phosphorus', base + 'critical-minerals/phosphorus.html'], ['Iron', base + 'critical-minerals/iron.html'], ['Copper', base + 'critical-minerals/copper.html'], ['Manganese', base + 'critical-minerals/manganese.html'], ['Nickel', base + 'critical-minerals/nickel.html'], ['Cobalt', base + 'critical-minerals/cobalt.html'], ['Graphite', base + 'critical-minerals/graphite.html'], ['Aluminum', base + 'critical-minerals/aluminum.html'], ['Steel & Alloys', base + 'critical-minerals/steel-and-alloys.html']])}
  ${mSection('Cell Technology', [['Technology Overview', base + 'cell-technology/index.html'], ['BMLMP', base + 'cell-technology/bmlmp.html'], ['LFP', base + 'cell-technology/lfp.html'], ['NMC', base + 'cell-technology/nmc.html'], ['Solid-State', base + 'cell-technology/solid-state.html'], ['American BMS', base + 'cell-technology/american-bms.html'], ['Digital DNA', base + 'cell-technology/digital-dna.html'], ['Cell-to-Container', base + 'cell-technology/cell-to-container.html']])}
  ${mSection('Applications', [['AI Data Centers', base + 'applications/ai-data-centers.html'], ['Electric Vehicles', base + 'applications/electric-vehicles.html'], ['Grid & BESS', base + 'applications/grid-and-bess.html'], ['Defense & Mission-Critical', base + 'applications/defense-and-mission-critical.html'], ['Homes & Buildings', base + 'applications/homes-and-buildings.html'], ['Portable & Tools', base + 'applications/portable-electronics-and-tools.html']])}
  <div class="msec"><div class="mh"><a href="${base}index.html#contact" style="color:inherit">Contact</a></div></div>
  <a class="mcta" href="${base}index.html#contact">Partner With Us</a>
</div>`;

    window.addEventListener('scroll', () => {
      const n = document.getElementById('nav');
      if (n) n.classList.toggle('scrolled', window.scrollY > 50);
    });
    const burger = document.getElementById('burger');
    burger && burger.addEventListener('click', function () {
      document.getElementById('mnav').classList.toggle('open');
      this.classList.toggle('open');
    });
    document.querySelectorAll('.msec > .mh').forEach(h => {
      h.addEventListener('click', e => {
        if (e.target.tagName === 'A') return;
        h.parentElement.classList.toggle('open');
      });
    });
  }

  function mSection(title, items) {
    return `<div class="msec"><div class="mh">${title} <span>▾</span></div>
      <div class="msub">${items.map(i => `<a href="${i[1]}">${i[0]}</a>`).join('')}</div></div>`;
  }

  /* ---- FOOTER ---- */
  const footEl = document.getElementById('footer-placeholder');
  if (footEl) {
    footEl.innerHTML = `
<footer id="footer">
  <div class="wrap">
    <div class="foot-grid">
      <div class="foot-brand">
        <a class="brand" href="${base}index.html">The American<span class="b"> Energy</span></a>
        <p>An all-of-the-above American energy strategy — solar, nuclear, natural gas, wind, hydro, geothermal, and battery storage, built on a domestic minerals-to-megawatts supply chain.</p>
        <p class="foot-founder">Founded by <a href="https://www.linkedin.com/in/shailupreti" target="_blank" rel="noopener">Shailesh Upreti</a></p>
      </div>
      <div class="foot-col"><h4>Energy Sources</h4><ul>
        <li><a href="${base}energy-sources/solar.html">Solar</a></li>
        <li><a href="${base}energy-sources/nuclear.html">Nuclear</a></li>
        <li><a href="${base}energy-sources/natural-gas.html">Natural Gas</a></li>
        <li><a href="${base}energy-sources/storage.html">Battery Storage</a></li>
        <li><a href="${base}energy-sources/index.html">View All →</a></li></ul></div>
      <div class="foot-col"><h4>Critical Minerals</h4><ul>
        <li><a href="${base}critical-minerals/lithium.html">Lithium</a></li>
        <li><a href="${base}critical-minerals/copper.html">Copper</a></li>
        <li><a href="${base}critical-minerals/nickel.html">Nickel</a></li>
        <li><a href="${base}critical-minerals/index.html">View All →</a></li></ul></div>
      <div class="foot-col"><h4>Cell Technology</h4><ul>
        <li><a href="${base}cell-technology/bmlmp.html">BMLMP</a></li>
        <li><a href="${base}cell-technology/lfp.html">LFP</a></li>
        <li><a href="${base}cell-technology/nmc.html">NMC</a></li>
        <li><a href="${base}cell-technology/american-bms.html">American BMS</a></li>
        <li><a href="${base}cell-technology/digital-dna.html">Digital DNA</a></li></ul></div>
      <div class="foot-col"><h4>Applications</h4><ul>
        <li><a href="${base}applications/ai-data-centers.html">AI Data Centers</a></li>
        <li><a href="${base}applications/electric-vehicles.html">Electric Vehicles</a></li>
        <li><a href="${base}applications/grid-and-bess.html">Grid &amp; BESS</a></li>
        <li><a href="${base}applications/defense-and-mission-critical.html">Defense</a></li>
        <li><a href="${base}applications/homes-and-buildings.html">Homes &amp; Buildings</a></li></ul></div>
      <div class="foot-col"><h4>Company</h4><ul>
        <li><a href="${base}index.html#america-first">America First</a></li>
        <li><a href="${base}index.html#value-chain">Value Chain</a></li>
        <li><a href="${base}index.html#contact">Contact</a></li>
        <li><a href="mailto:shailupreti@gmail.com">Email Us</a></li></ul></div>
    </div>
    <div class="foot-bot"><span>© 2026 The American Energy. All rights reserved. · 1701 North Street, Endicott, New York 13760</span><span>Powering American Independence</span></div>
    <div class="foot-net">Part of the C4V network — <a href="https://www.c4v.in" target="_blank" rel="noopener">C4V</a> <span>·</span> <a href="https://www.c4v.in" target="_blank" rel="noopener">Digital DNA</a> <span>·</span> <a href="https://www.americanbms.com" target="_blank" rel="noopener">American BMS</a></div>
  </div>
</footer>`;
  }

  /* ---- SLIDER ---- */
  (function () {
    const track = document.querySelector('.slider-track');
    if (!track) return;
    const slides = Array.from(document.querySelectorAll('.slide'));
    const dots = Array.from(document.querySelectorAll('.dot'));
    let cur = 0, timer; const IV = 6000;
    function go(i) {
      slides[cur].classList.remove('active'); dots[cur] && dots[cur].classList.remove('active');
      cur = (i + slides.length) % slides.length;
      slides[cur].classList.add('active'); dots[cur] && dots[cur].classList.add('active');
      track.style.transform = `translateX(-${cur * 100}%)`;
    }
    function auto() { timer = setInterval(() => go(cur + 1), IV); }
    function reset() { clearInterval(timer); auto(); }
    dots.forEach((d, i) => d.addEventListener('click', () => { go(i); reset(); }));
    document.querySelector('.slider-arrow.prev')?.addEventListener('click', () => { go(cur - 1); reset(); });
    document.querySelector('.slider-arrow.next')?.addEventListener('click', () => { go(cur + 1); reset(); });
    go(0); auto();
  })();

  /* ---- REVEAL ---- */
  const ro = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); ro.unobserve(e.target); } });
  }, { threshold: .08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

  /* ---- COUNTERS ---- */
  const co = new IntersectionObserver(es => {
    es.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, t = parseInt(el.dataset.target); let s = 0;
      const fn = ts => { if (!s) s = ts; const p = Math.min((ts - s) / 1300, 1); el.textContent = Math.floor(p * t); if (p < 1) requestAnimationFrame(fn); else el.textContent = t; };
      requestAnimationFrame(fn); co.unobserve(el);
    });
  }, { threshold: .5 });
  document.querySelectorAll('.counter').forEach(c => co.observe(c));

  /* ---- FORM (direct submit via /api/contact -> Resend) ---- */
  const formLoadedAt = Date.now();
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function showContactSuccess(f) {
    f.innerHTML =
      '<div class="form-success">' +
      '<span class="fs-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 6"/></svg></span>' +
      '<h3>Message sent</h3>' +
      '<p>Thanks — your message is on its way. We\'ll be in touch shortly.</p>' +
      '</div>';
  }

  window.handleSubmit = function (e) {
    e.preventDefault();
    const f = e.target;
    const alertEl = f.querySelector('#formAlert');
    if (alertEl) alertEl.classList.remove('show');

    // anti-spam: honeypot must stay empty; humans can't submit in under ~1.5s
    const hp = f.querySelector('[name="company_website"]');
    if (hp && hp.value) return;
    const g = n => { const el = f.querySelector(`[name="${n}"]`); return el ? (el.value || '').trim() : ''; };
    if (Date.now() - formLoadedAt < 1500) {
      if (alertEl) { alertEl.textContent = 'Please take a moment to complete the form.'; alertEl.classList.add('show'); }
      return;
    }
    if (!g('name') || !EMAIL_RE.test(g('email')) || g('message').length < 5) {
      if (alertEl) { alertEl.textContent = 'Please add your name, a valid email, and a short message.'; alertEl.classList.add('show'); }
      return;
    }

    const btn = f.querySelector('button[type=submit]'), orig = btn ? btn.textContent : '';
    if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

    const payload = {};
    f.querySelectorAll('input, select, textarea').forEach(el => { if (el.name) payload[el.name] = el.value; });

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(r => {
      if (!r.ok) throw new Error();
      showContactSuccess(f);
    }).catch(() => {
      if (btn) { btn.disabled = false; btn.textContent = orig; }
      if (alertEl) {
        alertEl.textContent = 'Something went wrong sending your message. Please try again, or email shailupreti@gmail.com directly.';
        alertEl.classList.add('show');
      }
    });
  };

  /* ---- CONTEXTUAL CONTACT ---- */
  // The contact form header adapts to which CTA brought the visitor here,
  // so "Partner With Us" doesn't land on "Visit The American Energy".
  const INTENT = {
    partner: ['Partner With Us', 'Partner With <em>The American Energy.</em>',
      "Tell us where you'd like to collaborate across the mineral-to-cell value chain.", 'Partnerships'],
    specs:   ['Cell Technology', 'Request <em>Cell Specs.</em>',
      'Tell us about your application and we’ll share datasheets for the relevant cell chemistry.', 'Cell Technology Inquiry'],
    touch:   ['Get in Touch', "Let's <em>Get in Touch.</em>",
      "Share a few details and the right person will get back to you.", ''],
    invest:  ['Investment', 'Invest in <em>American Energy.</em>',
      'Reach out about investment, financing, and partnership opportunities.', 'Investment & Finance'],
    policy:  ['Policy & Briefings', 'Policy &amp; <em>Briefings.</em>',
      'Request a briefing on the domestic battery supply chain.', 'Policy & Briefings'],
    media:   ['Media', 'Media &amp; <em>Speaking.</em>',
      'For interviews, speaking, and press inquiries.', 'Media & Speaking'],
    contact: ['Contact', 'Contact <em>The American Energy.</em>',
      "Send us a message and we'll be in touch.", 'General Inquiry']
  };
  function deriveIntent(s) {
    s = (s || '').toLowerCase();
    if (s.includes('partner')) return 'partner';
    if (s.includes('cell spec') || s.includes('request cell')) return 'specs';
    if (s.includes('get in touch')) return 'touch';
    if (s.includes('invest')) return 'invest';
    if (s.includes('policy') || s.includes('brief')) return 'policy';
    if (s.includes('media') || s.includes('speak') || s.includes('press')) return 'media';
    if (s.includes('contact')) return 'contact';
    return '';
  }
  function applyIntent(key) {
    const m = INTENT[key]; if (!m) return;
    const eb = document.getElementById('contact-eyebrow'),
          ti = document.getElementById('contact-title'),
          ld = document.getElementById('contact-lead');
    if (!ti) return;            // not on a page with the form
    eb && (eb.textContent = m[0]);
    ti.innerHTML = m[1];
    ld && (ld.textContent = m[2]);
    const sel = document.querySelector('.form [name="topic"]');
    if (sel && m[3]) { Array.from(sel.options).forEach(o => { if (o.text === m[3]) sel.value = o.value || o.text; }); }
  }
  // intercept any link that targets the contact section
  document.addEventListener('click', function (e) {
    const a = e.target.closest && e.target.closest('a[href*="#contact"]');
    if (!a) return;
    const intent = a.dataset.intent || deriveIntent(a.textContent);
    if (!intent) return;       // plain visit keeps the default header
    e.preventDefault();
    const here = document.getElementById('contact');   // the contact form lives only on home
    if (here) {                                         // already on the page that has the form
      applyIntent(intent);
      try { history.replaceState(null, '', location.pathname + '?intent=' + intent + '#contact'); } catch (_) {}
      here.scrollIntoView({ behavior: 'smooth' });
      const mn = document.getElementById('mnav'); if (mn) mn.classList.remove('open');
      const bg = document.getElementById('burger'); if (bg) bg.classList.remove('open');
    } else {                                            // cross page — carry intent in the URL
      const url = new URL(a.getAttribute('href'), location.href);
      url.searchParams.set('intent', intent);
      location.href = url.pathname + '?' + url.searchParams.toString() + '#contact';
    }
  });
  // on load, honor ?intent= from the URL
  (function () {
    const ip = new URLSearchParams(location.search).get('intent');
    if (ip) applyIntent(ip);
  })();
})();
