import axios from 'axios';

const api = axios.create({
  baseURL: 'https://aqueous-reaches-32062.herokuapp.com/api/',
//   baseURL: 'http://127.0.0.1:8000/api/',
});

export default api;
