<template>
  <!-- v-app REQUIRED for all layout applications -->
  <v-app>
    <!-- Sizes your content based upon application components -->
    <v-content class="grey lighten-3">
      <!-- Provides the application the proper gutter -->
      <v-container
        class="d-flex align-center justify-center"
        style="height: 100vh; padding: 0;"
        fluid
      >
        <!-- Use instead of router-view -->
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  //
}
</script>
