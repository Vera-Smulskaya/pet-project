const BASE_URL = 'https://free-news.p.rapidapi.com/v1';
const END_POINT = '/search';

const options = {
  headers: {
    'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169',
    'X-RapidAPI-HOST': 'free-news.p.rapidapi.com',
  },
};

export class NewsApi {
  page = 1;
  query = '';

  getNews(query) {
    if (query) {
      this.query = query;
    }
    const params = new URLSearchParams({
      q: this.query,
      lang: 'en',
      page: this.page,
      page_size: 10,
    });

    return fetch(`${BASE_URL}${END_POINT}?${params}`, options).then(response =>
      response.json()
    );
  }
}
