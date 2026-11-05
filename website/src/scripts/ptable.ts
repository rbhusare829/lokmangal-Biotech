document.querySelectorAll<HTMLElement>('[data-ptable]').forEach((root) => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const tiles = Array.from(root.querySelectorAll<HTMLElement>('[data-tile]'));
  const panels = Array.from(root.querySelectorAll<HTMLElement>('[data-panel]'));
  const show = (id: string) => {
    tiles.forEach((t) => t.setAttribute('aria-pressed', String(t.dataset.tile === id)));
    panels.forEach((p) => {
      const on = p.dataset.panel === id;
      p.hidden = !on;
      if (on && !reduced) {
        p.animate([{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'none' }], { duration: 420, easing: 'cubic-bezier(.16,1,.3,1)' });
      }
    });
  };
  tiles.forEach((t) => t.addEventListener('click', () => show(t.dataset.tile!)));
});

export {};
