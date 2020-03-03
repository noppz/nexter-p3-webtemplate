<template>
  <v-app>
    <core-app-bar />
    <core-drawer />
    <core-view />
    <core-footer />
  </v-app>
</template>

<script>
export default {
  components: {
    CoreDrawer: () => import('@/components/example/Drawer'),
    CoreAppBar: () => import('@/components/example/AppBar'),
    CoreView: () => import('@/components/example/View'),
    CoreFooter: () => import('@/components/example/Footer')
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
