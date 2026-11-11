/**
 * SCS 2211: Software Project Management — Portal & Slidedeck Engine
 * Adapted from teqmaster Portal + Zimknows Slidedeck
 * Zero dependencies, zero external requests, mobile-safe touch swipe
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initThemeSystem();
    initAmbientParticles();
    initPageTransitions();
    initKineticTitle();
    initSlidedeck();
  });

  window.addEventListener('pageshow', () => {
    document.body.classList.remove('page-exiting');
  });

  /* ------------------------------------------------------------------------
     1. Theme Switcher (Dark / Light Mode)
     ------------------------------------------------------------------------ */
  function initThemeSystem() {
    const btn = document.getElementById('themeToggleBtn');
    const html = document.documentElement;
    const saved = localStorage.getItem('spm_theme');

    if (saved) {
      html.setAttribute('data-theme', saved);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      html.setAttribute('data-theme', 'light');
    } else {
      html.setAttribute('data-theme', 'dark');
    }

    if (btn) {
      btn.addEventListener('click', () => {
        const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', next);
        localStorage.setItem('spm_theme', next);
      });
    }
  }

  /* ------------------------------------------------------------------------
     2. Lightweight Ambient Particle Canvas
     ------------------------------------------------------------------------ */
  function initAmbientParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles = [];

    function createParticles() {
      particles = [];
      const density = width < 768 ? 42000 : 28000;
      const maxParticles = width < 768 ? 18 : 40;
      const count = Math.min(Math.floor((width * height) / density), maxParticles);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 1.8 + 0.8,
          vx: (Math.random() - 0.5) * 0.32,
          vy: (Math.random() - 0.5) * 0.32,
          emerald: Math.random() > 0.4
        });
      }
    }

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createParticles();
    }

    function animate() {
      if (document.hidden) {
        requestAnimationFrame(animate);
        return;
      }
      ctx.clearRect(0, 0, width, height);
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.emerald
          ? (isLight ? 'rgba(5, 150, 105, 0.35)' : 'rgba(16, 185, 129, 0.35)')
          : (isLight ? 'rgba(2, 132, 199, 0.3)' : 'rgba(6, 182, 212, 0.3)');
        ctx.fill();
      }

      if (width >= 768) {
        ctx.lineWidth = 0.6;
        for (let a = 0; a < particles.length; a++) {
          for (let b = a + 1; b < particles.length; b++) {
            const dx = particles[a].x - particles[b].x;
            const dy = particles[a].y - particles[b].y;
            const d = dx * dx + dy * dy;
            if (d < 10000) {
              const alpha = (1 - Math.sqrt(d) / 100) * 0.12;
              ctx.strokeStyle = isLight ? `rgba(5, 150, 105, ${alpha})` : `rgba(16, 185, 129, ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(particles[a].x, particles[a].y);
              ctx.lineTo(particles[b].x, particles[b].y);
              ctx.stroke();
            }
          }
        }
      }

      requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    resize();
    animate();
  }

  /* ------------------------------------------------------------------------
     3. Smooth Multi-Page Transitions (No Modals)
     ------------------------------------------------------------------------ */
  function initPageTransitions() {
    document.querySelectorAll('a[href]').forEach((link) => {
      const href = link.getAttribute('href');
      if (
        href &&
        !href.startsWith('http') &&
        !href.startsWith('#') &&
        !href.startsWith('mailto:') &&
        !link.hasAttribute('target') &&
        href.endsWith('.html')
      ) {
        link.addEventListener('click', (e) => {
          if (e.metaKey || e.ctrlKey) return;
          e.preventDefault();
          document.body.classList.add('page-exiting');
          setTimeout(() => {
            window.location.href = href;
          }, 140);
        });
      }
    });
  }

  /* ------------------------------------------------------------------------
     4. Portal Kinetic Title Highlight (Click to pulse)
     ------------------------------------------------------------------------ */
  function initKineticTitle() {
    const title = document.getElementById('kineticHeroTitle');
    if (!title) return;
    const letters = title.querySelectorAll('.kinetic-letter');
    if (!letters.length) return;

    function runWave() {
      letters.forEach((letter, idx) => {
        letter.classList.remove('locked-in');
        setTimeout(() => {
          letter.classList.add('locked-in');
        }, idx * 45);
      });
    }

    runWave();
    title.addEventListener('click', runWave);
  }

  /* ------------------------------------------------------------------------
     5. Slidedeck Engine (for concept1.html .. concept9.html)
     ------------------------------------------------------------------------ */
  function initSlidedeck() {
    const slides = Array.from(document.querySelectorAll('.slide'));
    if (!slides.length) return;

    const totalSlides = slides.length;
    let currentSlide = 1;

    const dots = Array.from(document.querySelectorAll('.dot'));
    const slideCounter = document.getElementById('slideCounter');
    const timerDisplay = document.getElementById('timerDisplay');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    const btnReset = document.getElementById('btnReset');
    const btnFullscreen = document.getElementById('btnFullscreen');

    // Study timer
    let seconds = 0;
    const timerHandle = setInterval(() => {
      seconds++;
      if (timerDisplay) {
        const m = String(Math.floor(seconds / 60)).padStart(2, '0');
        const s = String(seconds % 60).padStart(2, '0');
        timerDisplay.textContent = `${m}:${s}`;
      }
    }, 1000);

    function parseInitialSlide() {
      const params = new URLSearchParams(window.location.search);
      const q = parseInt(params.get('slide'), 10);
      if (!isNaN(q) && q >= 1 && q <= totalSlides) {
        currentSlide = q;
        return;
      }
      const h = parseInt(window.location.hash.replace('#', ''), 10);
      if (!isNaN(h) && h >= 1 && h <= totalSlides) {
        currentSlide = h;
      }
    }

    function updateView() {
      slides.forEach((s, idx) => {
        const active = idx + 1 === currentSlide;
        s.classList.toggle('active', active);
        if (active) s.scrollTop = 0;
      });

      dots.forEach((d, idx) => {
        d.classList.toggle('active', idx + 1 === currentSlide);
      });

      if (slideCounter) {
        slideCounter.textContent = `${String(currentSlide).padStart(2, '0')} / ${String(totalSlides).padStart(2, '0')}`;
      }

      if (btnPrev) btnPrev.disabled = currentSlide <= 1;
      if (btnNext) btnNext.disabled = currentSlide >= totalSlides;

      if (history.replaceState) {
        history.replaceState(null, '', `#${currentSlide}`);
      }
    }

    function goToSlide(n) {
      if (n < 1 || n > totalSlides) return;
      currentSlide = n;
      updateView();
    }

    function nextSlide() {
      if (currentSlide < totalSlides) {
        currentSlide++;
        updateView();
      }
    }

    function prevSlide() {
      if (currentSlide > 1) {
        currentSlide--;
        updateView();
      }
    }

    if (btnPrev) btnPrev.addEventListener('click', prevSlide);
    if (btnNext) btnNext.addEventListener('click', nextSlide);

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => goToSlide(idx + 1));
    });

    if (btnReset) {
      btnReset.addEventListener('click', () => {
        seconds = 0;
        if (timerDisplay) timerDisplay.textContent = '00:00';
        goToSlide(1);
      });
    }

    if (btnFullscreen) {
      btnFullscreen.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      });
    }

    window.addEventListener('keydown', (e) => {
      if (['ArrowRight', 'ArrowDown', 'Enter', ' ', 'PageDown'].includes(e.key)) {
        // Do not hijack Enter/Space when focused on an anchor link
        if (document.activeElement && document.activeElement.tagName === 'A') return;
        e.preventDefault();
        nextSlide();
      } else if (['ArrowLeft', 'ArrowUp', 'Backspace', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        prevSlide();
      } else if (/^[1-9]$/.test(e.key)) {
        const num = parseInt(e.key, 10);
        if (num <= totalSlides) goToSlide(num);
      } else if (e.key.toLowerCase() === 'f' && btnFullscreen) {
        btnFullscreen.click();
      } else if (e.key.toLowerCase() === 'r' && btnReset) {
        btnReset.click();
      }
    });

    // Mobile-safe horizontal swipe (never blocks vertical scrolling inside long mobile slides)
    let touchX = 0;
    let touchY = 0;
    window.addEventListener('touchstart', (e) => {
      touchX = e.changedTouches[0].screenX;
      touchY = e.changedTouches[0].screenY;
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].screenX - touchX;
      const dy = e.changedTouches[0].screenY - touchY;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        if (dx < 0) nextSlide();
        else prevSlide();
      }
    }, { passive: true });

    window.addEventListener('beforeunload', () => clearInterval(timerHandle));

    parseInitialSlide();
    updateView();
  }
})();

