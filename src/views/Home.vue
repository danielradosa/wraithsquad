<template>
  <div class="home">
    <div class="ban">
      <img
        src="https://steamuserimages-a.akamaihd.net/ugc/946221105798544818/C10AA02C9576CD4B72CE121B23791CD6D8DE3943/"
        alt=""
      />
    </div>

    <main>
      <div class="featured">
        <h1>featured wraithsquad products</h1>
      </div>
      <div class="wrap">
        <div class="products">
          <div class="item" v-for="item in avaibleProducts.slice(0, 3)" :key="item.name">
            <img :key="item.image" :src="item.image" />
            <router-link @click.native="scrollToTop" :to="{ name: 'Product', params: { ...item }}"
              >{{ item.name }} - <span>€{{ item.price }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { dbMenuAdd } from "../../firebase";
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  data() {
    return {
      cart: [],
      avaibleProducts: [],
      computed: {
        showProduct() {
          const id = this.$route.params.id;
          const product = this.avaibleProducts.find((p) => p.uuid == id);
          return product;
        },
      },
    };
  },
  created() {
    dbMenuAdd.get().then((querySnapshot) => {
      querySnapshot.forEach((doc => {
        var avaibleItemData = doc.data();
        this.avaibleProducts.push({
          id: doc.id,
          name: avaibleItemData.name,
          price: avaibleItemData.price,
          description: avaibleItemData.description,
          uuid: avaibleItemData.uuid,
          image: avaibleItemData.image
        })
      }))
    })
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
</style>
