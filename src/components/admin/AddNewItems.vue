<template>
  <div class="grep">
    <main>
      <h1 class="title">Add New Item</h1>
      <v-text-field dark label="Name Of Item" required v-model="name">
      </v-text-field>
      <v-text-field dark label="Description" required v-model="description">
      </v-text-field>
      <v-text-field dark label="Price Of Item" required v-model="price">
      </v-text-field>
       <v-text-field dark label="UUID" required v-model="uuid">
      </v-text-field>
      <v-btn @click="addNewMenuItem()">
        Add Item </v-btn
      >&nbsp;
      <v-btn>
        Cancel
      </v-btn>
    </main>
  </div>
</template>

<script>
import { dbMenuAdd } from "../../../firebase";

export default {
  data() {
    return {
      name: '',
      description: '',
      price: '',
      uuid: ''
    };
  },
  methods: {
    addNewMenuItem() {
      dbMenuAdd.add({
        name: this.name,
        description: this.description,
        price: this.price,
        uuid: this.uuid
      });
    },
  },
};
</script>

<style lang="scss" scoped>
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
