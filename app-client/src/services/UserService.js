import axios from 'axios';

export default class UserService {
  constructor() {
    this.$axios = axios.create({
      // Android VM 에서 호스트 머신의 localhost 를 보는 주소
      // baseURL: 'http://10.0.2.2:3333/api/v1/',
      baseURL: 'http://localhost:3333/api/v1/user/',
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
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

  checkSession() {
    return this.$axios.get('session');
  }

  undoSignup(code) {
    return this.$axios.put('signup', { code }, { withCredentials: false });
  }
}
