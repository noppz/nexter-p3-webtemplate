<template>
  <v-content class="grey lighten-3">
    <h1>{{ error.statusCode + ' ' + error.statusMessage }}</h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-content>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>
