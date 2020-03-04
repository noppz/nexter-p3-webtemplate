<template>
  <v-content class="grey lighten-3">
    <v-fade-transition mode="out-in">
      <v-container id="core-view" fluid class="pa-0">
        <nuxt />
      </v-container>
    </v-fade-transition>
  </v-content>
</template>

<script>
export default {
  name: 'CoreView'
}
</script>
