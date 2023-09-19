// https://jsonplaceholder.typicode.com/guide/

const rootEl = document.getElementById('root');
const btnLoadMore = document.createElement('button');
consttoDoApi = new ToDoApi();

btnLoadMore.textContent = 'Load toDoes';
rootEl.append(listEl, btnLoadMore);
btnLoadMore.addEventListener('click', onBtnLoadMoreClick);
rootEl.addEventListener('click', onCheckboxChecked);

class ToDoApi {
  static BASE_URL = 'https://jsonplaceholder.typicode.com/todos';
  page = 1;

  fetchToDoes() {
    const searchParams = new URLSearchParams({
      _limit: 10,
      _page: this.page,
    });

    fetch(`${BASE_URL}?${searchParams}`)
      .then(response => {
        this.page += 1;
        return response.json();
      })
      .catch(error => console.error(error));
  }

  onToDoUpdate(completed, id) {
    return fetch(`${BASE_URL}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        completed,
      }),
      headers: {
        'Content-type': 'application/json; chatset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => console.log(json));
  }
}

function createToDoList(array = []) {
  return array
    .map(el => {
      return `<li data-id=${el.id}>
    <p>${el.title}</p>
    <input ${el.completed ? 'checked' : ''} type="checkbox"/>
    </li>`;
    })
    .join('');
}

function onCheckboxChecked(event) {
  const { target } = event;
  if (target.tagName !== 'INPUT') {
    return;
  }
  const elId = target.closest('li')?.dataset.id;

  if (elId === undefined) {
    return;
  }
}

function onBtnLoadMoreClick() {
  btnLoadMore.disabled = true;

  ToDoApi.fetchToDoes()
    .then(data => {
      if (data.length === 0) {
        btnLoadMore.style.display = 'none';
        return;
      }
      const toDoLiElements = createToDoList(data);

      listEl.insertAdjacentHTML('beforeend', toDoLiElements);
    })
    .finally(() => {
      btnLoadMore.disabled = false;

      if (ToDoApi.page === 2) {
        btnLoadMore.textContent = 'Load More';
      }
    });
}
