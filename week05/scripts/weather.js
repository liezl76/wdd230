// select HTML elements in the document
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description')
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic')
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
const apiUrl = `//api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;

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

// // Function to display results in the HTML document
function displayResults(data) {
  myDescription.innerHTML = data.weather[0].myDescription
  myTemperature.innerHTML = `${data.main.temp}&deg;F`
  const iconsrc = 'https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'
  myGraphic.setAttribute('src', iconsrc)
  myGraphic.setAttribute('alt', data.weather[0].description)
}

// Call the apiFetch function to fetch data from the API
apiFetch();

