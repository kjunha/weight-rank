import axios from 'axios';

export default class AppService {
  constructor() {
    this.$axios = axios.create({
      baseURL: process.env.VUE_APP_API,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  getList(type) {
    return this.$axios.get(`record/rank/${type}`);
  }
}
