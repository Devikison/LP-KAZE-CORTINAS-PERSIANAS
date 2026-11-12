/* Kazê: recursos comuns a todas as páginas (site, link da bio e páginas legais)
   O Google Tag Manager (GTM-P58QJP9H) fica direto no <head> de cada página.
   Aqui: rolagem suave da roda do mouse, sutil, sem biblioteca. */
(() => {
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.dataLayer = window.dataLayer || [];

  /* Rolagem suave da roda do mouse
     Desliza com inércia leve. Solta o controle ao pegar a barra lateral,
     usar o teclado, tocar na tela ou clicar. Desligada em "reduzir movimento". */
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!fine || still) return;
  const root = document.documentElement;
  /* Mola amortecida (sem quique): parte de velocidade zero, acelera de leve e
     assenta devagar. Calculada pelo tempo real, então é igual em 60 Hz e 144 Hz. */
  const W = 8.6;           /* firmeza da mola: menor = mais lento e mais "flutuante" */
  const STEP_MAX = 160;     /* limite por clique da roda, evita saltos bruscos */
  let target = scrollY, cur = scrollY, vel = 0, running = false, last = 0, mine = -1;
  const maxY = () => root.scrollHeight - innerHeight;
  const loop = (now) => {
    const dt = Math.min(0.05, (now - last) / 1000 || 0.016); last = now;
    /* integra em passos pequenos para ficar estável */
    let rest = dt;
    while (rest > 0) {
      const h = Math.min(rest, 0.008); rest -= h;
      const acc = -2 * W * vel - W * W * (cur - target);
      vel += acc * h; cur += vel * h;
    }
    if (Math.abs(target - cur) < 0.4 && Math.abs(vel) < 4) { cur = target; vel = 0; running = false; }
    mine = Math.round(cur);
    window.scrollTo({ top: cur, behavior: 'instant' });
    if (running) requestAnimationFrame(loop);
  };
  const free = () => { running = false; vel = 0; target = cur = scrollY; };
  addEventListener('wheel', (e) => {
    if (e.ctrlKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    const t = e.target;
    if (t && t.closest && t.closest('dialog[open], .menu.is-open, iframe, [data-own-scroll]')) return;
    e.preventDefault();
    let d = e.deltaMode === 1 ? e.deltaY * 36 : e.deltaMode === 2 ? e.deltaY * innerHeight : e.deltaY;
    d = Math.max(-STEP_MAX, Math.min(STEP_MAX, d));
    if (!running) { cur = target = scrollY; vel = 0; }
    target = Math.max(0, Math.min(maxY(), target + d * 1.1));
    if (!running) { running = true; last = performance.now(); requestAnimationFrame(loop); }
  }, { passive: false });
  /* se a página rolar por outro motivo (âncora, barra lateral, teclado), segue a posição real */
  addEventListener('scroll', () => { if (!running && Math.abs(scrollY - mine) > 2) { target = cur = scrollY; vel = 0; } }, { passive: true });
  addEventListener('pointerdown', free, { passive: true });
  addEventListener('keydown', free);
  addEventListener('touchstart', free, { passive: true });
})();
