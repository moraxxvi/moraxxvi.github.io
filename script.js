// Переключатель светлой и тёмной темы.
// По умолчанию сайт берёт тему из настроек устройства; если нажать кнопку,
// выбор запоминается в браузере и действует на обеих версиях сайта (RU и EN).
(function () {
  var root = document.documentElement;
  var button = document.querySelector('.theme');
  if (!button) return;

  // какая тема сейчас на экране
  function current() {
    var chosen = root.getAttribute('data-theme');
    if (chosen) return chosen;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // на кнопке написано, на какую тему она переключит
  function paint() {
    var dark = current() === 'dark';
    button.textContent = dark ? button.dataset.light : button.dataset.dark;
  }

  button.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { /* в приватном режиме просто не запомним */ }
    paint();
  });

  paint();
})();
