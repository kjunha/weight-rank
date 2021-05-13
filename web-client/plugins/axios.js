const AppService = require('~/services/AppService');

export default ({ $axios, app }, inject) => {
  $axios.setBaseURL(process.env.SERVICE_API_URL);

  // $axios.interceptors.request.use((request) => {
  //   console.log(JSON.stringify(request))
  //   return request
  // })

  const AppApi = new AppService($axios);

  inject('appApi', AppApi);
}
