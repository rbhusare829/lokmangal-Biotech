/* Shared behaviour for every page: reveal-on-scroll, counters, header, navigation, search launcher. */
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;
const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => Array.from(r.querySelectorAll<T>(s));

function initReveal() {
  $$('[data-stagger]').forEach((el) => {
    Array.from(el.children).forEach((c, i) => (c as HTMLElement).style.setProperty('--i', String(i)));
  });
  const items = $$('[data-reveal], [data-stagger], [data-words], .spot-bars');
  if (reduced || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  items.forEach((el) => io.observe(el));
}

function initCounters() {
  const items = $$('[data-count]');
  if (!items.length) return;
  const locale = document.documentElement.lang === 'mr' ? 'mr-IN' : 'en-IN';
  const run = (el: HTMLElement) => {
    const target = Number(el.dataset.count);
    const prefix = el.dataset.prefix ?? '';
    const suffix = el.dataset.suffix ?? '';
    const plain = el.dataset.plain === 'true';
    const fmt = new Intl.NumberFormat(locale, { maximumFractionDigits: 0, useGrouping: !plain });
    if (reduced) {
      el.textContent = `${prefix}${fmt.format(target)}${suffix}`;
      return;
    }
    const start = performance.now();
    const from = plain ? Math.max(target - 40, 0) : 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / 1600);
      const eased = 1 - (1 - p) ** 4;
      el.textContent = `${prefix}${fmt.format(Math.round(from + (target - from) * eased))}${suffix}`;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          run(e.target as HTMLElement);
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.5 },
  );
  items.forEach((el) => io.observe(el));
}

function initHeader() {
  const header = $('[data-header]');
  const toTop = $('[data-to-top]');
  let last = window.scrollY;
  let ticking = false;
  const update = () => {
    const y = window.scrollY;
    const openMenu = !!$('[data-nav-item].is-open');
    const focused = header?.contains(document.activeElement);
    if (header) {
      header.classList.toggle('is-scrolled', y > 24);
      if (y > 520 && y > last + 4 && !openMenu && !focused) header.classList.add('is-hidden');
      else if (y < last - 4 || y < 520) header.classList.remove('is-hidden');
    }
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? Math.min(1, y / max) : 0;
    document.documentElement.style.setProperty('--progress', progress.toFixed(4));
    if (toTop) {
      toTop.classList.toggle('is-visible', y > 700);
      toTop.style.setProperty('--ring', String(100 - progress * 100));
    }
    last = y;
  };
  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    },
    { passive: true },
  );
  document.addEventListener('focusin', () => header?.classList.remove('is-hidden'));
  toTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    $('#main')?.focus({ preventScroll: true });
  });
  update();
}

function closeMenus(except?: Element) {
  $$('[data-nav-item].is-open').forEach((item) => {
    if (item !== except) {
      item.classList.remove('is-open');
      $('[data-nav-trigger]', item)?.setAttribute('aria-expanded', 'false');
    }
  });
}

function setDrawer(open: boolean) {
  const drawer = $('[data-drawer]');
  const burger = $('[data-burger]');
  if (!drawer || !burger) return;
  drawer.classList.toggle('is-open', open);
  drawer.setAttribute('aria-hidden', String(!open));
  burger.setAttribute('aria-expanded', String(open));
  document.documentElement.style.overflow = open ? 'hidden' : '';
  if (open) $('[data-drawer-close]')?.focus();
}

function initNav() {
  $$('[data-nav-trigger]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const item = btn.closest('[data-nav-item]')!;
      const willOpen = !item.classList.contains('is-open');
      closeMenus(item);
      item.classList.toggle('is-open', willOpen);
      btn.setAttribute('aria-expanded', String(willOpen));
    });
  });
  document.addEventListener('click', (e) => {
    if (!(e.target as Element).closest('[data-nav-item]')) closeMenus();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenus();
      setDrawer(false);
    }
  });
  $('[data-burger]')?.addEventListener('click', () => setDrawer(true));
  $('[data-drawer-close]')?.addEventListener('click', () => setDrawer(false));
  $('[data-drawer]')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) setDrawer(false);
  });

  const bar = $('[data-announce]') as HTMLElement | null;
  if (bar) {
    let hidden = false;
    try {
      hidden = sessionStorage.getItem('lb-announce') === 'hidden';
    } catch {}
    if (!hidden) bar.hidden = false;
    $('[data-announce-close]')?.addEventListener('click', () => {
      bar.hidden = true;
      try {
        sessionStorage.setItem('lb-announce', 'hidden');
      } catch {}
    });
  }
  // Keep query and hash when switching language.
  const sw = $<HTMLAnchorElement>('[data-lang-switch]');
  if (sw) sw.href = sw.getAttribute('href')! + location.search + location.hash;
}

function initMagnetic() {
  if (reduced || !finePointer) return;
  $$('[data-magnetic]').forEach((el) => {
    el.style.transition += ', translate 0.45s cubic-bezier(.34,1.56,.64,1)';
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * 0.22;
      const y = (e.clientY - (r.top + r.height / 2)) * 0.3;
      el.style.translate = `${Math.max(-10, Math.min(10, x))}px ${Math.max(-8, Math.min(8, y))}px`;
    });
    el.addEventListener('pointerleave', () => (el.style.translate = ''));
  });
}

function initVideo() {
  $$('[data-video]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.video!;
      const frame = document.createElement('iframe');
      frame.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
      frame.title = btn.getAttribute('aria-label') ?? 'Video';
      frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      frame.allowFullscreen = true;
      btn.replaceChildren(frame);
    });
  });
}

function initSearchLauncher() {
  const dialog = $<HTMLDialogElement>('dialog[data-search]');
  if (!dialog) return;
  let loaded: Promise<unknown> | null = null;
  const open = () => {
    loaded ??= import('./search').then((m) => m.setupSearch(dialog));
    dialog.showModal();
    $<HTMLInputElement>('[data-search-input]', dialog)?.select();
  };
  $$('[data-search-open]').forEach((b) =>
    b.addEventListener('click', () => {
      setDrawer(false);
      open();
    }),
  );
  document.addEventListener('keydown', (e) => {
    const typing = (e.target as Element).closest('input, textarea, select, [contenteditable]');
    if (((e.key === 'k' || e.key === 'K') && (e.ctrlKey || e.metaKey)) || (e.key === '/' && !typing)) {
      e.preventDefault();
      if (!dialog.open) open();
    }
  });
}

initReveal();
initCounters();
initHeader();
initNav();
initMagnetic();
initVideo();
initSearchLauncher();

export {};
