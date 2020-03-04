<template>
  <v-app>
    <core-app-bar />
    <core-drawer />
    <core-view />
  </v-app>
</template>

<script>
export default {
  components: {
    CoreDrawer: () => import('@/components/example/Drawer'),
    CoreAppBar: () => import('@/components/example/AppBar'),
    CoreView: () => import('@/components/example/View')
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
