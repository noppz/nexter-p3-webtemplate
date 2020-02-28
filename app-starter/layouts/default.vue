<template>
  <v-app>
    <core-app-bar />
    <core-drawer />
    <core-view />
    <!-- <core-footer /> -->
  </v-app>
</template>

<script>
export default {
  components: {
    CoreDrawer: () => import('@/components/core/Drawer'),
    CoreAppBar: () => import('@/components/core/AppBar'),
    CoreView: () => import('@/components/core/View')
    // CoreFooter: () => import('@/components/core/Footer'),
  },
  props: {
    source: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    drawer: null
  })
}
</script>
