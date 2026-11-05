/* Home hero: cross-fading slides with word reveals, progress dots, pause, pointer parallax. */
const hero = document.querySelector<HTMLElement>('[data-hero]');
if (hero) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = window.matchMedia('(pointer: fine)').matches;
  const slides = Array.from(hero.querySelectorAll<HTMLElement>('[data-slide]'));
  const media = hero.querySelector<HTMLElement>('.hero__media')!;
  let visuals = Array.from(hero.querySelectorAll<HTMLElement>('.hero__img'));
  // Only the first photo loads with the page. The rest arrive once the page is idle.
  const loadRest = () => {
    const later = media.querySelectorAll('template');
    if (!later.length) return;
    later.forEach((t) => t.replaceWith(t.content.cloneNode(true)));
    visuals = Array.from(hero.querySelectorAll<HTMLElement>('.hero__img'));
  };
  const dots = Array.from(hero.querySelectorAll<HTMLElement>('[data-dot]'));
  const asides = Array.from(hero.querySelectorAll<HTMLElement>('[data-aside]'));
  const toggle = hero.querySelector<HTMLElement>('[data-hero-toggle]');
  const status = hero.querySelector<HTMLElement>('[data-hero-status]');
  const MS = 6500;
  let index = 0;
  let timer = 0;
  let userPaused = reduced;
  let hoverPaused = false;
  let offscreen = false;

  const canRun = () => !userPaused && !hoverPaused && !offscreen && !document.hidden;

  const restartDot = () => {
    const bar = hero.querySelector<HTMLElement>('.hero__dot.is-active span');
    if (bar) {
      bar.style.animation = 'none';
      void bar.offsetWidth;
      bar.style.animation = '';
    }
  };

  const schedule = () => {
    window.clearInterval(timer);
    const run = canRun();
    hero.classList.toggle('is-paused', !run);
    if (run) {
      restartDot();
      timer = window.setInterval(() => go(index + 1), MS);
    }
  };

  const go = (i: number, announce = false) => {
    index = (i + slides.length) % slides.length;
    if (index !== 0) loadRest();
    slides.forEach((s, n) => {
      const on = n === index;
      s.classList.toggle('is-active', on);
      s.setAttribute('aria-hidden', String(!on));
      s.querySelectorAll('a').forEach((a) => (on ? a.removeAttribute('tabindex') : a.setAttribute('tabindex', '-1')));
    });
    visuals.forEach((v, n) => v.classList.toggle('is-active', n === index));
    dots.forEach((d, n) => {
      d.classList.toggle('is-active', n === index);
      d.setAttribute('aria-current', String(n === index));
    });
    asides.forEach((a) => a.classList.toggle('is-active', Number(a.dataset.aside) === index));
    hero.style.setProperty('--slide-ms', `${MS}ms`);
    if (announce && status) status.textContent = `${index + 1} / ${slides.length}: ${slides[index].querySelector('.eyebrow')?.textContent ?? ''}`;
  };

  dots.forEach((d, n) =>
    d.addEventListener('click', () => {
      go(n, true);
      schedule();
    }),
  );
  hero.querySelector('[data-hero-prev]')?.addEventListener('click', () => {
    go(index - 1, true);
    schedule();
  });
  hero.querySelector('[data-hero-next]')?.addEventListener('click', () => {
    go(index + 1, true);
    schedule();
  });
  toggle?.addEventListener('click', () => {
    userPaused = !userPaused;
    toggle.setAttribute('aria-pressed', String(userPaused));
    schedule();
  });
  if (reduced) toggle?.setAttribute('aria-pressed', 'true');

  const copy = hero.querySelector('.hero__copy');
  copy?.addEventListener('pointerenter', () => {
    hoverPaused = true;
    schedule();
  });
  copy?.addEventListener('pointerleave', () => {
    hoverPaused = false;
    schedule();
  });
  copy?.addEventListener('focusin', () => {
    hoverPaused = true;
    schedule();
  });
  copy?.addEventListener('focusout', (e) => {
    if (!copy.contains((e as FocusEvent).relatedTarget as Node)) {
      hoverPaused = false;
      schedule();
    }
  });
  new IntersectionObserver(([e]) => {
    offscreen = !e.isIntersecting;
    schedule();
  }).observe(hero);
  document.addEventListener('visibilitychange', schedule);

  if (!reduced && fine) {
    hero.addEventListener('pointermove', (e) => {
      const r = hero.getBoundingClientRect();
      const px = ((e.clientX - r.left) / r.width - 0.5).toFixed(3);
      const py = ((e.clientY - r.top) / r.height - 0.5).toFixed(3);
      hero.querySelectorAll<HTMLElement>('[data-parallax]').forEach((p) => {
        p.style.setProperty('--px', px);
        p.style.setProperty('--py', py);
      });
    });
  }

  go(0);
  schedule();
  window.addEventListener('load', () => setTimeout(loadRest, 2500), { once: true });
}

export {};
