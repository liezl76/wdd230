// Fetches weather data from OpenWeatherMap API
async function getWeatherData() {
    try {
        const apiKey = "998fbd78ab14ba0ce1f98c993ab57a6f";
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
        const currentTempElement = document.querySelector('#current-temp');
        currentTempElement.textContent = `${currentTemp}°C`;

        // Three day forecast
        const forecastContainer = document.querySelector('#forecast');
        forecastContainer.innerHTML = '';
        for (let i = 1; i <= 3; i++) {
            const forecast = data.daily[i];
            const date = new Date(forecast.dt * 1000);
            const day = date.toLocaleDateString('en-US', { weekday: 'short' });
            const temp = `${forecast.temp.day}°C`;
            const iconCode = forecast.weather[0].icon; // Get the icon code
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`; // Construct the icon URL

            const forecastElement = document.createElement('div');
            forecastElement.classList.add('col'); // Add this line to style forecast items in columns
            forecastElement.innerHTML = `
                <p>${day}</p>
                <img src="${iconUrl}" alt="${forecast.weather[0].description}" class="weather-icon">
                <h1 class="temp">${temp}</h1>
            `;
            forecastContainer.appendChild(forecastElement);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Call function to fetch weather data
getWeatherData();