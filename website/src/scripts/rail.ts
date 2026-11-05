document.querySelectorAll<HTMLElement>('[data-rail-root]').forEach((root) => {
  const rail = root.querySelector<HTMLElement>('[data-rail]')!;
  const bar = root.querySelector<HTMLElement>('[data-rail-bar]');
  const scope = root.closest('section') ?? document;
  const step = () => (rail.firstElementChild as HTMLElement | null)?.getBoundingClientRect().width ?? 300;

  const paint = () => {
    const max = rail.scrollWidth - rail.clientWidth;
    const p = max > 0 ? rail.scrollLeft / max : 0;
    if (bar) {
      const visible = Math.max(0.18, rail.clientWidth / rail.scrollWidth);
      bar.style.width = `${visible * 100}%`;
      bar.style.transform = `translateX(${(p * (1 - visible) * 100) / visible}%)`;
    }
  };
  rail.addEventListener('scroll', () => requestAnimationFrame(paint), { passive: true });
  window.addEventListener('resize', paint);
  paint();

  scope.querySelector('[data-rail-prev]')?.addEventListener('click', () => rail.scrollBy({ left: -step() - 20, behavior: 'smooth' }));
  scope.querySelector('[data-rail-next]')?.addEventListener('click', () => rail.scrollBy({ left: step() + 20, behavior: 'smooth' }));

  // Mouse drag; touch devices already scroll natively.
  let down = false;
  let moved = false;
  let startX = 0;
  let startLeft = 0;
  rail.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse') return;
    down = true;
    moved = false;
    startX = e.clientX;
    startLeft = rail.scrollLeft;
  });
  window.addEventListener('pointermove', (e) => {
    if (!down) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 4) {
      moved = true;
      rail.classList.add('is-drag');
      rail.scrollLeft = startLeft - dx;
    }
  });
  window.addEventListener('pointerup', () => {
    down = false;
    rail.classList.remove('is-drag');
  });
  rail.addEventListener('click', (e) => {
    if (moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);
  rail.addEventListener('dragstart', (e) => e.preventDefault());
});

export {};
