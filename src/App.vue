<template>
  <div id="app">
    <Navigation />
    <router-view/>
    <Footer />
  </div>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important; 
  padding: 0 !important;
  margin: 0 auto !important;
  box-sizing: border-box !important;
  background-color: black !important;
  font-family: "Open Sans", sans-serif !important;
  scroll-behavior: smooth !important;
}

.v-application code {
    all: unset !important;
}

@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

body {
  padding: 0;
  margin: 0 auto !important;
  box-sizing: border-box;
  background-color: black;
  font-family: "Open Sans", sans-serif;
  scroll-behavior: smooth !important;
}

a {
  color: #2afd00;
}

.links a i:hover {
  color: #2b00a6;
  transition: 0.6s ease-in-out;
}

img {
  max-width: 100%;
  height: auto;
}

.banner {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: black;
}

.banner img {
  width: 50%;
}

header {
  width: 100%;
  justify-content: center;
  display: flex;
  background-color: black;
}

nav {
  background-color: black;
}

nav a {
  padding-bottom: 2em;
  color: #2afd00;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  width: 100%;
  display: block;
  text-align: center;
  transition: 0.6s ease-in-out;
}

nav a:hover {
  color: #2b00a6;
}

.ban {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: black;
  padding-top: 3em;
}

.ban img {
  width: 50%;
  margin-top: -2em !important;
}

main {
  width: 100%;
}

.featured {
  color: #2afd00;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  background-color: black;
  font-size: 2vw;
  margin-top: 3em !important;
}

.wrap {
  display: flex;
  justify-content: center;
  margin-top: 3em !important;
}

.item {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.item img {
  width: 80%;
  padding: 2em;
}

.item a {
  color: #2afd00;
  text-decoration: none;
  font-weight: bold;
  margin-top: -3em !important;
  transition: 0.6s ease-in-out;
}

.item a:hover {
  color: #2b00a6;
}

.bottom {
  display: flex;
  justify-content: center;
  color: #2afd00;
  font-size: 2vw;
  padding: 6em !important;
  text-align: center;
}

h2 {
  text-align: justify !important;
}

h2 span {
  color: #2b00a6;
  text-decoration: line-through;
}

.links {
  color: #2afd00;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.bot-left {
  padding: 2em !important;
  text-align: center !important;
}

.bot-left a i {
  font-size: 2em !important;
  padding: 0.3em !important;
  transition: 0.6s ease-in-out;
}

.bot-right {
  padding: 2em !important;
  text-align: left !important;
}

.bot-right a {
  color: #2afd00 !important;
  font-weight: bold !important;
  text-decoration: none !important;
  text-transform: uppercase !important;
  padding: 0.3em !important;
  transition: 0.6s ease-in-out;
}

.bot-right a:hover {
  color: #2b00a6;
}

footer {
  width: 100% !important;
  background-color: #2afd00 !important;
  bottom: 0 !important;
  display: flex !important;
  justify-content: center !important;
  margin-top: 6em !important;
}

h4 {
  text-align: center !important;
  padding: 0.5em !important;
}

.wrap-prod {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}

.prod-left {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.prod-left img {
  width: 100%;
}

.prod-right {
  width: 80%;
}

.prod-right h2 {
  text-align: justify;
  color: #2afd00;
}

.prod-right p {
  color: #2afd00;
  font-size: 6vw;
}

.featured-pack {
  color: #2b00a6;
  text-align: center;
  margin-top: 3em !important;
  font-size: 3vw;
}

.item span {
  color: white;
}

.contact {
  color: #2afd00;
  font-size: 3vw;
  text-align: center;
}

.contact h2 {
  text-align: center;
}

.contact h3 {
  color: white;
  border: 1px solid white;
  padding: 1em 0.5em;
  transition: 0.6s ease-in-out;
  text-align: center;
}

.contact h3:hover {
  background-color: white;
  color: black;
  cursor: crosshair;
}

#avaible {
  max-width: 100%;
  margin: 0 auto !important;
  display: flex;
  margin-top: -6em !important;
  margin-bottom: 6em !important;
  flex-wrap: wrap;
}

.p-avaible img {
  width: 100%;
  height: auto;
}

.p-avaible {
  margin-top: 3em !important;
}

.p-name {
  color: #2afd00;
  text-align: center;
  font-weight: bold;
  font-size: 4vw;
}

.p-price {
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 4vw;
}

button.add-to-cart {
  border: 1px solid white;
  text-align: center;
  background-color: black;
  color: white;
  padding: 1em 0.5em;
  width: 60%;
  border-radius: 2px;
  font-size: 4vw;
  transition: 0.6s ease-in-out;
}

.btn-container {
  display: flex;
  justify-content: center;
  margin-top: 1em !important;
}

.add-to-cart:hover {
  cursor: pointer;
  color: black;
  background-color: white;
}

.p-avaible a {
  transition: 0.6s ease-in-out;
}

.p-avaible a:hover {
  box-shadow: 0 0 300px white;
}

.cart {
  width: 100%;
  color: #2afd00;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
}

.top-cart {
  margin-top: -6em !important;
}

.total h3 {
  background-color: white;
  color: black;
  text-align: center;
}

.total h3 span {
  background-color: #2b00a6;
  color: white;
  padding: 0.5em 1.5em;
}

.pay-btn {
    justify-content: center;
    display: flex;
    width: 100%;
}

.pay-btn button {
  margin-top: 3em !important;
  border-radius: 2px;
  background-color: gold;
  color: black;
  border: none;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 6vw;
  padding: 1em 4em;
  box-shadow: 0 0 10px gold;
  animation: pulse-yellow 2s infinite;
}

.item .right {
  margin-top: -4em !important;
}

.total {
  margin-top: 6em !important;
  width: 100%;
  justify-content: center;
}

.remove {
  background-color: crimson;
  padding: 0.1em 0.5em;
  text-decoration: none;
  cursor: pointer;
}

h3.terms {
    text-align: justify;
    font-size: 4vw;
    padding: 3em !important;
    border:none;
}

.example {
    text-align: center;
}

.ex-img {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

@media only screen and (min-width: 600px) {
  nav a {
    display: inline;
    padding: 2em;
  }

  .ban img {
    width: 30%;
    margin-top: 2em !important;
  }

  .cart {
    flex-wrap: wrap;
  }

  .item .left-item img {
    width: 30%;
  }

  .pay-btn button {
    font-size: 4vw;
  }

  .login {
    margin-top: 3em !important;
  }
}

@media only screen and (min-width: 900px) {
  input {
    font-size: 2vw !important;
  }

  .login {
    font-size: 6vw;
    margin-top: 2em !important;
  }
  .item img {
    width: 30%;
    padding: 0.5em;
  }
  .item a {
    margin-top: 0 !important;
    align-self: center;
  }
  .bot-left {
    margin-right: 12em !important;
  }
  .bot-right {
    margin-left: 12em !important;
  }
  .prod-left img {
    width: 40%;
  }
  .prod-right {
    width: 60%;
  }
  .prod-right p {
    font-size: 3vw;
    margin-top: -0.2em !important;
  }
  .prod-right {
    margin-top: 4em !important;
  }
  #paypal-button-container {
    width: 80%;
    margin-top: -0.5em !important;
  }
  .p-avaible {
    width: 45%;
    padding: 1em;
  }
  #avaible {
    justify-content: center;
  }
  .p-name,
  .p-price,
  button.add-to-cart {
    font-size: 2vw;
  }
  .pay-btn button {
    font-size: 3vw;
  }
  .total {
    font-size: 2.5vw;
  }
  .item .right {
    margin-top: -2em !important;
  }
  .ex-img img {
    width: 40%;
}
}

