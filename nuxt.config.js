export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Flight Schedule',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.css' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.js', type: 'text/javascript' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  /*ssr:false,*/

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  moment: {
    defaultTimezone: 'America/Detroit'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },

  geolocation:  {
    // watch: true,
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    api_key:'1774d6f943msh6412fdb3646c73ep16bf57jsn247532849e44',
    api_host:'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
    geo_api_key:'AIzaSyCN43bnRTA_fddds2x98_JUG32vr-C8Jws'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
