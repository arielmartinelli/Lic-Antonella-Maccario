const paths={external:'<path d="M6 18 18 6M6 6h12v12"/>',arrow:'<path d="M5 12h14m-5-5 5 5-5 5"/>',activity:'<path d="M2 12h5l3-8 4 16 3-8h5"/>',measure:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 5v5m5-5v3m5-3v5"/>',leaf:'<path d="M20 3C9 2 3 7 4 14c1 8 16 7 16-11Z"/><path d="M4 21 15 10M8 17v-5"/>',video:'<rect x="2" y="5" width="14" height="14" rx="2"/><path d="m16 10 6-4v12l-6-4"/>',pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',file:'<path d="M14 2H5v20h14V7Zm0 0v5h5M8 12h8m-8 4h6"/>',instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17 7h.01"/>',mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 5 10 8L22 5"/>',spark:'<path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5Z"/>'};
document.querySelectorAll('[data-icon]').forEach(el=>{el.setAttribute('aria-hidden','true');el.innerHTML=`<svg viewBox="0 0 24 24">${paths[el.dataset.icon]||paths.arrow}</svg>`});
document.querySelectorAll('[data-wa]').forEach(el=>{el.href='https://wa.me/541154626792?text='+encodeURIComponent('Hola Antonella, quisiera coordinar una consulta de nutrición.');el.target='_blank';el.rel='noopener'});

// Content stays visible when motion is disabled or observers are unavailable.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!motionPreference.matches && 'IntersectionObserver' in window) {
  const targets = document.querySelectorAll('.hero-copy > *, .specialties .wrap, .approach > div, .section-head, .service-list article, .location, .contact-inner > *, .footer-brand, .footer-links');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
  targets.forEach((el, index) => {
    const group = el.closest('.hero-copy, .location-grid, .contact-inner');
    const order = group ? [...group.children].indexOf(el) : 0;
    el.style.setProperty('--reveal-delay', `${Math.min(Math.max(order, 0) * 65, 195)}ms`);
    el.classList.add('reveal');
    observer.observe(el);
  });
  // Keyboard users can reach links without waiting for the entrance effect.
  document.addEventListener('focusin', event => {
    event.target.closest('.reveal')?.classList.add('is-visible');
  });
  motionPreference.addEventListener('change', event => {
    if (!event.matches) return;
    targets.forEach(el => el.classList.add('is-visible'));
    observer.disconnect();
  });
}
