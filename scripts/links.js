// Define baseURL and linksURL
const baseURL = ""; // Update with your base URL if necessary
const linksURL = "links.json"; // Update the file path if necessary

// Asynchronous function to get the links data
async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error('Failed to fetch links data');
        }
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
            anchor.href = baseURL + link.url;
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            activityList.appendChild(listItem);
        });

        learningActivities.appendChild(activityList);
    });
}

// Call getLinks to fetch data and display links
getLinks();