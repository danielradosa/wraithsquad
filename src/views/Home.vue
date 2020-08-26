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
          <div class="item" v-for="item in avaibleProducts" :key="item.name">
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
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
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

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
</style>
