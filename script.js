// Site institucional Luzeiros do Sul — JavaScript leve, sem dependências.
(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.main-nav');
  const navLinks = document.querySelectorAll('.main-nav a');

  function closeMenu() {
    if (!menu || !menuButton) return;
    menu.classList.remove('is-open');
    menuButton.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
    document.body.classList.remove('menu-open');
  }

  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const opening = !menu.classList.contains('is-open');
      menu.classList.toggle('is-open', opening);
      menuButton.classList.toggle('is-open', opening);
      menuButton.setAttribute('aria-expanded', String(opening));
      menuButton.setAttribute('aria-label', opening ? 'Fechar menu' : 'Abrir menu');
      document.body.classList.toggle('menu-open', opening);
    });
    navLinks.forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 880) closeMenu();
    });
  }

  // Oculta eventos concluídos automaticamente; consulte README para editar a agenda.
  const eventItems = [...document.querySelectorAll('[data-date]')];
  const today = new Date();
  const localToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  let upcoming = 0;
  eventItems.forEach(item => {
    const [year, month, day] = item.dataset.date.split('-').map(Number);
    const eventDate = new Date(year, month - 1, day);
    if (eventDate < localToday) {
      item.hidden = true;
    } else {
      upcoming += 1;
    }
  });
  const empty = document.getElementById('empty-events');
  if (empty) empty.hidden = upcoming !== 0;

  const yearSpan = document.getElementById('copyright-year');
  if (yearSpan) yearSpan.textContent = String(today.getFullYear());

  if ('IntersectionObserver' in window) {
    const sections = document.querySelectorAll('main > section[id]');
    const sectionObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        navLinks.forEach(link => {
          const selected = link.getAttribute('href') === '#' + entry.target.id;
          link.classList.toggle('active', selected);
          if (selected) link.setAttribute('aria-current','location');
          else link.removeAttribute('aria-current');
        });
      }
    }, { rootMargin: '-18% 0px -60% 0px' });
    sections.forEach(section => sectionObserver.observe(section));
  }
})();
