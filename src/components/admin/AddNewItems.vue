<template>
  <div class="grep">
    <main>
      <h1 class="title">Add New Item</h1>
      <label for="iname">Item Name:</label><br>
      <input type="text" required v-model="name" />
      <label for="desc">Description:</label>
      <input type="text" required v-model="description" />
      <label for="price">Price:</label>
      <input type="text" required v-model="price" />
      <label for="uuid">UUID:</label>
      <input type="text" required v-model="uuid" />
      <button @click="addNewMenuItem()"> Add Item </button>&nbsp;
      <button>
        Cancel
      </button>
    </main>
  </div>
</template>

<script>
import { dbMenuAdd } from "../../../firebase";

export default {
  data() {
    return {
      name: "",
      description: "",
      price: "",
      uuid: "",
    };
  },
  methods: {
    addNewMenuItem() {
      dbMenuAdd.add({
        name: this.name,
        description: this.description,
        price: this.price,
        uuid: this.uuid,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  color: white;
}

.title {
  color: white;
  text-align: center;
  margin-top: 3em;
}

.grep {
  width: 20%;
  justify-content: center;
  margin: 0 auto;
  padding: 2em;
}
</style>
