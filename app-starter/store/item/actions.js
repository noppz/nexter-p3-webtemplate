export default {
  setList({ commit }, list) {
    commit('SET_LIST', list)
  },
  setItem({ commit }, item) {
    commit('SET_ITEM', item)
  }
}
