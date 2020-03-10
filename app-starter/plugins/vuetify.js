import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export default (ctx) => {
  const vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#1976D2',
          secondary: '#424242',
          tertiary: '#495057',
          accent: '#82B1FF',
          success: '#4CAF50',
          error: '#FF5252',
          warning: '#FFC107',
          info: '#2196F3'
        }
      }
    },
    icons: {
      iconfont: 'mdi'
    }
  })

  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}
