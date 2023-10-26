// Calculate number of visits
let numVisits = 1;

if (localStorage.getItem('numVisits')) {
    numVisits = parseInt(localStorage.getItem('numVisits'));
    numVisits++; 
}

// set local storage with the number of visits
localStorage.setItem('numVisits', numVisits);

// Display number of visits
let numVisitsSpan = document.querySelector('#number-of-visits');
numVisitsSpan.textContent = numVisits;