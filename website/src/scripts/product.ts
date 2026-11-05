/* Product page image switcher, for products sold in two forms (for example granule and liquid). */
const stage = document.querySelector<HTMLElement>('[data-stage]');
if (stage) {
  const main = stage.querySelector<HTMLImageElement>('.stage__img');
  const thumbs = Array.from(stage.querySelectorAll<HTMLElement>('[data-thumb]'));
  thumbs.forEach((t) =>
    t.addEventListener('click', () => {
      if (!main || !t.dataset.full) return;
      main.removeAttribute('srcset');
      main.src = t.dataset.full;
      thumbs.forEach((x) => x.setAttribute('aria-pressed', String(x === t)));
    }),
  );
}

export {};
