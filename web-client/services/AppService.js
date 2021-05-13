class AppService {
  constructor($axios) {
    this.$axios = $axios;
  }

  connected() {
    return this.$axios.get('');
  }

  getRank({ page, type } = {}) {
    let uri = `record/rank`;
    let param = { page, type };
    let query = {};
    Object.keys(param).forEach(key => {
      if (param[key]) {
        query[key] = param[key];
      }
    });
    let queryString = new URLSearchParams(query).toString();
    console.log(queryString, queryString === '');

    return this.$axios.get(`record/rank${queryString ? '?' + queryString : ''}`);
  }
}

module.exports = AppService;
