<template>
  <div class="grep">
    <main>
      <h1 class="title">Add New Item</h1>
      <label for="iname">Item Name:</label><br />
      <input type="text" required v-model="name" />
      <label for="desc">Description:</label>
      <input type="text" required v-model="description" />
      <label for="price">Price:</label>
      <input type="text" required v-model="price" />
      <label for="uuid">UUID:</label>
      <input type="text" required v-model="uuid" />
      <input for="image" type="file" id="file" name="file" @change="uploadImage" />
      <button @click="addNewMenuItem()">Add Item</button>&nbsp;
      <button>
        Cancel
      </button>
    </main>
  </div>
</template>

<script>
import { dbMenuAdd, fb } from "../../../firebase";

export default {
  data() {
    return {
      name: "",
      description: "",
      price: "",
      uuid: "",
      image: null
    };
  },
  methods: {
    uploadImage(e) {
      let file = e.target.files[0];
      console.log("Test image file", file);
      var storageRef = fb.storage().ref('products/' + file.name);

      let uploadTask = storageRef.put(file);

     /*
eslint-disable */ uploadTask.on('state_changed', (snapshot) => {

     /*
eslint-disable */ },(error) => {
        }, () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          this.image = downloadURL
          console.log('File avaible at', downloadURL);
        });
      });
    },
    addNewMenuItem() {
      dbMenuAdd.add({
        name: this.name,
        description: this.description,
        price: this.price,
        uuid: this.uuid,
        image: this.image
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
