import axios from 'axios';

const BASE_URL = 'https://api.github.com';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 8000,
});

export { api };
