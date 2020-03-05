// constant color variables
// import colors from 'vuetify/es5/util/colors'
// enable custom variable.scss
import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
export default {
  mode: 'spa',
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    buildLocale: process.env.BUILD_LOCALE || 'th'
  },
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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    name: 'chasing-dots',
    color: '#ff5638',
    background: 'white',
    height: '4px'
  },
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
  plugins: [
    '~/plugins/base.js',
    '~/plugins/chartist.js',
    '~/plugins/components.js',
    { src: '~/plugins/ckeditor.js', mode: 'client' },
    '~/plugins/auth.js',
    '~/plugins/i18n.js'
  ],
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
    '@nuxtjs/style-resources',
    '@nuxtjs/toast',
    '@nuxtjs/auth'
  ],
  styleResources: {
    // your settings here
    sass: [],
    scss: ['@/assets/scss/main.scss'],
    less: ['~/assets/less/main.less'],
    stylus: []
  },
  toast: {
    position: 'top-right',
    duration: 2000
  },
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
            propertyName: 'data.accessToken'
          },
          logout: false,
          user: false
          // user: { url: '/test/all', method: 'get' }
        }
      }
    },
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/', // ถ้าใช้ provider
      home: '/'
    }
  },
  router: {
    middleware: ['i18n'] // 'auth',
  },
  generate: {
    routes: ['/', '/en', '/login', '/en/login']
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
      default: 'light',
      dark: false,
      light: true,
      themes: {
        light: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF'
        },
        dark: {
          primary: '#2196F3',
          secondary: '#424242',
          accent: '#FF4081'
        }
      }
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
      if (ctx.isClient) {
        config.devtool = 'source-map'
      }
      // * ? [Fixed VS code Select End of Line Sequence by change from CRLF to LF]
    },
    // enable custom variable.scss
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()]
  }
}
