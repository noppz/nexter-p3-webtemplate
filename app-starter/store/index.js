export const state = () => ({
  sidebar: true,
  locales: ['th', 'en'],
  locale: 'th'
})

export const mutations = {
  toggleSidebar(state) {
    state.sidebar = !state.sidebar
  },
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
