export default {
  async getList({ commit }) {
    await this.$axios.get(`/v1/items`).then((res) => {
      if (res.status === 200) {
        commit('SET_LIST', res.data)
      }
    })
  },
  async getItem({ commit }, index) {
    await this.$axios.get(`/v1/items/` + index).then((res) => {
      if (res.status === 200) {
        commit('SET_ITEM', res.data)
      }
    })
  },
  async createItem({ commit }, payload) {
    await this.$axios.post(`/v1/items`, payload).then((res) => {
      if (res.status === 201) {
        //
      }
    })
  },
  async updateItem({ commit }, payload) {
    await this.$axios.patch(`/v1/items/` + payload.id, payload).then((res) => {
      if (res.status === 200) {
        //
      }
    })
  },
  async deleteItem({ commit }, index) {
    await this.$axios.delete(`/v1/items/` + index).then((res) => {
      if (res.status === 200) {
        //
      }
    })
  }
}
