// weather.js

const apiKey = '998fbd78ab14ba0ce1f98c993ab57a6f';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Guimaras,PH&appid=${apiKey}&units=metric`;

// Fetch current weather data
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const currentTemp = data.main.temp;
    const weatherDescription = data.weather[0].description;
    document.getElementById('current-temp').textContent = `${currentTemp}°C`;
    document.getElementById('weather-description').textContent = weatherDescription;
  })
  .catch(error => console.error('Error fetching weather data:', error));

// Fetch three-day forecast data
// Add code to fetch forecast and display it accordingly