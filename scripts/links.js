// Define baseURL
const baseURL = "https://github.com/liezl76/wdd230/";

// Asynchronous function to get the links data
async function getLinks() {
    const linksURL = "https://github.com/liezl76/wdd230/blob/main/data/links.json"; // Update the URL to the raw JSON file
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error('Error fetching links data:', error);
    }
}

// Function to display links
function displayLinks(weeks) {
    const learningActivities = document.querySelector('.card');
    learningActivities.innerHTML = ''; // Clear existing content

    weeks.forEach(week => {
        const weekHeader = document.createElement('h3');
        weekHeader.textContent = week.week;
        learningActivities.appendChild(weekHeader);

        const activityList = document.createElement('ul');

        week.links.forEach(link => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = link.url.startsWith('http') ? link.url : baseURL + link.url; // Check if the URL is absolute or relative
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            activityList.appendChild(listItem);
        });

        learningActivities.appendChild(activityList);
    });
}

// Call getLinks to fetch data and display links
getLinks();