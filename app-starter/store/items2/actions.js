export default {
  async initList({ commit }) {
    await this.$axios.get(`/v1/items`).then((res) => {
      console.log(res.data)
      if (res.status === 200) {
        commit('SET_LIST', res.data)
      }
    })
  },
  setList({ commit }, list) {
    commit('SET_LIST', list)
  },
  setItem({ commit }, item) {
    commit('SET_ITEM', item)
  }
}
