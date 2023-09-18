import { NewsApi } from './newsAPI';

const newsAPI = new NewsApi();

const refs = {
  searchFormEl: document.querySelector('.js-search-form'),
  loadMoreBtn: document.querySelector('.js-btn-load'),
  articlesEl: document.querySelector('.js-article-list'),
};

const onSearchForm = e => {
  e.preventDefault();
  const query = e.target.elements.query.value.trim();
  e.target.reset();

  newsAPI.getNews(query).then(data => {
    renderMarkup(data.articles);
  });
  refs.loadMoreBtn.disabled = false;
  refs.articlesEl.innerHTML = '';
};

const onClickLoadMore = () => {
  newsAPI.page += 1;
  newsAPI.getNews().then(data => {
    renderMarkup(data.articles);
    if (data.page === data.total_pages) {
      refs.loadMoreBtn.disabled = true;
    }
  });
};

refs.searchFormEl.addEventListener('submit', onSearchForm);
refs.loadMoreBtn.addEventListener('click', onClickLoadMore);

function renderMarkup(articles) {
  const markup = articles
    .map(({ media, title, summary, author }) => {
      return `<li class="card news-card">
            <img src="${media}" alt="" loading="lazy">
            <h3>${title}</h3>
            <p>${summary}<p>
            <hr>
            <span>${author}</span>
            </li>
  `;
    })
    .join('');
  refs.articlesEl.insertAdjacentHTML('beforeEnd', markup);
}
