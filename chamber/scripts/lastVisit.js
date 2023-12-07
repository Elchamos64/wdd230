// Function to display last visit information
function displayLastVisit() {
    // Get the current date
    const currentDate = new Date();
  
    // Get the last visit date from localStorage
    const lastVisit = localStorage.getItem('lastVisit');
  
    // Check if it's the user's first visit
    if (!lastVisit) {
      // Display a welcome message for the first visit
      document.getElementById('sidebar').textContent = "Welcome! Let us know if you have any questions.";
    } else {
      // Convert last visit date to a Date object
      const lastVisitDate = new Date(lastVisit);
  
      // Calculate the time difference in milliseconds
      const timeDifference = currentDate - lastVisitDate;
  
      // Calculate the number of days
      const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
      // Display the appropriate message based on the time difference
      if (daysDifference < 1) {
        document.getElementById('sidebar').textContent = "Back so soon! Awesome!";
      } else {
        const pluralizedDays = daysDifference === 1 ? 'day' : 'days';
        document.getElementById('sidebar').textContent = `You last visited ${daysDifference} ${pluralizedDays} ago.`;
      }
    }
  
    // Update the last visit date in localStorage
    localStorage.setItem('lastVisit', currentDate.toISOString());
  }
  
  // Call the displayLastVisit function to show the appropriate message
  displayLastVisit();