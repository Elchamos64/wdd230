// Define baseURL and linksURL
const baseURL = "https://elchamos64.github.io/wdd230"; // Replace with your GitHub pages URL
const linksURL = 'data/links.json'; // Replace with the correct path to your links.json file

// Function to get links data asynchronously
async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data); // Test: Output the JSON data to the console
    displayLinks(data); // Call the displayLinks function with the data
  } catch (error) {
    console.error("Error fetching links data:", error);
  }
}

// Function to display links
function displayLinks(weeks) {
  // Assuming there is a container with id "learning-activities" in your HTML
  const learningActivitiesContainer = document.getElementById("learning-activities");

  // Clear existing content
  learningActivitiesContainer.innerHTML = "";

  // Loop through each week and build the links
  weeks.forEach((week) => {
    const weekNumber = week.week;
    const links = week.links;

    // Create a div element for each week
    const weekDiv = document.createElement("div");
    weekDiv.classList.add("week-container");

    // Create a heading for the week
    const weekHeading = document.createElement("h2");
    weekHeading.textContent = `Week ${weekNumber}`;
    weekDiv.appendChild(weekHeading);

    // Create an unordered list for the links
    const linksList = document.createElement("ul");

    // Loop through each link in the week
    links.forEach((link) => {
      // Create list item for each link
      const listItem = document.createElement("li");

      // Create a hyperlink
      const linkElement = document.createElement("a");
      linkElement.href = `${baseURL}/${link.url}`; // Assuming the link object has a "url" property
      linkElement.textContent = link.title; // Assuming the link object has a "title" property

      // Append the link to the list item
      listItem.appendChild(linkElement);

      // Append the list item to the links list
      linksList.appendChild(listItem);
    });

    // Append the links list to the week container
    weekDiv.appendChild(linksList);

    // Append the week container to the learning activities container
    learningActivitiesContainer.appendChild(weekDiv);
  });
}

// Call the getLinks function to start the process
getLinks();