@media only screen and (min-width: 1300px) {
  input {
    font-size: 1vw !important;
  }
  .logon, .logon-out {
    font-size: 1vw !important;
    width: 10% !important;
  }
  .banner img {
    width: 30%;
  }
  .ban img {
    width: 20%;
    margin-top: 1em !important;
  }
  .featured {
    font-size: 1.5vw;
  }
  .links {
    margin-top: -6em !important;
  }
  .prod-right {
    margin-top: 6em !important;
  }
  .prod-right p {
    margin-top: 1em !important;
  }
  .prod-right #paypal-button-container {
    margin-top: 1em !important;
    width: 80%;
  }
  .p-avaible {
    width: 30%;
    padding: 1em;
  }
  #avaible {
    justify-content: center;
    margin-top: -3em !important;
  }
  .p-name,
  .p-price,
  button.add-to-cart {
    font-size: 2vw;
  }
  .pay-btn button {
    font-size: 2vw;
  }
  .total {
    font-size: 2vw;
  }
  .item .right {
    margin-top: -2em !important;
  }
  .pay-btn button {
    font-size: 1.5vw;
    margin-top: 6em !important;
  }
  .total {
    font-size: 1.5vw;
  }
  .item .right {
    margin-top: 4em !important;
    text-align: left;
  }
  h3.terms {
      font-size: 2vw;
  }
}

@media only screen and (min-width: 1700px) {
  .login {
    margin-top: 1em !important;
  }

  .banner img {
    width: 15%;
  }
  .featured {
    font-size: 1vw;
  }
  .prod-right {
    margin-top: 8em !important;
  }
  .prod-right p {
    font-size: 2.5vw;
  }
  .prod-left img {
    width: 40%;
  }
  .prod-right {
    width: 50%;
  }
  .p-name,
  .p-price,
  button.add-to-cart {
    font-size: 1vw;
  }

  .pay-btn button {
    font-size: 1.5vw;
    margin-top: 6em !important;
  }
  .total {
    font-size: 1vw;
  }
  .item .right {
    margin-top: 4em !important;
    text-align: left;
  }
}

@keyframes pulse-yellow {
    0% {

        box-shadow: 0 0 0 0 gold;
    }
    
    70% {
    
        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }
    
    100% {
        
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
}
</style>

<script>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
import {mapGetters} from 'vuex'

export default {
  components: {
    Navigation,
    Footer
  },
  computed: {
    ...mapGetters([
      'myCart'
    ])
  }
}
</script>