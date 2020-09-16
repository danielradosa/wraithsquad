<template>
  <div>
    <main>
        <div class="wrap">
            <div id="avaible">
                <div class="p-avaible" v-for="item in avaibleProducts" :key="item.name">
                    <router-link @click.native="scrollToTop" :to="{ name: 'Product', params: { ...item }}">  
                      <img :key="item.image" :src="item.image">
                    </router-link>
                    <div class="p-name">{{ item.name }}</div>
                    <div class="p-price">€{{ item.price }}</div>
                    <div class="btn-container">
                        <button class="add-to-cart" v-on:click="addToCart(item)">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import { dbMenuAdd } from "../../firebase";

export default {
  methods: {
    ...mapMutations(["ADD_TO_CART"]),
    addToCart(item) {
      this.ADD_TO_CART(item);
    }
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

<style lang="scss" scoped></style>