// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// Function to fetch weather data
function getWeatherData() {
    const apiKey = '998fbd78ab14ba0ce1f98c993ab57a6f';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Guimaras&appid=${apiKey}&units=metric`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const currentTemperature = data.main.temp;
            const weatherDescription = data.weather[0].description;
            // Update HTML to display current temperature and weather description
            document.getElementById('currentTemperature').textContent = `Temperature: ${currentTemperature}°C`;
            document.getElementById('weatherDescription').textContent = `Description: ${weatherDescription}`;
        })
        .catch(error => console.log(error));
}

// Function to check if today is Monday, Tuesday, or Wednesday and if it's between 7 AM and 7 PM
function isBannerDay() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0=Sunday, 1=Monday, ..., 6=Saturday
    const currentHour = today.getHours();

    // Check if it's Monday, Tuesday, or Wednesday and if it's between 7 AM and 7 PM
    return (dayOfWeek >= 1 && dayOfWeek <= 3) && (currentHour >= 7 && currentHour < 19);
}

// Function to display banner
function displayBanner() {
    const banner = document.getElementById('spotlightBanner');
    if (isBannerDay()) {
        banner.style.display = 'block';
    }
}

// Function to close banner
function closeBanner() {
    const banner = document.getElementById('spotlightBanner');
    banner.style.display = 'none';
}

// Event listener for closing the banner
document.getElementById('closeSpotlightBanner').addEventListener('click', closeBanner);

// Call functions to fetch weather data, display spotlight ads, and display banner
getWeatherData();
displaySpotlightAds();
displayBanner();