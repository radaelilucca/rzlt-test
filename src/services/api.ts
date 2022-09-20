import axios from 'axios';

const GH_API_BASE_URL = 'https://api.github.com/';

const githubApi = axios.create({
  baseURL: GH_API_BASE_URL,
});

export { githubApi };
