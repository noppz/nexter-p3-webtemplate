<template>
  <v-snackbar
    id="core-app-notification"
    v-model="notify"
    :color="snackbarColor"
    :timeout="snackbarTimeout"
    multi-line
    top
    right
    dark
    style="top: 80px;"
  >
    <div>{{ snackbarMessages }}</div>
    <v-btn icon dark @click.stop="setSnackbar(fInput)">
      <v-icon>
        mdi-close-circle
      </v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
// Utilities
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({
    tInput: true,
    fInput: false
  }),
  computed: {
    ...mapGetters({
      snackbar: 'app/getSnackbar',
      snackbarColor: 'app/getSnackbarColor',
      snackbarTimeout: 'app/getSnackbarTimeout',
      snackbarMessages: 'app/getSnackbarMessages'
    }),
    notify: {
      get() {
        return this.snackbar
      },
      set(val) {
        this.setSnackbar(val)
      }
    }
  },
  methods: {
    ...mapActions({
      setSnackbar: 'app/setSnackbar',
      setSnackbarColor: 'app/setSnackbarColor',
      setSnackbarTimeout: 'app/setSnackbarTimeout',
      setSnackbarMessages: 'app/setSnackbarMessages'
    })
  }
}
</script>
