import { api } from './api';

const GithubUserAPI = {
  queryGithubUser: (username) => {
    return api.get('/search/users', {
      params: {
        q: username,
        per_page: 50,
      },
    });
  },
  fetchGithubUserDetail: (username) => {
    return api.get(`/users/${username}`);
  },
};

export default GithubUserAPI;
