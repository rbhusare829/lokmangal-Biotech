/* Command-palette search over products, crops, nutrients and pages. Loaded on first open. */
interface Entry {
  t: string;
  k: string;
  g: string;
  u: string;
  a?: string;
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
const norm = (s: string) => s.toLowerCase().normalize('NFKC');
const ICONS: Record<string, string> = {
  p: '<path d="M8 3c.8 1.2 1.2 2.2 1.2 3.2h5.6C14.8 5.2 15.2 4.2 16 3c-1.4-.6-2.7-.6-4-.2-1.3-.4-2.6-.4-4 .2Z"/><path d="M9.2 6.2C6.4 8.4 4 12 4 15.6 4 19.4 7.2 21.5 12 21.5s8-2.1 8-5.9c0-3.6-2.4-7.2-5.2-9.4"/>',
  c: '<path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>',
  n: '<path d="M10 2v7.5L4.8 18A2.5 2.5 0 0 0 7 22h10a2.5 2.5 0 0 0 2.2-4L14 9.5V2"/><path d="M8.5 2h7"/>',
  f: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>',
};

function score(e: Entry, terms: string[]) {
  const title = norm(e.t);
  const key = norm(e.k);
  let s = 0;
  for (const term of terms) {
    const at = title.indexOf(term);
    if (at === 0) s += 12;
    else if (at > 0) s += title[at - 1] === ' ' ? 8 : 5;
    else if (key.includes(term)) s += 2;
    else return 0;
  }
  return s;
}

function mark(text: string, terms: string[]) {
  let out = esc(text);
  for (const term of terms) {
    if (term.length < 2) continue;
    const re = new RegExp(`(${esc(term).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    out = out.replace(re, '<mark>$1</mark>');
  }
  return out;
}

export function setupSearch(dialog: HTMLDialogElement) {
  const input = dialog.querySelector<HTMLInputElement>('[data-search-input]')!;
  const results = dialog.querySelector<HTMLElement>('[data-search-results]')!;
  const quick = dialog.querySelector<HTMLElement>('[data-search-quick]')!;
  const empty = dialog.querySelector<HTMLElement>('[data-search-empty]')!;
  const status = dialog.querySelector<HTMLElement>('[data-search-status]')!;
  const indexUrl = dialog.dataset.index!;
  const data: Promise<{ groups: Record<string, string>; entries: Entry[] }> = fetch(indexUrl).then((r) => r.json());
  let active = -1;
  let options: HTMLElement[] = [];

  const close = () => {
    if (!dialog.open || dialog.classList.contains('is-closing')) return;
    dialog.classList.add('is-closing');
    const done = () => {
      dialog.classList.remove('is-closing');
      dialog.close();
    };
    dialog.addEventListener('animationend', done, { once: true });
    setTimeout(() => dialog.open && done(), 320);
  };

  const select = (i: number) => {
    if (!options.length) return;
    active = (i + options.length) % options.length;
    options.forEach((o, n) => o.setAttribute('aria-selected', String(n === active)));
    input.setAttribute('aria-activedescendant', options[active].id);
    options[active].scrollIntoView({ block: 'nearest' });
  };

  const render = async () => {
    const q = norm(input.value.trim());
    const terms = q.split(/\s+/).filter(Boolean);
    if (!terms.length) {
      results.hidden = true;
      empty.hidden = true;
      quick.hidden = false;
      input.setAttribute('aria-expanded', 'false');
      input.removeAttribute('aria-activedescendant');
      options = [];
      return;
    }
    const { groups, entries } = await data;
    if (norm(input.value.trim()) !== q) return;
    const hits = entries
      .map((e) => ({ e, s: score(e, terms) }))
      .filter((h) => h.s > 0)
      .sort((a, b) => b.s - a.s);
    const parts: string[] = [];
    let n = 0;
    for (const g of Object.keys(groups)) {
      const own = hits.filter((h) => h.e.g === g).slice(0, 6);
      if (!own.length) continue;
      parts.push(`<li role="presentation" class="search__group">${esc(groups[g])}</li>`);
      for (const { e } of own) {
        parts.push(
          `<li role="option" id="sr-${n++}" class="search__opt" aria-selected="false" data-href="${esc(e.u)}"><span class="search__opt-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[e.g] ?? ICONS.f}</svg></span><span><b>${mark(e.t, terms)}</b>${e.a ? `<small>${esc(e.a)}</small>` : ''}</span></li>`,
        );
      }
    }
    results.innerHTML = parts.join('');
    options = Array.from(results.querySelectorAll<HTMLElement>('[role="option"]'));
    quick.hidden = true;
    results.hidden = !options.length;
    empty.hidden = !!options.length;
    input.setAttribute('aria-expanded', String(!!options.length));
    status.textContent = String(options.length);
    active = -1;
    if (options.length) select(0);
    options.forEach((o, i) => {
      o.addEventListener('click', () => (location.href = o.dataset.href!));
      o.addEventListener('mousemove', () => active !== i && select(i));
    });
  };

  input.addEventListener('input', render);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      select(active + 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      select(active - 1);
    } else if (e.key === 'Enter' && options[active]) {
      e.preventDefault();
      location.href = options[active].dataset.href!;
    }
  });
  dialog.querySelector('[data-search-close]')!.addEventListener('click', close);
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) close();
  });
  dialog.addEventListener('cancel', (e) => {
    e.preventDefault();
    close();
  });
}
