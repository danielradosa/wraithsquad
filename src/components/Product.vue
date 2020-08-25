<template>
  <div>
    <main>
      <div class="featured-pack">
        <h1>{{ $router.params.id }} - €0.33</h1>
      </div>
      <div class="wrap-prod">
        <div class="prod-left">
          <img src="../assets/plastic-bag-pack.jpg" alt="plastic_bag_pack" />
          <div class="prod-right">
            <h2>Description</h2>
            <p>
              First version plastic bags pack containing 3 HQ assets. Make sure
              to get yours today.
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
      avaibleProducts: [
        {
          name: "PLASTIC BAGS 3-PACK v1",
          price: 0.33,
          image: require('@/assets/plastic-bag-pack.jpg'),
          description: 'First version plastic bags pack containing 3 HQ assets. Make sure to get yours today.',
          id: 1
        },
        {
          name: "VINYL TEXTURES 2-PACK v1",
          price: 0.22,
          image: require('@/assets/vinyl-texture-pack.jpg'),
          description: 'First version vinyl texture pack containing 2 HQ assets. Make sure to get yours today.',
          id: 2
        },
        {
          name: "STICKER PACK 6-PACK v1",
          price: 0.66,
          image: require('@/assets/sticker-bag-pack.jpg'),
          description: 'First version sticker bag pack containing 6 HQ assets. Make sure to get yours today.',
          id: 3
        }
      ],
    };
  }
};
</script>

<style></style>
