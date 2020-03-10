export default {
  SET_DRAWER(state, drawer) {
    state.drawer = drawer
  },
  SET_IMAGE(state, image) {
    state.image = image
  },
  SET_COLOR(state, color) {
    state.color = color
  },
  SET_SNACKBAR(state, show) {
    state.snackbar = show
  },
  SET_SNACKBAR_COLOR(state, color) {
    state.snackbarColor = color
  },
  SET_SNACKBAR_TIMEOUT(state, timeout) {
    state.snackbarTimeout = timeout
  },
  SET_SNACKBAR_MESSAGES(state, messages) {
    state.snackbarMessages = messages
  },
  SET_SNACKBAR_SUCCESS(state, messages) {
    state.snackbar = true
    state.snackbarColor = 'success'
    state.snackbarMessages = messages
  },
  SET_SNACKBAR_ERROR(state, messages) {
    state.snackbar = true
    state.snackbarColor = 'error'
    state.snackbarMessages = messages
  },
  SET_SNACKBAR_WARNING(state, messages) {
    state.snackbar = true
    state.snackbarColor = 'warning'
    state.snackbarMessages = messages
  },
  SET_SNACKBAR_INFO(state, messages) {
    state.snackbar = true
    state.snackbarColor = 'info'
    state.snackbarMessages = messages
  }
}
