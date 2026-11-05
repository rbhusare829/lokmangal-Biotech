/* Dose calculator: multiplies the published dose by the farmer's area or tank size. */
interface Item {
  id: string;
  slug: string;
  label: string;
  mode: 'acre' | 'tank';
  min: number;
  max: number;
  unit: 'kg' | 'ml' | 'g';
  packs?: number[];
}

document.querySelectorAll<HTMLElement>('[data-calc]').forEach((root) => {
  const { items, s, lang } = JSON.parse(root.dataset.config!) as { items: Item[]; s: Record<string, string>; lang: string };
  const locale = lang === 'mr' ? 'mr-IN' : 'en-IN';
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const select = q<HTMLSelectElement>('[data-product]');
  const range = q<HTMLInputElement>('[data-range]');
  const tabs = Array.from(root.querySelectorAll<HTMLElement>('[data-tab]'));
  const fmt = (n: number, digits = 2) => new Intl.NumberFormat(locale, { maximumFractionDigits: digits }).format(n);
  let mode: 'acre' | 'tank' = 'acre';

  const amount = (v: number, unit: string) => {
    if (unit === 'kg') return `${fmt(v, 1)} ${s.kg}`;
    if (unit === 'ml') return v >= 1000 ? `${fmt(v / 1000, 2)} ${s.l}` : `${fmt(v, 1)} ${s.ml}`;
    return v >= 1000 ? `${fmt(v / 1000, 2)} ${s.kg}` : `${fmt(v, 1)} ${s.g}`;
  };
  const span = (min: number, max: number, unit: string) => (min === max ? amount(min, unit) : `${amount(min, unit)} – ${amount(max, unit)}`);
  const SACK = '<svg class="calc__bag" style="--i:{i}" viewBox="0 0 22 30" fill="currentColor" aria-hidden="true"><path d="M3 3c5 2 11-1 16 0-1 5 1 7 1 12s1 9 0 12c-6 1-12 1-18 0-1-4 0-8 0-12S4 7 3 3Z"/></svg>';

  const setScale = () => {
    if (mode === 'acre') {
      range.min = '0.5';
      range.max = '25';
      range.step = '0.5';
      range.value = '1';
      q('[data-range-label]').textContent = s.area;
      q('[data-scale-min]').textContent = `${fmt(0.5)} ${s.acreUnit}`;
      q('[data-scale-max]').textContent = `${fmt(25)} ${s.acreUnit}`;
    } else {
      range.min = '15';
      range.max = '600';
      range.step = '5';
      range.value = '200';
      q('[data-range-label]').textContent = s.water;
      q('[data-scale-min]').textContent = `${fmt(15)} ${s.litreUnit}`;
      q('[data-scale-max]').textContent = `${fmt(600)} ${s.litreUnit}`;
    }
  };

  const paint = () => {
    const item = items.find((i) => i.id === select.value);
    if (!item) return;
    const v = Number(range.value);
    const pct = ((v - Number(range.min)) / (Number(range.max) - Number(range.min))) * 100;
    range.style.setProperty('--p', `${pct}%`);
    q('[data-range-out]').textContent = `${fmt(v)} ${mode === 'acre' ? s.acreUnit : s.litreUnit}`;
    const min = item.min * v;
    const max = item.max * v;
    const big = q('[data-big]');
    const parts = (min === max ? amount(min, item.unit) : span(min, max, item.unit)).split(' ');
    const unitWord = parts.pop();
    big.innerHTML = `${parts.join(' ')}<small>${unitWord}</small>`;
    const perUnit = `${span(item.min, item.max, item.unit)} ${mode === 'acre' ? s.perAcre : s.perLitre}`;
    q('[data-dose]').textContent = perUnit;
    q('[data-r1-v]').textContent = perUnit;
    const bags = q('[data-bags]');
    if (mode === 'acre') {
      const pack = item.packs?.[0] ?? 50;
      const count = Math.ceil(max / pack);
      q('[data-r2-k]').textContent = s.packs;
      q('[data-r2-v]').textContent = `${fmt(count, 0)} × ${fmt(pack, 0)} ${s.kg}`;
      const shown = Math.min(count, 28);
      bags.innerHTML = Array.from({ length: shown }, (_, i) => SACK.replace('{i}', String(i))).join('') + (count > shown ? `<span class="calc__more">+${fmt(count - shown, 0)}</span>` : '');
    } else {
      q('[data-r2-k]').textContent = s.pump;
      q('[data-r2-v]').textContent = span(item.min * 15, item.max * 15, item.unit);
      bags.innerHTML = '';
    }
  };

  const setMode = (m: 'acre' | 'tank', keepSlug?: string) => {
    mode = m;
    tabs.forEach((t) => t.setAttribute('aria-selected', String(t.dataset.tab === m)));
    q('[data-ink]').style.setProperty('--x', m === 'acre' ? '0' : '100%');
    select.innerHTML = items
      .filter((i) => i.mode === m)
      .map((i) => `<option value="${i.id}">${i.label}</option>`)
      .join('');
    if (keepSlug) {
      const hit = items.find((i) => i.mode === m && i.slug === keepSlug);
      if (hit) select.value = hit.id;
    }
    setScale();
    paint();
  };

  tabs.forEach((t) => t.addEventListener('click', () => setMode(t.dataset.tab as 'acre' | 'tank')));
  select.addEventListener('change', paint);
  range.addEventListener('input', paint);

  const wanted = new URLSearchParams(location.search).get('p');
  const hit = wanted ? items.find((i) => i.slug === wanted) : undefined;
  setMode(hit?.mode ?? 'acre', hit?.slug);
  if (hit) root.scrollIntoView({ block: 'center', behavior: 'instant' as ScrollBehavior });
});

export {};
