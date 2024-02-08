// Define baseURL and linksURL
const baseURL = "https://github.com/liezl76/wdd230/";
const linksURL = "https://github.com/liezl76/wdd230/blob/main/data/links.json";

// Asynchronous function to get the links data
async function getLinks() {
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