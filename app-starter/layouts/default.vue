<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      width="240"
      fixed
      dark
      app
    >
      <v-list dense>
        <v-list-item to="/" router exact>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="title">FMS BPS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list dense shaped>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-tooltip :disabled="!miniVariant" right>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on">{{ item.icon }}</v-icon>
              </template>
              <span>{{ item.title }}</span>
            </v-tooltip>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" elevation="1" dark dense fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <!--
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      -->
      <v-spacer />
      <v-menu open-on-hover offset-y>
        <template v-slot:activator="{ on }">
          <v-btn class="text-inherit font-weight-regular" text v-on="on">
            {{ userInfo.name }} <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list dense>
          <v-list-item-group v-model="userItems">
            <v-list-item v-for="(item, index) in userItems" :key="index">
              <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
              &nbsp;
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-content class="grey lighten-5">
      <v-container :fluid="fluid">
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      width="240"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!--
    <v-footer :fixed="fixed" dark padless app>
      <span class="body-2">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    -->
  </v-app>
</template>

<script>
export default {
  data() {
    const menuItems = [
      {
        icon: 'mdi-apps',
        title: 'Dashboard',
        to: '/dashboard'
      },
      {
        icon: 'mdi-package-variant-closed',
        title: 'Products',
        to: '/products'
      }
      /*
      {
        icon: 'mdi-chart-bubble',
        title: 'Inspire',
        to: '/inspire'
      }
      */
    ]

    const userMenuItems = [
      {
        icon: 'mdi-account-circle-outline',
        title: 'Profile'
      },
      {
        icon: 'mdi-shield-key-outline',
        title: 'Change Password'
      },
      {
        icon: 'mdi-logout',
        title: 'Log out'
      }
    ]

    const userInfoItems = {
      name: 'Account Name'
    }

    return {
      clipped: false,
      drawer: true,
      fixed: false,
      fluid: false,
      items: menuItems,
      userItems: userMenuItems,
      userInfo: userInfoItems,
      prefixItems: 'iu-',
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'App Name'
    }
  }
}
</script>
