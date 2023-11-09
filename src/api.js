import axios from 'axios';

const api = axios.create({
  baseURL: 'https://arkadius-3ed504c5d94a.herokuapp.com'
});

export default api;
