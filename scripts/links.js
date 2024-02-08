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
    const linksContainer = document.getElementById('links-container');
  
    // Clear previous content
    linksContainer.innerHTML = '';
  
    // Iterate through each week
    weeks.forEach(week => {
      const weekDiv = document.createElement('div');
      weekDiv.classList.add('week');
  
      // Create heading for the week
      const weekHeading = document.createElement('h3');
      weekHeading.textContent = week.week;
      weekDiv.appendChild(weekHeading);
  
      // Create list of links for the week
      const linksList = document.createElement('ul');
      week.links.forEach(link => {
        const listItem = document.createElement('li');
        const linkAnchor = document.createElement('a');
        linkAnchor.href = baseURL + link.url;
        linkAnchor.textContent = link.title;
        listItem.appendChild(linkAnchor);
        linksList.appendChild(listItem);
      });
  
      weekDiv.appendChild(linksList);
      linksContainer.appendChild(weekDiv);
    });
  }
  
  // Call getLinks to fetch data and display links
  getLinks();