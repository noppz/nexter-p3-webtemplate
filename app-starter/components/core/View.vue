<template>
  <v-content class="grey lighten-3">
    <div id="core-view">
      <v-fade-transition mode="out-in">
        <nuxt />
      </v-fade-transition>
    </div>
  </v-content>
</template>
<script>
export default {
  name: 'CoreView',
  metaInfo() {
    return {
      title: ''
    }
  }
}
</script>
