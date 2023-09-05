import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
});

class Api {
  static get() {
    return api.get('/index');
  }

  static login(data) {
    return api.post('/users/login', data);
  }
}

export default Api;
