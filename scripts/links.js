// Define baseURL and linksURL
const baseURL = "https://elchamos64.github.io/wdd230"; // Replace with your GitHub pages URL
const linksURL = "https://elchamos64.github.io/wdd230/data/links.json"; // Replace with the correct path to your links.json file

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
  const learningActivities = document.getElementById("learning-activities");
  learningActivities.innerHTML = ""; // Clear existing content

  weeks.forEach((weekData) => {
    weekData.Lessons.forEach((lesson) => {
      const weekName = lesson.week;
      const links = lesson.link;

      const listItem = document.createElement("li");
      listItem.innerHTML = `${weekName} |`;

      links.forEach((link) => {
        const linkElement = document.createElement("a");
        linkElement.href = `${baseURL}/${link.url}`;
        linkElement.textContent = ` ${link.title} |`;
        listItem.appendChild(linkElement);
      });

      learningActivities.appendChild(listItem);
    });
  });
}

// Call the getLinks function to start the process
getLinks();