// https://jsonplaceholder.typicode.com/guide/

const rootEl = document.getElementById('root');
const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

// class ToDoApi {}

fetch(`${BASE_URL}?_limit=10`)
  .then(response => {
    return response.json();
  })
  .then(createToDoList)
  .catch(error => console.error(error));

function createToDoList(array = []) {
  const itemEl = array.map(el => {
    return `<li data-id=${el.id}>
    <p>${el.title}</p>
    <input ${el.completed ? 'checked' : ''} type="checkbox"/>
    </li>`;
  });
  const listEl = document.createElement('ul');
  listEl.innerHTML = itemEl.join('');
  rootEl.append(listEl);
}

rootEl.addEventListener('click', onCheckboxChecked);

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
