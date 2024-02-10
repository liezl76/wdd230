// Fetch the JSON data from the file
fetch('data/members.json')
.then(response => response.json()) // Parse the JSON data
.then(jsonData => {
  const membersDiv = document.getElementById("members");

  // Loop through each member in the JSON data
  jsonData.members.forEach(function(member) {
	// Create elements for member details
	const memberDiv = document.createElement("div");
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

	// Append member div to container
	membersDiv.appendChild(memberDiv);
  });
})
.catch(error => console.error('Error fetching JSON:', error)); // Log any errors