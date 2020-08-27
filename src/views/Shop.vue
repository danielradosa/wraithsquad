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
      avaibleProducts: [
        {
          name: "PLASTIC BAGS 3-PACK v1",
          price: 0.33,
          image: require("@/assets/plastic-bag-pack.jpg"),
          id: 1,
          uuid: "plastic-bag-pack-v001",
          description:
            "Plastic bags pack containing 3HQ assets. Get yours now.",
        },
        {
          name: "VINYL TEXTURES 2-PACK v1",
          price: 0.22,
          image: require("@/assets/vinyl-texture-pack.jpg"),
          id: 2,
          uuid: "vinyl-textures-pack-v001",
          description:
            "Vinyl textures pack containing 2HQ assets. Get yours now.",
        },
        {
          name: "STICKER PACK 6-PACK v1",
          price: 0.66,
          image: require("@/assets/sticker-bag-pack.jpg"),
          id: 3,
          uuid: "sticker-bag-pack-v001",
          description: "Sticker bag pack containing 6HQ assets. Get yours now.",
        },
      ],
      computed: {
        showProduct() {
          const id = this.$route.params.id;
          const product = this.avaibleProducts.find((p) => p.uuid == id);
          return product;
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>