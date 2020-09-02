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
       state.cart.forEach(item => {
         
          if(state.cart.find(itemInCart => item.name == itemInCart.name) )
            { 
             item =  state.cart.find(itemInCart => item.name == itemInCart.name);
             item.price*2
           //   state.cart.push(product)
          }
        else {
          state.cart.push(product)
        }
      })
      console.log("testies: ", product.price);
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
