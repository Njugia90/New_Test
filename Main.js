// Get the theme toggle button and body element
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check if the user has a preferred theme saved in localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
  themeToggleButton.textContent = 'Switch to Light Mode';
}

// Toggle theme on button click
themeToggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');

  // Update button text based on current theme
  if (body.classList.contains('dark-theme')) {
    themeToggleButton.textContent = 'Switch to Light Mode';
    localStorage.setItem('theme', 'dark'); // Save dark theme preference
  } else {
    themeToggleButton.textContent = 'Switch to Dark Mode';
    localStorage.removeItem('theme'); // Remove theme preference
  }
});
