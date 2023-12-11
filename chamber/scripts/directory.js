  // Load members.json using fetch
  const gridbutton = document.querySelector("#grid");
  const listbutton = document.querySelector("#list");

  fetch('data/members.json')
    .then(response => response.json())
    .then(data => {
      // Process the data and display members
      displayMembers(data.members);
    })
    .catch(error => console.error('Error fetching data:', error));

  function displayMembers(members) {
    const container = document.body;

    members.forEach(member => {
      const memberElement = createMemberElement(member);
      container.appendChild(memberElement);
    });
  }

  function createMemberElement(member) {
    const memberElement = document.createElement('div');
    memberElement.classList.add('member-card');

    // Populate member information
    memberElement.innerHTML = `
      <h2>${member.name}</h2>
      <p>Address: ${member.address.street}, ${member.address.city}, ${member.address.state} ${member.address.zipcode}</p>
      <p>Phone: ${member.phone}</p>
      <p>Membership Level: ${member.membershiLevel}</p>
    `;

    return memberElement;
  }

  gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 
function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
