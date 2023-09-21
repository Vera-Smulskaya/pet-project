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
  console.log('first');
};

loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
