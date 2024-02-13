// Define baseURL and linksURL
const baseURL = "https://liezl76.github.io/wdd230/"; 
const linksURL = "https://raw.githubusercontent.com/liezl76/wdd230/main/data/links.json";

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

    // Create an h3 element for the "Learning Activities" section
    const sectionHeader = document.createElement('h3');
    sectionHeader.textContent = 'Learning Activities';
    learningActivities.appendChild(sectionHeader);

    const ul = document.createElement('ul');

    weeks.forEach(week => {
        const listItem = document.createElement('li');
        const links = week.links.map(link => {
            // Check if link is an external URL
            if (link.url.startsWith('http')) {
                return `<a href="${link.url}" target="_blank">${link.title}</a>`;
            } else {
                return `<a href="${baseURL}${link.url}">${link.title}</a>`;
            }
        }).join(' | ');
        listItem.innerHTML = `<a href="#">${week.week}: </a> ${links}`;
        ul.appendChild(listItem);
    });

    learningActivities.appendChild(ul);
}

// Call getLinks to fetch data and display links
getLinks();