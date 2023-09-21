import { JsonPlaceHolderApi } from './paginationFetch';
import { createPostsCards } from './posts-card';

const loadMoreBtnEl = document.querySelector('.js-load-more');
const postListEl = document.querySelector('.js-posts');
const jsonPlaceHolderApi = new JsonPlaceHolderApi();

jsonPlaceHolderApi
  .fetchPosts()
  .then(data => {
    postListEl.innerHTML = createPostsCards(data);
  })
  .catch(err => {
    console.log(err);
  });

const onLoadMoreBtnClick = event => {
  jsonPlaceHolderApi.page += 1;
  jsonPlaceHolderApi
    .fetchPosts()
    .then(data => {
      if (data.length === 0) {
        loadMoreBtnEl.computedStyleMap.display = 'none';
        return;
      }

      postListEl.insertAdjacentHTML('beforeend', createPostsCards(data));
    })
    .catch(err => {
      console.log(err);
    });
};

loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
