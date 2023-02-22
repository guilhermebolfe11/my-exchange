import axios from 'axios';

const api = axios.create({
  baseURL: 'https://brapi.dev/api',
});


export default api;
