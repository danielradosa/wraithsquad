<template>
  <div>
    <main>
        <div class="wrap">
            <div id="avaible">
                <div class="p-avaible" v-for="item in avaibleProducts" :key="item.name">
                    <router-link :to="{name: 'Product' , params:{ id: product.uuid }}">  
                      <img :key="item.image" :src="item.image">
                    </router-link>
                    <div class="p-name">{{ item.name }}</div>
                    <div class="p-price">€{{ item.price }}</div>
                    <div class="btn-container">
                        <button class="add-to-cart">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
  </div>
</template>

<script>
export default {
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
        },
        {
          name: "VINYL TEXTURES 2-PACK v1",
          price: 0.22,
          image: require("@/assets/vinyl-texture-pack.jpg"),
          id: 2,
          uuid: "vinyl-textures-pack-v001",
        },
        {
          name: "STICKER PACK 6-PACK v1",
          price: 0.66,
          image: require("@/assets/sticker-bag-pack.jpg"),
          id: 3,
          uuid: "sticker-bag-pack-v001",
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