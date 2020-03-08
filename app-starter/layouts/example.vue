<template>
  <v-app>
    <core-filter />
    <core-app-bar />
    <core-filter />
    <core-drawer />
    <core-view />
  </v-app>
</template>

<script>
export default {
  components: {
    CoreFilter: () => import('@/components/example/Filter'),
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
