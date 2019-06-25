
const state = {
  productList: []
}
const actions = {
  addProdcuts ({ commit, state }, product) {
    console.log(product)
  }
}
const mutations = {
  product_add (state, product) {
    state.productList.push(product)
  }
}
export default {
  state,
  actions,
  mutations
}
