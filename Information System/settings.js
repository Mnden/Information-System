document.addEventListener('DOMContentLoaded', function() {
  const settingsForm = document.getElementById('settingsForm');
  const appNameInput = document.getElementById('appName');
  const appVersionInput = document.getElementById('appVersion');
  const themeSelect = document.getElementById('theme');

  settingsForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const appName = appNameInput.value;
    const appVersion = appVersionInput.value;
    const theme = themeSelect.value;
    saveSettings(appName, appVersion, theme);
  });

  function saveSettings(appName, appVersion, theme) {
    // You can save the settings to localStorage or a backend server
    // For demonstration purposes, we'll just log the settings
    console.log('Settings saved:');
    console.log('App Name:', appName);
    console.log('App Version:', appVersion);
    console.log('Theme:', theme);
  }

  // You can load and display the current settings when the page loads
  // For demonstration purposes, we'll just set some default values
  appNameInput.value = 'My App';
  appVersionInput.value = '1.0';
  themeSelect.value = 'light';
});
