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

// Call functions to fetch weather data
getWeatherData();