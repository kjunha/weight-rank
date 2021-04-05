import axios from 'axios';

export default class AppService {
  constructor() {
    this.$axios = axios.create({
      // Android VM 에서 호스트 머신의 localhost 를 보는 주소
      // baseURL: 'http://10.0.2.2:3333/api/v1/',
      baseURL: 'http://localhost:3333/api/v1/',
      headers: { 'Content-Type': 'application/json' }
    });
  }

  getList(type) {
    return this.$axios.get(`record/rank/${type}`);
  }

  getOauthIdentity(service) {
    return this.$axios.get(`oauth/identity/${service}`);
  }

  getOauthAccessToken(service, code) {
    return this.$axios.post(`oauth/token/${service}?code=${code}`);
  }
}
