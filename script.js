// script.js

// Function to enable dark mode
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  }
  
  // Function to disable dark mode
  function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
  }
  
  // Check for saved user preference
  const savedDarkMode = localStorage.getItem('darkMode');
  
  if (savedDarkMode === 'enabled') {
    enableDarkMode();
    document.getElementById('darkModeToggle').checked = true;
  }
  
  // Toggle dark mode on checkbox change
  document.getElementById('darkModeToggle').addEventListener('change', function() {
    if (this.checked) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
  