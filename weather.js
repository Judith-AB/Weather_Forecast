const form = document.getElementById('weatherForm');
const weatherResult = document.getElementById('weatherResult');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = '5157097b02c29198ddee97e0f52e105a';
    const apiUrl =` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const temperature = data.main.temp;
            const tempo=Math.round(temperature-273.15)
            const description = data.weather[0].description;
            const cityName = data.name;

            const html = `
                <h3>${cityName}</h3>
                <p>Temperature: ${tempo}°C</p>
                <p>Description: ${description}</p>
            `;
            weatherResult.innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherResult.innerHTML = '<p>Failed to fetch weather data. Please try again.</p>';
               });
    });
