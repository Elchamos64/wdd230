const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('h4');

// Updated URL for 3-day forecast
const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=15.52&lon=-88.01&appid=7b02b55b5177a586ac1d82a615d40c15&units=imperial';

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    // Extracting temperature for the first day (adjust as needed)
    const tempDay1 = data.list[0].main.temp;
    const iconDay1 = data.list[0].weather[0].icon;
    const descDay1 = data.list[0].weather[0].description;

    // You can continue extracting data for the next two days in a similar way

    currentTemp.innerHTML = `${tempDay1}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${iconDay1}.png`;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'weather icon');
    weatherIcon.setAttribute('loading', 'lazy');
    captionDesc.textContent = `${descDay1}`;
}
