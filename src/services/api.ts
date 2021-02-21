import axios from 'axios';

export const url = 'https://aqueous-reaches-32062.herokuapp.com/api/';
// const url = 'http://127.0.0.1:8000/api/';

const api = axios.create({
  baseURL: url,
});

export default api;
