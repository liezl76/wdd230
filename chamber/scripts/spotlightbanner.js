// Displays or hides the banner based on the current day and time
function displayBanner() {
    const banner = document.getElementById('spotlightBanner');
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0=Sunday, 1=Monday, ..., 6=Saturday
    const currentHour = today.getHours();

    if ((dayOfWeek >= 1 && dayOfWeek <= 3) && (currentHour >= 7 && currentHour < 19)) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }
}

// Event listener for closing the banner
document.getElementById('closeSpotlightBanner').addEventListener('click', () => {
    document.getElementById('spotlightBanner').style.display = 'none';
});

// Call functions to fetch display banner
displayBanner();