const baseURL = "https://elchamos64.github.io/wdd230/";
const linksURL = "https://elchamos64.github.io/wdd230/chamber/data/members.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displaySpotlightAds(data.members);
  }
  
  function filterSilverAndGoldMembers(members) {
    return members.filter(member => member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold');
}

function getRandomMembers(members, count) {
    const shuffledMembers = members.sort(() => Math.random() - 0.5);
    return shuffledMembers.slice(0, count);
}

function displaySpotlightAds(members) {
    const spotlightAdsContainer = document.getElementById('spotlightAdsContainer');
    const silverAndGoldMembers = filterSilverAndGoldMembers(members);
    const randomMembers = getRandomMembers(silverAndGoldMembers, 3);

    randomMembers.forEach(member => {
        const adElement = document.createElement('div');
        adElement.classList.add('spotlight-ad');
        adElement.innerHTML = `<h3>${member.name}</h3><p>Membership Level: ${member.membershipLevel}</p>`;
        spotlightAdsContainer.appendChild(adElement);
    });
}

// Call the getLinks function when the page loads
window.addEventListener('load', getLinks);