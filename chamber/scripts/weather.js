const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('h4');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=15.52&lon=-88.01&appid=7b02b55b5177a586ac1d82a615d40c15&units=imperial';

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
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'weather icon');
    weatherIcon.setAttribute('loading', 'lazy');
    captionDesc.textContent = `${desc}`;
}