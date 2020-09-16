<template>
  <div>
    <div class="banner">
      <img src="@/assets/lg.png" alt="" />
    </div>
    <header>
      <div class="menu">
        <nav>
          <router-link to="/">home</router-link>
          <router-link to="/shop">shop</router-link>
          <router-link to="/contact">contact</router-link>
          <router-link v-if="!currentUser" to="/account" >my account</router-link>  
          <router-link v-if="currentUser" to="/account">{{ currentUser.email }}</router-link>  
          <router-link to="/cart"><i class="fas fa-shopping-cart"></i><span> {{countOfCartProducts}}</span></router-link>       
       
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
import {dbMenuAdd} from '../../firebase'

import {mapGetters} from 'vuex'

import 'firebase/firestore'
import firebase from 'firebase'
import store from '../store/index.js'

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch('setUser', user)
  } else {
    store.dispatch('setUser', null)
  }
});

export default {
  data: () => ({
    dbMenuAdd,
  }),
  name: "Navigation",
  computed: {
    ...mapGetters([
      'countOfCartProducts',
    ]),
    currentUser() {
      return this.$store.getters.currentUser
    },
  }
};
</script>

<style scoped lang="scss">

</style>
