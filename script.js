// Мобильное меню
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Точки карусели товаров (мобильная версия)
const productsRow = document.getElementById('productsRow');
const productsDots = document.getElementById('productsDots');

if (productsRow && productsDots) {
  const tiles = Array.from(productsRow.children);

  tiles.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    productsDots.appendChild(dot);
  });

  const dots = Array.from(productsDots.children);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = tiles.indexOf(entry.target);
        dots.forEach(d => d.classList.remove('active'));
        if (dots[index]) dots[index].classList.add('active');
      }
    });
  }, { root: productsRow, threshold: 0.6 });

  tiles.forEach(tile => observer.observe(tile));
}
