document.addEventListener("DOMContentLoaded", function () {
    const timestampField = document.getElementById("timestamp");

    // Get the current date and time
    const currentDate = new Date();
    const formattedTimestamp = currentDate.toISOString();

    // Set the value of the hidden timestamp field
    timestampField.value = formattedTimestamp;
  });