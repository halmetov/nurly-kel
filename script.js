const btn = document.getElementById('themeToggle');
const root = document.documentElement;

btn.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  btn.textContent = next === 'light' ? 'Dark' : 'Light';
});