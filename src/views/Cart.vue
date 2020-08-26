<template>
  <div>
    <main>
        <div class="wrap">
            <div class="contact">
                <h2>YOUR <span>CART</span></h2>
            </div>
        </div>
    </main>

    <div class="cart">
        <div class="item">
            <div class="left-item">
                <img src="../assets/vinyl-texture-pack.jpg" alt="">
            </div>
            <div class="right">
                <h2>VINYL TEXTURE PACK v1 <span class="remove">X</span></h2>
                <h3>Price <span>€0.22</span></h3>
            </div>
        </div>
        <div class="total">
            <h3>Total Price: <span>€0.55</span></h3>
        </div>
        <div class="pay-btn">
            <button>PAY NOW</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  components: {},
};
</script>

<style lang="scss" scoped></style>