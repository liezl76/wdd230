// Fetches weather data from OpenWeatherMap API
async function getWeatherData() {
    try {
        const apiKey = '998fbd78ab14ba0ce1f98c993ab57a6f';
        const latitude = '10.54701';
        const longitude = '122.58772';
        const units = 'metric';
        const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${units}&exclude=minutely,hourly&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Current weather
        const currentTemp = data.current.temp;
        const weatherDesc = data.current.weather[0].description;
        const currentTempElement = document.querySelector('#current-temp');
        const weatherDescElement = document.querySelector('#weather-description');
        currentTempElement.textContent = `${currentTemp}°C`;
        weatherDescElement.textContent = weatherDesc;

        // Three day forecast
        const forecastContainer = document.querySelector('#forecast');
        forecastContainer.innerHTML = '';
        for (let i = 1; i <= 3; i++) {
            const forecast = data.daily[i];
            const date = new Date(forecast.dt * 1000);
            const day = date.toLocaleDateString('en-US', { weekday: 'short' });
            const temp = `${forecast.temp.day}°C`;
            const iconUrl = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`;

            const forecastElement = document.createElement('div');
            forecastElement.classList.add('forecast-item');
            forecastElement.innerHTML = `
                <p>${day}</p>
                <img src="${iconUrl}" alt="${forecast.weather[0].description}">
                <p>${temp}</p>
            `;
            forecastContainer.appendChild(forecastElement);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Displays spotlight advertisements
function displaySpotlightAds() {
    fetch('members.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const spotlightMembers = data.members.filter(member => member.membership_level === 'silver' || member.membership_level === 'gold');
            const randomMembers = getRandomMembers(spotlightMembers, 2); // Change 2 to the number of members you want to display
            randomMembers.forEach(member => {
                // Display member as spotlight ad
            });
        })
        .catch(error => console.error('Error fetching member data:', error));
}

// Function to get random members from an array
function getRandomMembers(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

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

// Call functions to fetch weather data, display spotlight ads, and display banner
getWeatherData();
displaySpotlightAds();
displayBanner();