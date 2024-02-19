// Define baseURL and membersURL
const baseURL = "https://liezl76.github.io/wdd230/"; 
const membersURL = "https://raw.githubusercontent.com/liezl76/wdd230/main/data/members.json";

// Asynchronous function to get the members data
async function getMembers() {
    try {
        const response = await fetch(membersURL);
        if (!response.ok) {
            throw new Error('Failed to fetch members data');
        }
        const data = await response.json();
        displayRandomSpotlightAds(data.members);
    } catch (error) {
        console.error('Error fetching members data:', error);
    }
}

// Function to display random spotlight ads for silver or gold members
function displayRandomSpotlightAds(members) {
    const spotlightContainer = document.querySelector('.spotlight-container');
    spotlightContainer.innerHTML = ''; // Clear existing content

    // Shuffle the members array to randomize
    shuffleArray(members);

    // Determine the number of spotlight sections (2 to 3)
    const numberOfSections = Math.floor(Math.random() * 2) + 2;

    // Determine the number of members to display in each section
    const membersPerSection = Math.ceil(members.length / numberOfSections);

    // Display spotlight sections
    for (let i = 0; i < numberOfSections; i++) {
        const section = document.createElement('section');
        section.classList.add('card');
        const sectionHeader = document.createElement('h3');
        sectionHeader.textContent = 'Spotlight Ads';
        section.appendChild(sectionHeader);

        // Select members for this section
        const sectionMembers = members.slice(i * membersPerSection, (i + 1) * membersPerSection);

        // Display selected members
        sectionMembers.forEach(member => {
            const adItem = document.createElement('li');
            adItem.innerHTML = `
                <h3>${member.name}</h3>
                <p>Address: ${member.address}</p>
            `;
            section.appendChild(adItem);
        });

        // Append section to the spotlight container
        spotlightContainer.appendChild(section);
    }

    // Show the spotlight banner
    const spotlightBanner = document.getElementById('spotlightBanner');
    spotlightBanner.style.display = 'block';

    // Add event listener to close the spotlight banner
    const closeSpotlightBannerButton = document.getElementById('closeSpotlightBanner');
    closeSpotlightBannerButton.addEventListener('click', () => {
        spotlightBanner.style.display = 'none';
    });
}

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Call function to fetch and display members data
getMembers();