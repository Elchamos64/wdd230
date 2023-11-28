const baseURL = "https://elchamos64.github.io/wdd230/";
const linksURL = "https://elchamos64.github.io/wdd230/data/links.json";


async function getLinks(){
    const response = await fetch (linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(weeks)
{
    weeks.forEach(week => {
        const title = document.querySelector();
    }) 
} 