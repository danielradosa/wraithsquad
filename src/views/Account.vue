<template>
  <div>
    <h1 class="login">LOGIN</h1>
    <div class="form" v-if="!currentUser">
      <input
        type="text"
        name="username"
        v-model="email"
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        v-model="password"
        placeholder="Password"
      />
    </div>
    <div class="lgn">
      <button class="logon" @click.prevent="signIn()" type="button">
        LOGIN
      </button>
      <button class="logon-out" @click.prevent="signOut()" type="button">
        SIGN OUT
      </button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/firestore";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace("/admin");
        })
        .catch(function(error) {
          var errorCode = error.message;
          var errorMessage = error.message;
          if (errorCode === "auth/wrong-password") {
            alert("Wrong password");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Logged Out");
          this.$router.replace("/");
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>

<style type="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
.login {
  color: #2b00a6;
  text-align: center;
  text-decoration: line-through;
}

input {
  margin: 1em;
  font-size: 4vw;
}

.form {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  margin: 0 auto;
  margin-top: 3em;
}

input[type="text"]:focus {
  border-radius: 2px;
  background-color: white;
  color: black;
}

input[type="password"]:focus {
  border-radius: 2px;
  background-color: white;
  color: black;
}

input[type="text"] {
  border: 1px solid white;
  background-color: black;
  color: white;
  padding: 1em;
  font-family: "Open Sans", sans-serif;
  border-radius: 2px;
  transition: 0.6s ease;
}

input[type="password"] {
  border: 1px solid white;
  background-color: black;
  color: white;
  padding: 1em;
  font-family: "Open Sans", sans-serif;
  border-radius: 2px;
  transition: 0.6s ease;
}

.lgn {
  display: flex;
  justify-content: center;
  margin-top: 3em;
}

button.logon {
  border: 1px solid white;
  text-align: center;
  background-color: white;
  color: black;
  padding: 1em 0.5em;
  width: 30%;
  border-radius: 2px;
  font-size: 4vw;
  transition: 0.6s ease-in-out;
  margin: 1em;
}

button.logon-out {
  border: 1px solid crimson;
  text-align: center;
  background-color: crimson;
  color: white;
  padding: 1em 0.5em;
  width: 30%;
  border-radius: 2px;
  font-size: 4vw;
  transition: 0.6s ease-in-out;
  margin: 1em;
}
</style>
