// constant color variables
// import colors from 'vuetify/es5/util/colors'
// enable custom variable.scss
import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.css'],
  render: {
    // enable render preload (including middleware script)
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/auth'
  ],
  auth: {
    // Options
    cookie: false,
    strategies: {
      local: {
        endpoints: {
          // login: { url: 'login', method: 'post', propertyName: 'data.token' },
          // user: { url: 'me', method: 'get', propertyName: 'data' },
          login: {
            url: '/auth/signin',
            method: 'post',
            propertyName: 'data.token'
          },
          logout: {
            url: '/auth/logout',
            method: 'post'
          },
          user: {
            url: 'me',
            method: 'get',
            propertyName: false
          },
          tokenRequired: true
        }
      }
    },
    // [Auth] redirect by default
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },
    plugins: ['~/plugins/auth.js']
  },
  // [Global Authentication]
  router: {
    // [Auth] open this comment when set authentication every pages by default
    // middleware: ['auth']
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // [AUTH, CALL API]
    baseURL: 'http://127.0.0.1:8080/api'
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
      // * ? [Fixed VS code Select End of Line Sequence by change from CRLF to LF]
    },
    // enable custom variable.scss
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()]
  }
}
