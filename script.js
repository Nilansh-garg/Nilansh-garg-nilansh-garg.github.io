/* ═══════════════════════════════════════════════
   NILANSH GARG — PORTFOLIO SCRIPTS
   script.js
   ═══════════════════════════════════════════════ */

/* ─── LOADER ─── */
const loaderEl = document.getElementById('loader');
const countEl  = document.getElementById('loaderCount');
let n = 0;
const countInt = setInterval(() => {
  n = Math.min(n + Math.floor(Math.random() * 8) + 4, 100);
  countEl.textContent = n + '%';
  if (n >= 100) clearInterval(countInt);
}, 60);
window.addEventListener('load', () => {
  setTimeout(() => loaderEl.classList.add('hidden'), 1700);
});

/* ─── CUSTOM CURSOR ─── */
const cur  = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cur.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
});

(function animRing() {
  rx += (mx - rx) * 0.1;
  ry += (my - ry) * 0.1;
  ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
  requestAnimationFrame(animRing);
})();

document.querySelectorAll('a, button, .proj-card').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
  el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
});

/* ─── SMOOTH SCROLL ─── */
function navTo(id) {
  const el     = document.getElementById(id);
  if (!el) return;
  const offset = document.getElementById('mainNav').offsetHeight;
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.pageYOffset - offset,
    behavior: 'smooth'
  });
}

/* ─── MOBILE MENU ─── */
let menuOpen = false;

function toggleMenu() {
  menuOpen = !menuOpen;
  document.getElementById('navToggle').classList.toggle('active', menuOpen);
  document.getElementById('mobileMenu').classList.toggle('open', menuOpen);
  document.body.style.overflow = menuOpen ? 'hidden' : '';
}

function closeMobile() {
  menuOpen = false;
  document.getElementById('navToggle').classList.remove('active');
  document.getElementById('mobileMenu').classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── NAV SHRINK ON SCROLL ─── */
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 80);
});

/* ─── SCROLL REVEAL ─── */
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('on');
      revObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.rev, .rev-l, .rev-r').forEach(el => revObs.observe(el));

/* ─── SKILL BARS ─── */
const skillObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-bar').forEach(b => b.classList.add('go'));
      skillObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skills-stack').forEach(el => skillObs.observe(el));

/* ─── ANIMATED NEURAL GRAPH (Hero) ─── */
(function initNeural() {
  const svg = document.getElementById('neuralCanvas');
  if (!svg) return;

  const W = 500, H = 500, N = 22;
  const gold    = '#C9A84C';
  const goldDim = 'rgba(201,168,76,0.15)';
  const nodes   = [];

  for (let i = 0; i < N; i++) {
    nodes.push({
      x:  60 + Math.random() * 380,
      y:  60 + Math.random() * 380,
      r:  2  + Math.random() * 3,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    });
  }

  const edgeSvgs = [];
  const nodeSvgs = [];
  const edgeG    = document.getElementById('neuralEdges');
  const nodeG    = document.getElementById('neuralNodes');

  // Build edges between nearby nodes
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      if (Math.sqrt(dx * dx + dy * dy) < 140) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('stroke', goldDim);
        line.setAttribute('stroke-width', '0.5');
        edgeG.appendChild(line);
        edgeSvgs.push({ el: line, i, j });
      }
    }
  }

  // Build node circles
  for (let i = 0; i < N; i++) {
    const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c.setAttribute('r', nodes[i].r);
    c.setAttribute('fill', gold);
    c.setAttribute('opacity', 0.6 + Math.random() * 0.4);
    nodeG.appendChild(c);
    nodeSvgs.push(c);
  }

  function tick() {
    for (let i = 0; i < N; i++) {
      nodes[i].x += nodes[i].vx;
      nodes[i].y += nodes[i].vy;
      if (nodes[i].x < 30 || nodes[i].x > W - 30) nodes[i].vx *= -1;
      if (nodes[i].y < 30 || nodes[i].y > H - 30) nodes[i].vy *= -1;
      nodeSvgs[i].setAttribute('cx', nodes[i].x);
      nodeSvgs[i].setAttribute('cy', nodes[i].y);
    }
    for (const e of edgeSvgs) {
      e.el.setAttribute('x1', nodes[e.i].x);
      e.el.setAttribute('y1', nodes[e.i].y);
      e.el.setAttribute('x2', nodes[e.j].x);
      e.el.setAttribute('y2', nodes[e.j].y);
    }
    requestAnimationFrame(tick);
  }

  tick();
})();
