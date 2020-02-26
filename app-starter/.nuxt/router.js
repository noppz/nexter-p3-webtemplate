import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3e4fe256 = () => interopDefault(import('..\\pages\\Icons.vue' /* webpackChunkName: "pages_Icons" */))
const _848e50ea = () => interopDefault(import('..\\pages\\Maps.vue' /* webpackChunkName: "pages_Maps" */))
const _8b66adb8 = () => interopDefault(import('..\\pages\\Notifications.vue' /* webpackChunkName: "pages_Notifications" */))
const _820f97de = () => interopDefault(import('..\\pages\\table-list.vue' /* webpackChunkName: "pages_table-list" */))
const _1766b692 = () => interopDefault(import('..\\pages\\tpgrade.vue' /* webpackChunkName: "pages_tpgrade" */))
const _5bdd35ba = () => interopDefault(import('..\\pages\\Typography.vue' /* webpackChunkName: "pages_Typography" */))
const _abbd730a = () => interopDefault(import('..\\pages\\user-profile.vue' /* webpackChunkName: "pages_user-profile" */))
const _2ede07a4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Icons",
    component: _3e4fe256,
    name: "Icons"
  }, {
    path: "/Maps",
    component: _848e50ea,
    name: "Maps"
  }, {
    path: "/Notifications",
    component: _8b66adb8,
    name: "Notifications"
  }, {
    path: "/table-list",
    component: _820f97de,
    name: "table-list"
  }, {
    path: "/tpgrade",
    component: _1766b692,
    name: "tpgrade"
  }, {
    path: "/Typography",
    component: _5bdd35ba,
    name: "Typography"
  }, {
    path: "/user-profile",
    component: _abbd730a,
    name: "user-profile"
  }, {
    path: "/",
    component: _2ede07a4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
