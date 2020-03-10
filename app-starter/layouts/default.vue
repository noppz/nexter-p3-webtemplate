<template>
  <v-app>
    <core-app-notification />
    <core-app-bar />
    <core-drawer />
    <core-view />
  </v-app>
</template>

<script>
export default {
  components: {
    CoreAppNotification: () => import('@/components/core/AppNotification'),
    CoreDrawer: () => import('@/components/core/Drawer'),
    CoreAppBar: () => import('@/components/core/AppBar'),
    CoreView: () => import('@/components/core/View')
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
