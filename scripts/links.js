// Define baseURL and linksURL
const baseURL = "https://github.com/liezl76/wdd230/"; // Update with your base URL if necessary
const linksURL = "https://raw.githubusercontent.com/liezl76/wdd230/main/data/links.json"; // Update the file path if necessary

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

    const ul = document.createElement('ul');

    weeks.forEach(week => {
        const listItem = document.createElement('li');
        const links = week.links.map(link => `<a href="${baseURL}${link.url}">${link.title}</a>`).join(' | ');
        listItem.innerHTML = `<a href="#">${week.week}: </a> ${links}`;
        ul.appendChild(listItem);
    });

    const sectionHeader = document.createElement('h2');
    sectionHeader.textContent = 'Learning Activities';
    learningActivities.appendChild(sectionHeader);
    learningActivities.appendChild(ul);
}

// Call getLinks to fetch data and display links
getLinks();