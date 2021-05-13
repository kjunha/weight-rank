export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'web-client',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/axios.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/device',
  ],

  preset: [
    ['@babel/preset-env', { 'loose': true }]
  ],

  bootstrapVue: {
    icons: true
  },

  dotenv: {
    filename: '.env'
  },

  axios: {
    debug: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    host: process.env.NODE_ENV === 'production' ? '0.0.0.0' : '127.0.0.1',
    port: 8080
  }
};
