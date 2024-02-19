const apiKey = 'EABBBJGPABZ2RTUYAWN2S5SZJ';
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Guimaras%2C%20Philippines?unitGroup=metric&key=${apiKey}&contentType=json`;

    // Fetch current weather data
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const currentTemp = data.currentConditions.temp;
        const weatherDescription = data.currentConditions.conditions;
        document.getElementById('current-temp').textContent = `${currentTemp}°C`;
        document.getElementById('weather-description').textContent = weatherDescription;
      })
      .catch(error => console.error('Error fetching weather data:', error));

    // Fetch three-day forecast data
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const forecastData = data.days.slice(0, 3); // Extracting forecast for the next three days
        forecastData.forEach(day => {
          const date = new Date(day.datetime);
          const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
          const forecastItem = document.createElement('div');
          forecastItem.classList.add('forecast-item');
          forecastItem.innerHTML = `
            <div class="forecast-date">${dayOfWeek}</div>
            <div class="forecast-temperature">${day.tempmax}°C / ${day.tempmin}°C</div>
            <div class="forecast-description">${day.conditions}</div>
          `;
          document.getElementById('forecast').appendChild(forecastItem);
        });
      })
      .catch(error => console.error('Error fetching forecast data:', error));