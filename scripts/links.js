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
function displayLinks(lessons) {
  const learningActivitiesContainer = document.getElementById("learning-activities");

  // Clear existing content
  learningActivitiesContainer.innerHTML = "";

  // Check if lessons is defined and is an array
  if (Array.isArray(lessons)) {
    lessons.forEach((lesson) => {
      // Check if the lesson object is defined and has necessary properties
      if (lesson && lesson.Lessons) {
        // Use the first lesson in the array if there are multiple
        const firstLesson = lesson.Lessons[0];

        if (firstLesson && firstLesson.week && firstLesson.link) {
          const weekNumber = firstLesson.week;
          const links = firstLesson.link;

          const weekDiv = document.createElement("div");
          weekDiv.classList.add("week-container");

          const weekHeading = document.createElement("h2");
          weekHeading.textContent = `${weekNumber}`;
          weekDiv.appendChild(weekHeading);

          const linksList = document.createElement("ul");

          // Check if links is defined and is an array
          if (Array.isArray(links)) {
            links.forEach((link) => {
              // Check if the link object has the necessary properties
              if (link && link.url && link.title) {
                const listItem = document.createElement("li");

                const linkElement = document.createElement("a");
                linkElement.href = `${baseURL}/${link.url}`;
                linkElement.textContent = link.title;

                listItem.appendChild(linkElement);
                linksList.appendChild(listItem);
              } else {
                console.error(`Invalid data structure for week ${weekNumber} - invalid link object:`, link);
              }
            });
          } else {
            console.error(`Invalid data structure for week ${weekNumber}:`, links);
          }

          weekDiv.appendChild(linksList);
          learningActivitiesContainer.appendChild(weekDiv);
        } else {
          console.error("Invalid lesson object:", firstLesson);
        }
      } else {
        console.error("Invalid data structure:", lesson);
      }
    });
  } else {
    console.error("Invalid data structure:", lessons);
  }
}

// Call the getLinks function to start the process
getLinks();