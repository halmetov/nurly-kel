const btn = document.getElementById('themeToggle');
const root = document.documentElement;

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  root.setAttribute('data-theme', 'dark');
  btn.textContent = 'Light';
}

btn.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  btn.textContent = next === 'light' ? 'Dark' : 'Light';
});