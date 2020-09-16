import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    currentUser: null
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
    },
    currentUser: state => {
      return state.currentUser
    }
  },
  mutations: {
    ADD_TO_CART: (state, product) => {
      if (state.cart.findIndex(item => item.id === product.id) !== -1) {
        return
      }
      else {
        state.cart.push(product)
      }
    },
    REMOVE_FROM_CART: (state, product) => {
      state.cart.splice(product, 1)
    },
    userStatus (state, user) {
      if (user) {
        state.currentUser = user
      } else {
        state.currentUser = null
      }
    }
  },
  actions: {
    setUser(context, user) {
      context.commit('userStatus', user)
    }
  },
  modules: {
  }
});