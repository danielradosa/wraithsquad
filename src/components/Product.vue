<template>
  <div>
    <main>
      <div class="featured-pack">
        <h1>{{ currentItem.name }} - €{{ currentItem.price }}</h1>
      </div>
      <div class="wrap-prod">
        <div class="prod-left">
          <img :src="currentItem.image" alt="plastic_bag_pack" />
          <div class="prod-right">
            <h2>Description</h2>
            <p>
              {{ currentItem.description }}
            </p>
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
      currentItem: this.$route.params,
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

<style></style>
