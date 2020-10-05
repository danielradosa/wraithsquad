<template>
  <div>
    <main>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="btn-container">
        <router-link to="/addNew">
          <button class="add-to-cart">
            ADD NEW ITEM
          </button></router-link
        >
      </div>
      <div class="wrap">
        <div id="avaible">
          <div
            class="p-avaible"
            v-for="item in avaibleProds"
            :key="item.name"
          >
            <router-link
              @click.native="scrollToTop"
              :to="{ name: 'Product', params: { ...item } }"
            >
              <img :key="item.image" :src="item.image" />
            </router-link>
            <div class="p-name">{{ item.name }}</div>
            <div class="p-price">€{{ item.price }}</div>
            <div class="btn-container">
              <button class="remove" @click="deleteProduct(item.id)">
                REMOVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import { dbMenuAdd } from "../../firebase";

export default {
  methods: {
    ...mapMutations(["ADD_TO_CART"]),
    ...mapGetters(["getAvaibleProducts"]),
    addToCart(item) {
      this.ADD_TO_CART(item);
    },
    deleteProduct(id) {
      dbMenuAdd
        .doc(id)
        .delete()
        .then(function() {
          console.log("Document sucessfully deleted!");
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
    },
  },
  data() {
    return {
      cart: [],
      avaibleProducts: [],
    };
  },
  computed: {
    showProduct() {
      const id = this.$route.params.id;
      const product = this.avaibleProducts.find((p) => p.uuid == id);
      return product;
    },
    avaibleProds() {
      return this.$store.getters.getAvaibleProducts;
    },
  },
  beforeCreate() {
    this.$store.dispatch("setAvaibleProducts");
  },
};
</script>

<style type="scss" scoped>
.edit {
  color: white;
  background-color: darkorange;
  border: 1px solid white;
  padding: 2em;
  margin: 2em;
  font-weight: bold;
}

.remove {
  color: white;
  background-color: crimson;
  border: 1px solid white;
  margin: 2em;
  padding: 2em;
  font-weight: bold;
}
</style>
