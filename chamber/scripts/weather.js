
const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?q=London&lat=51.51&lon=-0.11&units=metric&appid=35e0990545cddc3f787cacfbbea051eb';

async function getWeather() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    const current = data.list[0];
    const forecast = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

    document.querySelector('#current-temp').textContent = `${current.main.temp.toFixed(1)}°C`;
    document.querySelector('#weather-desc').textContent = current.weather[0].description;

    const forecastContainer = document.querySelector('#forecast');
    forecast.forEach(day => {
      const div = document.createElement('div');
      div.innerHTML = `
        <p>${new Date(day.dt_txt).toLocaleDateString()} : <strong>${day.main.temp.toFixed(1)}°C</strong></p>
      `;
      forecastContainer.appendChild(div);
    });
  } catch (error) {
    console.error('Weather fetch error:', error);
  }
}

getWeather();