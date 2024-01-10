document.addEventListener('DOMContentLoaded', function () {
    // Get current year
    document.getElementById('currentYear').innerText = new Date().getFullYear();
  
    // Get last modified date
    document.getElementById('lastModified').innerText = 'Last Modified: ' + document.lastModified;
  });  