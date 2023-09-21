export const createWeatherCard = cardInfo => {
  return `<div class="weather__card">
  <h2 class="city-name">${cardInfo.name}</h2>
  <ul class="weather-info list">
    <li class="weather-info-item">
      <p class="temp">Temperature: ${cardInfo.main.temp}<sup>&#176;</sup></p>
    </li>
    <li class="weather-info-item">
      <p class="feels-like-temp">Feeleng as: ${cardInfo.main.feels_like}<sup>&#176;</sup></p>
    </li>
    <li class="weather-info-item">
      <p class="sunrise-time">Sunrise: ${cardInfo.sys.sunrise}</p>
    </li>
    <li class="weather-info-item">
      <p class="sunset-time">Sunset: ${cardInfo.sys.sunset}</p>
    </li>
    <li class="weather-info-item">
      <p class="clouds">Clouds: ${cardInfo.clouds.all}</p>
    </li>
  </ul>
</div>
  `;
};
