const icon = document.getElementById('theme-icon');

function updateIcon(isDark) {
  icon.src = isDark
    ? "https://img.icons8.com/ios-filled/50/sun--v1.png"
    : "https://img.icons8.com/ios-filled/50/moon-symbol.png";
}

function setTheme(isDark) {
  document.body.classList.toggle('dark-mode', isDark);
  updateIcon(isDark);
  localStorage.setItem('darkMode', isDark); // save preference
}

// Load saved theme on page load
const savedTheme = localStorage.getItem('darkMode') === 'true';
setTheme(savedTheme);

// Toggle theme when icon is clicked
icon.addEventListener('click', () => {
  const isDark = !document.body.classList.contains('dark-mode');
  setTheme(isDark);
});
