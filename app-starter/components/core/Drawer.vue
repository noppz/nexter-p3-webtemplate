<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    :src="image"
    app
    color="grey darken-2"
    dark
    floating
    mobile-break-point="991"
    persistent
    width="240"
  >
    <template v-slot:img="attrs">
      <v-img v-bind="attrs" gradient="to top, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)" />
    </template>

    <v-list-item two-line>
      <!--
      <v-list-item-avatar color="white">
        <v-img src="https://cdn.vuetifyjs.com/images/logos/v.png" height="34" contain />
      </v-list-item-avatar>
      -->
      <v-list-item-title class="title">
        Digital Partner System
      </v-list-item-title>
    </v-list-item>

    <v-divider class="mx-3 mb-3" />

    <v-list nav dense>
      <!-- Bug in Vuetify for first child of v-list not receiving proper border-radius -->
      <div />

      <v-list-item
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        exact
        :active-class="color"
        dark
      >
        <v-list-item-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-action>

        <v-list-item-title v-text="link.text" />
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <v-list nav>
        <v-list-item to="#">
          <v-list-item-action>
            <v-icon>mdi-package-up</v-icon>
          </v-list-item-action>

          <v-list-item-title class="caption">
            Something else
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({
    responsive: false,
    links: [
      {
        to: '/',
        icon: 'mdi-view-dashboard',
        text: 'Dashboard'
      },
      {
        to: '/items',
        icon: 'mdi-view-dashboard',
        text: 'Items'
      },
      {
        to: '/products',
        icon: 'mdi-view-dashboard',
        text: 'Products'
      }
    ]
  }),
  computed: {
    ...mapGetters({
      image: 'app/getImage',
      color: 'app/getColor',
      drawer: 'app/getDrawer'
    }),
    inputValue: {
      get() {
        return this.drawer
      },
      set(val) {
        this.setDrawer(val)
      }
    }
  },
  mounted() {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },
  methods: {
    ...mapActions({
      setDrawer: 'app/setDrawer'
    }),
    onResponsiveInverted() {
      this.responsive = window.innerWidth < 991
    }
  }
}
</script>
