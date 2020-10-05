import Vue from 'vue'
import Vuex from 'vuex'
import { dbMenuAdd } from "../../firebase";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    avaibleProducts: [],
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
    },
    getAvaibleProducts: state => {
      return state.avaibleProducts
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
    userStatus(state, user) {
      if (user) {
        state.currentUser = user
      } else {
        state.currentUser = null
      }
    },
    setAvaibleProducts: state => {

      let avaibleProducts = []

      dbMenuAdd.onSnapshot((snapshotItems) => {

        avaibleProducts = []

        snapshotItems.forEach((doc) => {

          var avaibleItemData = doc.data();

          avaibleProducts.push({

            ...avaibleItemData,

            id: doc.id

          })

        })

        state.avaibleProducts = avaibleProducts // moved inside

      })

    },
  },
  actions: {
    setUser(context, user) {
      context.commit('userStatus', user)
    },
    setAvaibleProducts(context) {
      context.commit('setAvaibleProducts')
    }
  },
  modules: {
  }
});