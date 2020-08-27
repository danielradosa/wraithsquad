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
          <router-link to="/account">account</router-link>
          <router-link to="/cart"><i class="fas fa-shopping-cart"></i><span> {{countOfCartProducts}}</span></router-link>
          
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Navigation",
  computed: {
    ...mapGetters([
      'countOfCartProducts'
    ])
  }
};
</script>

<style scoped lang="scss">

</style>
