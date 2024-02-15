function displaySpotlightAds() {
    // Function to fetch member data from members.json
    function fetchMemberData() {
        return fetch('members.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => data.members)
            .catch(error => {
                console.error('Error fetching member data:', error);
                return []; // Return an empty array if fetching fails
            });
    }

    // Call fetchMemberData to get member data and then process it
    fetchMemberData()
        .then(members => {
            // Display spotlight members on the home page
            members.forEach(member => {
                const spotlightCard = document.createElement('section');
                spotlightCard.classList.add('card');
                spotlightCard.innerHTML = `
                    <h3>${member.name}</h3>
                    <p>Address: ${member.address}</p>
                    <p>Phone: ${member.phone}</p>
                    <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                    <img src="${member.image}" alt="${member.name} Image">
                    <p>Membership Level: ${member.membership_level}</p>
                    <p>${member.other_info}</p>
                `;
                
                // Insert the spotlight card into the Company Spotlight Card Section
                const companySpotlightSection = document.querySelector('.container1');
                companySpotlightSection.appendChild(spotlightCard);
            });
        })
        .catch(error => console.error('Error:', error));
}

displaySpotlightAds(); // Display spotlight ads on page load
