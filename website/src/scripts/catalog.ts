/* Catalogue filters: search text plus one choice per group, kept in the URL so links can be shared. */
const root = document.querySelector<HTMLElement>('[data-catalog]');
if (root) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cards = Array.from(root.querySelectorAll<HTMLElement>('.pcard'));
  const input = root.querySelector<HTMLInputElement>('[data-q]')!;
  const now = root.querySelector<HTMLElement>('[data-count-now]')!;
  const empty = root.querySelector<HTMLElement>('[data-empty]')!;
  const clear = root.querySelector<HTMLElement>('[data-clear]')!;
  const groups = Array.from(root.querySelectorAll<HTMLElement>('[data-group]'));
  const locale = document.documentElement.lang === 'mr' ? 'mr-IN' : 'en-IN';
  const state: Record<string, string> = { family: '', use: '', nutrient: '', crop: '', q: '' };

  const matches = (c: HTMLElement) => {
    if (state.family && c.dataset.kind !== state.family) return false;
    if (state.use && !(c.dataset.uses ?? '').split(' ').includes(state.use)) return false;
    if (state.nutrient && !(c.dataset.nutrients ?? '').split(' ').includes(state.nutrient)) return false;
    if (state.crop && !(c.dataset.crops ?? '').split(' ').includes(state.crop)) return false;
    if (state.q) {
      const text = c.dataset.text ?? '';
      if (!state.q.split(/\s+/).every((t) => text.includes(t))) return false;
    }
    return true;
  };

  const syncUrl = () => {
    const url = new URL(location.href);
    Object.entries(state).forEach(([k, v]) => (v ? url.searchParams.set(k, v) : url.searchParams.delete(k)));
    history.replaceState(history.state, '', url);
  };

  const apply = (animate = true) => {
    let shown = 0;
    cards.forEach((c) => {
      const on = matches(c);
      c.hidden = !on;
      if (on) {
        if (animate && !reduced) {
          c.getAnimations().forEach((a) => a.cancel());
          c.animate([{ opacity: 0, transform: 'translateY(14px) scale(.98)' }, { opacity: 1, transform: 'none' }], { duration: 420, delay: Math.min(shown, 8) * 40, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards' });
        }
        shown++;
      }
    });
    now.textContent = new Intl.NumberFormat(locale).format(shown);
    empty.hidden = shown !== 0;
    clear.hidden = !Object.values(state).some(Boolean);
    groups.forEach((g) => {
      g.querySelectorAll<HTMLElement>('[data-v]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.v === state[g.dataset.group!])));
    });
  };

  groups.forEach((g) => {
    g.addEventListener('click', (e) => {
      const btn = (e.target as Element).closest<HTMLElement>('[data-v]');
      if (!btn) return;
      state[g.dataset.group!] = btn.dataset.v ?? '';
      apply();
      syncUrl();
    });
  });
  let t = 0;
  input.addEventListener('input', () => {
    state.q = input.value.trim().toLowerCase();
    apply(false);
    window.clearTimeout(t);
    t = window.setTimeout(syncUrl, 300);
  });
  clear.addEventListener('click', () => {
    Object.keys(state).forEach((k) => (state[k] = ''));
    input.value = '';
    apply();
    syncUrl();
  });

  const more = root.querySelector<HTMLDetailsElement>('[data-filters-more]');
  const wide = window.matchMedia('(width >= 1040px)');
  const syncMore = () => {
    if (more) more.open = wide.matches;
  };
  wide.addEventListener('change', syncMore);
  syncMore();

  const params = new URLSearchParams(location.search);
  let hadParams = false;
  Object.keys(state).forEach((k) => {
    const v = params.get(k);
    if (v) {
      state[k] = v;
      hadParams = true;
    }
  });
  if (state.q) input.value = state.q;
  if (hadParams) apply(false);
}

export {};
