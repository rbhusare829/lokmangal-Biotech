/* Lightbox for gallery images, opening from the thumbnail position, plus gallery filter chips. */
const box = document.querySelector<HTMLDialogElement>('[data-lightbox]');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (box) {
  const img = box.querySelector<HTMLImageElement>('[data-lightbox-img]')!;
  const cap = box.querySelector<HTMLElement>('[data-lightbox-cap]')!;
  let items: HTMLElement[] = [];
  let at = 0;

  const show = (i: number, from?: DOMRect) => {
    at = (i + items.length) % items.length;
    const el = items[at];
    img.src = el.dataset.full ?? '';
    img.alt = el.dataset.caption ?? '';
    cap.textContent = el.dataset.caption ?? '';
    if (reduced) return;
    img.getAnimations().forEach((a) => a.cancel());
    img
      .decode()
      .catch(() => {})
      .then(() => {
        const r = img.getBoundingClientRect();
        if (from && r.width) {
          const scale = from.width / r.width;
          const dx = from.left + from.width / 2 - (r.left + r.width / 2);
          const dy = from.top + from.height / 2 - (r.top + r.height / 2);
          img.animate([{ transform: `translate(${dx}px, ${dy}px) scale(${scale})`, opacity: 0.5 }, { transform: 'none', opacity: 1 }], { duration: 480, easing: 'cubic-bezier(.16,1,.3,1)' });
        } else {
          img.animate([{ opacity: 0, transform: 'scale(.97)' }, { opacity: 1, transform: 'none' }], { duration: 320, easing: 'cubic-bezier(.16,1,.3,1)' });
        }
      });
  };
  const close = () => {
    if (!box.open) return;
    if (reduced) return box.close();
    box.classList.add('is-closing');
    const done = () => {
      box.classList.remove('is-closing');
      box.close();
    };
    box.addEventListener('animationend', done, { once: true });
    setTimeout(() => box.open && done(), 340);
  };

  document.querySelectorAll<HTMLElement>('[data-zoom]').forEach((el) => {
    el.addEventListener('click', () => {
      items = Array.from(document.querySelectorAll<HTMLElement>('[data-zoom]')).filter((x) => !x.hidden);
      box.showModal();
      show(items.indexOf(el), el.querySelector('img')?.getBoundingClientRect());
    });
  });
  box.querySelector('[data-lightbox-close]')!.addEventListener('click', close);
  box.querySelector('[data-lightbox-prev]')!.addEventListener('click', () => show(at - 1));
  box.querySelector('[data-lightbox-next]')!.addEventListener('click', () => show(at + 1));
  box.addEventListener('click', (e) => {
    if (e.target === box || (e.target as Element).classList.contains('lb__stage')) close();
  });
  box.addEventListener('cancel', (e) => {
    e.preventDefault();
    close();
  });
  box.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') show(at + 1);
    if (e.key === 'ArrowLeft') show(at - 1);
  });
}

document.querySelectorAll<HTMLElement>('[data-gallery-filter]').forEach((bar) => {
  const chips = Array.from(bar.querySelectorAll<HTMLElement>('[data-filter]'));
  const items = Array.from(document.querySelectorAll<HTMLElement>('[data-zoom]'));
  chips.forEach((c) =>
    c.addEventListener('click', () => {
      const key = c.dataset.filter!;
      chips.forEach((x) => x.setAttribute('aria-pressed', String(x === c)));
      let i = 0;
      items.forEach((el) => {
        const on = key === 'all' || el.dataset.kind === key;
        el.hidden = !on;
        if (on && !reduced) {
          el.animate([{ opacity: 0, transform: 'translateY(14px) scale(.98)' }, { opacity: 1, transform: 'none' }], { duration: 420, delay: Math.min(i++, 8) * 40, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards' });
        }
      });
    }),
  );
});

export {};
