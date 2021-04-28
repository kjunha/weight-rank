import axios from 'axios';

export default class UserService {
  constructor() {
    this.$axios = axios.create({
      baseURL: 'http://127.0.0.1:3333/api/v1/' + 'user/',
      headers: {
        'Content-Type': 'application/json'
      },
    });
  }

  getOauthIdentity(service) {
    return this.$axios.get(`identity/${service}`);
  }

  getOauthAccessToken(service, code) {
    return this.$axios.post(`token/${service}?code=${code}`);
  }

  registerNewUser(code, name, profile) {
    return this.$axios.post(`signup`, { code, name, profile });
  }

  checkSession(token) {
    return this.$axios.get('session', {headers: {'Authorization': `Bearer ${token}`}});
  }

  undoSignup(code) {
    return this.$axios.put('signup', { code });
  }
}
