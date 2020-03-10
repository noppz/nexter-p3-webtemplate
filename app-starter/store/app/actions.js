export default {
  setDrawer({ commit }, drawer) {
    commit('SET_DRAWER', drawer)
  },
  setImage({ commit }, image) {
    commit('SET_IMAGE', image)
  },
  setColor({ commit }, color) {
    commit('SET_COLOR', color)
  },
  setSnackbar({ commit }, snackbar) {
    commit('SET_SNACKBAR', snackbar)
  },
  setSnackbarColor({ commit }, color) {
    commit('SET_SNACKBAR_COLOR', color)
  },
  setSnackbarTimeout({ commit }, milliseconds) {
    commit('SET_SNACKBAR_TIMEOUT', milliseconds)
  },
  setSnackbarMessages({ commit }, text) {
    commit('SET_SNACKBAR_MESSAGES', text)
  },
  setSnackbarSuccess({ commit }, text) {
    commit('SET_SNACKBAR_SUCCESS', text)
  },
  setSnackbarError({ commit }, text) {
    commit('SET_SNACKBAR_ERROR', text)
  },
  setSnackbarWarning({ commit }, text) {
    commit('SET_SNACKBAR_WARNING', text)
  },
  setSnackbarInfo({ commit }, text) {
    commit('SET_SNACKBAR_INFO', text)
  }
}
