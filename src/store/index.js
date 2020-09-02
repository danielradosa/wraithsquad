import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
  },
  getters: {
    countOfCartProducts: state => {
      return state.cart.length
    },
    myCart: state => {
      return state.cart
    },
    getTotal: state => {
      return state.cart.reduce((total, lineItem) => Number(total) + Number(lineItem.price), 0);
    }
  },
  mutations: {
    ADD_TO_CART: (state, product) => {
      state.cart.push(product)
    },
    REMOVE_FROM_CART: (state, product) => {
      state.cart.splice(product, 1)
    }
  },
  actions: {

  },
  modules: {
  }
});
