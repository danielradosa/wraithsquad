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
          <router-link to="/cart"><i class="fas fa-shopping-cart"></i><span> 0</span></router-link>
          
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped lang="scss">

</style>
