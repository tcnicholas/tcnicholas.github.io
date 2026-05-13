(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      // Ignore storage errors, e.g. private browsing restrictions.
    }

    var isDark = theme === 'dark';
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');

    var icon = toggle.querySelector('.theme-toggle-icon');
    var text = toggle.querySelector('.theme-toggle-text');
    if (icon) icon.textContent = isDark ? '☼' : '☾';
    if (text) text.textContent = isDark ? 'Light' : 'Dark';
  }

  var currentTheme = root.getAttribute('data-theme') || 'light';
  setTheme(currentTheme);

  toggle.addEventListener('click', function () {
    var nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  });
})();
