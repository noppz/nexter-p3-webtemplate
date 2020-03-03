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
      <v-list-item-avatar color="white">
        <v-img src="https://cdn.vuetifyjs.com/images/logos/v.png" height="34" contain />
      </v-list-item-avatar>

      <v-list-item-title class="title">
        VUETIFY MD
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
        active-class="primary white--text"
      >
        <v-list-item-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-action>

        <v-list-item-title v-text="link.text" />
      </v-list-item>
    </v-list>

    <v-list-group prepend-icon="account_circle">
      <template v-slot:activator>
        <v-list-item-title class="caption py-0">Users</v-list-item-title>
      </template>

      <v-list-group sub-group no-action>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title class="caption">Admin</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="(admin, i) in admins" :key="i" link>
          <v-list-item-title class="caption" v-text="admin[0]"></v-list-item-title>
          <v-list-item-icon>
            <v-icon size="medium" v-text="admin[1]"></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>

      <v-list-group sub-group no-action>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title class="caption">Actions</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item v-for="(crud, i) in cruds" :key="i">
          <v-list-item-title class="caption" v-text="crud[0]"></v-list-item-title>
          <v-list-item-action>
            <v-icon size="medium" v-text="crud[1]"></v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list-group>
    </v-list-group>

    <!--
		<template v-slot:append>
			<v-list nav>
				<v-list-item to="#">
					<v-list-item-action>
						<v-icon>mdi-package-up</v-icon>
					</v-list-item-action>

					<v-list-item-title class="font-weight-light">
						Something else
					</v-list-item-title>
				</v-list-item>
			</v-list>
		</template>
		-->
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapMutations, mapState } from 'vuex'

export default {
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    links: [
      {
        to: '/example',
        icon: 'mdi-view-dashboard',
        text: 'Dashboard'
      },
      {
        to: '/example/user-profile',
        icon: 'mdi-account',
        text: 'User Profile'
      },
      {
        to: '/example/table-list',
        icon: 'mdi-clipboard-outline',
        text: 'Table List'
      },
      {
        to: '/example/typography',
        icon: 'mdi-format-font',
        text: 'Typography'
      },
      {
        to: '/example/icons',
        icon: 'mdi-chart-bubble',
        text: 'Icons'
      },
      {
        to: '/example/maps',
        icon: 'mdi-map-marker',
        text: 'Maps'
      },
      {
        to: '/example/notifications',
        icon: 'mdi-bell',
        text: 'Notifications'
      }
    ],
    admins: [
      ['Management', 'people_outline'],
      ['Settings', 'settings']
    ],
    cruds: [
      ['Create', 'add'],
      ['Read', 'insert_drive_file'],
      ['Update', 'update'],
      ['Delete', 'delete']
    ]
  }),

  computed: {
    ...mapState('app', ['image', 'color']),
    inputValue: {
      get() {
        return this.$store.state.app.drawer
      },
      set(val) {
        this.setDrawer(val)
      }
    }
  },
  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer'])
  }
}
</script>
