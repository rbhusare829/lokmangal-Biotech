/*
 * Enquiry form. The site is static, so by default the message opens ready-to-send in WhatsApp or the
 * visitor's email app. Set PUBLIC_FORM_ENDPOINT at build time to also POST it to a form service.
 */
document.querySelectorAll<HTMLFormElement>('form[data-enquiry]').forEach((form) => {
  const s = JSON.parse(form.dataset.strings!) as Record<string, string>;
  const status = form.querySelector<HTMLElement>('[data-status]')!;
  let method = 'whatsapp';
  form.querySelectorAll<HTMLButtonElement>('[data-send]').forEach((b) => b.addEventListener('click', () => (method = b.dataset.send!)));

  const setError = (el: HTMLInputElement, msg: string) => {
    const box = el.closest('.field')!;
    box.querySelector('.field__error')?.remove();
    if (msg) {
      const p = document.createElement('p');
      p.className = 'field__error';
      p.id = `${el.id}-err`;
      p.textContent = msg;
      box.append(p);
      el.setAttribute('aria-invalid', 'true');
      el.setAttribute('aria-describedby', p.id);
    } else {
      el.removeAttribute('aria-invalid');
      el.removeAttribute('aria-describedby');
    }
  };

  const name = form.elements.namedItem('name') as HTMLInputElement;
  const phone = form.elements.namedItem('phone') as HTMLInputElement;
  const checkName = () => {
    const bad = name.value.trim().length < 2;
    setError(name, bad ? s.errName : '');
    return !bad;
  };
  const checkPhone = () => {
    const bad = !/^(\+?91[\s-]?)?[6-9](\s?\d){9}$/.test(phone.value.trim());
    setError(phone, bad ? s.errPhone : '');
    return !bad;
  };
  name.addEventListener('blur', () => name.value && checkName());
  phone.addEventListener('blur', () => phone.value && checkPhone());

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const okName = checkName();
    const okPhone = checkPhone();
    if (!okName || !okPhone) {
      (okName ? phone : name).focus();
      return;
    }
    const data = new FormData(form);
    const labels: Record<string, string> = { name: s.name, phone: s.phone, firm: s.firm, place: s.place, state: s.state, topic: s.topic, crop: s.crop, message: s.message };
    const lines = Array.from(data.entries())
      .filter(([, v]) => String(v).trim())
      .map(([k, v]) => `${labels[k] ?? k}: ${String(v).trim()}`);
    const text = `${s.subject}\n${lines.join('\n')}`;
    const endpoint = form.dataset.endpoint;
    if (endpoint) {
      fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } }).catch(() => {});
    }
    const url = method === 'email' ? `mailto:${form.dataset.email}?subject=${encodeURIComponent(s.subject)}&body=${encodeURIComponent(text)}` : `https://wa.me/${form.dataset.wa}?text=${encodeURIComponent(text)}`;
    status.textContent = s.ok;
    window.open(url, method === 'email' ? '_self' : '_blank', 'noopener');
  });
});

export {};
