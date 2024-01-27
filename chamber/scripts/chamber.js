    // Display visit message based on localStorage
    const visitMessage = document.getElementById('visit-message');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentDate = Date.now();

    if (!lastVisit) {
        visitMessage.textContent = 'Welcome! Let us know if you have any questions.';
    } else {
        const daysDifference = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            visitMessage.textContent = 'Back so soon! Awesome!';
        } else {
            const plural = daysDifference === 1 ? '' : 's';
            visitMessage.textContent = `You last visited ${daysDifference} day${plural} ago.`;
        }
    }

    // Update localStorage with the current date
    localStorage.setItem('lastVisit', currentDate);
