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
    const spotlightAdsSection = document.querySelector('.spotlight-container .card');
    spotlightAdsSection.innerHTML = ''; // Clear existing content

    // Create an h3 element for the "Spotlight Ads" section
    const sectionHeader = document.createElement('h3');
    sectionHeader.textContent = 'Spotlight Ads';
    spotlightAdsSection.appendChild(sectionHeader);

    // Filter members with silver or gold membership levels
    const qualifiedMembers = members.filter(member => member.membership_level === 'Silver' || member.membership_level === 'Gold');

    // Shuffle the qualified members array to randomize
    shuffleArray(qualifiedMembers);

    // Select two to three random members
    const selectedMembers = qualifiedMembers.slice(0, Math.min(qualifiedMembers.length, 3));

    selectedMembers.forEach(member => {
        const adItem = document.createElement('li');
        adItem.innerHTML = `
            <h3>${member.name}</h3>
            <p>Address: ${member.address}</p>
        `;
        spotlightAdsSection.appendChild(adItem);
    });

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