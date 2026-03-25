// ============================================================
//  StickyStudio — script.js
// ============================================================

// ── Scroll Reveal ────────────────────────────────────────────
// Watches for elements with class “reveal” and adds “visible”
// when they scroll into view

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// ── Product Card Buttons ─────────────────────────────────────
// Shows a green "Added!" confirmation when clicked

document.querySelectorAll('.btn-card').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.textContent = '✓ Added!';
    btn.style.background = '#06D6A0';

    setTimeout(() => {
      btn.textContent = 'Design Now';
      btn.style.background = '';
    }, 1800);
  });
});
