import { fetchWeather } from './weatherAPI';
import { createWeatherCard } from './weather-card';

const searchFormEl = document.querySelector('.js-search-form');
const weatherCardEl = document.querySelector('.js-weather__wrapper');

const convertSecondsToHoursAndMinutes = seconds => {
  const date = new Date(seconds * 1000);

  return `${new String(date.getHours()).padStart(2, 0)}:${new String(
    date.getMinutes()
  ).padStart(2, 0)}`;
};

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchQuery = event.currentTarget.elements.user_country.value.trim();
  fetchWeather(searchQuery)
    .then(data => {
      data.sys.sunrise = convertSecondsToHoursAndMinutes(data.sys.sunrise);
      data.sys.sunset = convertSecondsToHoursAndMinutes(data.sys.sunset);

      weatherCardEl.innerHTML = createWeatherCard(data);
    })
    .catch(err => {
      switch (err.message) {
        case '404': {
          alert('No results found for your query');
          break;
        }
      }
    })
    .finally(() => {
      event.target.reset();
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
