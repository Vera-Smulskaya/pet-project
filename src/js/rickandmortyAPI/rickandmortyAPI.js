// resource
// https://rickandmortyapi.com/documentation/#rest

const ulRef = document.querySelector('.js-characters-list');
const btnRef = document.querySelector('.js-load-more');
let page = 1;

btnRef.addEventListener('click', onClick);

function onClick() {
  page += 1;
  fetchCharacter(page)
    .then(data => {
      createMarkup(data.results);

      if (page === data.info.pages) {
        btnRef.hidden = true;
      }
    })
    .catch(error => console.log(error));
}

function fetchCharacter(page = 1) {
  return fetch(`https://rickandmortyapi.com/api/character?page=${page}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

fetchCharacter()
  .then(data => {
    createMarkup(data.results);
    btnRef.hidden = false;
  })
  .catch(error => console.log(error));

function createMarkup(arr) {
  const markup = arr
    .map(({ image, name, status }) => {
      return `<li class="js-character-item">
      <img src="${image}" alt="${name}" class="js-character-img">
      <p class="js-character-name">Name: <b>${name}</b></p>
      <p class="js-character-status">Status: <b>${status}</b></p>
    </li>`;
    })
    .join();
  ulRef.insertAdjacentHTML('beforeend', markup);
}
