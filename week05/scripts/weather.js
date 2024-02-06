// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Define the URL for the OpenWeatherMap API
const url = 'https://api.openweathermap.org/data/2.5/weather';

// Define the API key
const apiKey = '998fbd78ab14ba0ce1f98c993ab57a6f';

// Define the latitude and longitude of Trier, Germany
const latitude = '49.75';
const longitude = '6.64';

// Define the units
const units = 'imperial';

// Construct the URL with query parameters
const apiUrl = `${url}?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;

// Define an asynchronous function to fetch data from the API
async function apiFetch() {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // display results in HTML
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

// Call the apiFetch function to fetch data from the API
apiFetch();

// Function to display results in the HTML document
function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`; // Display current temperature
  const iconCode = data.weather[0].icon; // Get icon code
  const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`; // Construct icon URL
  let desc = data.weather[0].description; // Get weather description
  weatherIcon.setAttribute('src', iconSrc); // Set weather icon source
  weatherIcon.setAttribute('alt', desc); // Set weather icon alt attribute
  captionDesc.textContent = `${desc}`; // Display weather description
}

