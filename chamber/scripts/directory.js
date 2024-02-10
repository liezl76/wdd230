const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("#members");

let isGridView = true; // Default view is grid

gridButton.addEventListener("click", () => {
  isGridView = true;
  renderMembers();
});

listButton.addEventListener("click", () => {
  isGridView = false;
  renderMembers();
});

// Function to render members based on the current view mode
function renderMembers() {
  fetch('data/members.json')
    .then(response => response.json())
    .then(jsonData => {
      display.innerHTML = ""; // Clear existing members

      if (isGridView) {
        // Display members in a grid
        jsonData.members.forEach(member => {
          const memberDiv = createMemberElement(member);
          display.appendChild(memberDiv);
        });
      } else {
        // Display members in a list
        const listContainer = document.createElement("ul");
        listContainer.classList.add("list-container");
        jsonData.members.forEach(member => {
          const memberItem = document.createElement("li");
          memberItem.innerHTML = `
            <h2>${member.name}</h2>
            <p>Address: ${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p>Website: <a href="${member.website}">${member.website}</a></p>
          `;
          listContainer.appendChild(memberItem);
        });
        display.appendChild(listContainer);
      }
    })
    .catch(error => console.error('Error fetching JSON:', error));
}

// Function to create a member element (for grid view)
function createMemberElement(member) {
  const memberDiv = document.createElement("div");
  memberDiv.classList.add("member-item");

  // Create elements for member details
  const nameElement = document.createElement("h2");
  const addressElement = document.createElement("p");
  const phoneElement = document.createElement("p");
  const websiteElement = document.createElement("p");
  const imageElement = document.createElement("img");

  // Set content and attributes
  nameElement.textContent = member.name;
  addressElement.textContent = "Address: " + member.address;
  phoneElement.textContent = "Phone: " + member.phone;
  websiteElement.innerHTML = "Website: <a href='" + member.website + "'>" + member.website + "</a>";
  imageElement.src = member.image;
  imageElement.alt = member.name + " Logo";

  // Append elements to member div
  memberDiv.appendChild(nameElement);
  memberDiv.appendChild(addressElement);
  memberDiv.appendChild(phoneElement);
  memberDiv.appendChild(websiteElement);
  memberDiv.appendChild(imageElement);

  return memberDiv;
}

// Initial rendering
renderMembers();