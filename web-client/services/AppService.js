class AppService {
  constructor($axios) {
    this.$axios = $axios;
  }

  connected() {
    return this.$axios.get('');
  }
}

module.exports = AppService;
