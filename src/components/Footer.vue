<template>
  <div>
    <div class="bottom">
      <h2>
        <span>WRAITHSQUAD</span> IS A CREATIVE SPACE FOR GRAPHIC DESIGNERS,
        MUSICIANS AND MORE. WE SELL DESIGNS, ASSETS AND HELP YOU FIND WHAT YOUR
        MIND CRAVES.
      </h2>
    </div>

    <div class="links">
      <div class="bot-left">
        <h3>Follow us</h3>
        <a href="https://www.facebook.com/wraithsquad" target="_blank"
          ><i class="fab fa-facebook"></i
        ></a>
        <a href="https://www.instagram.com/wraithsquad/" target="_blank"
          ><i class="fab fa-instagram"></i
        ></a>
      </div>

      <div class="bot-right">
        <h3>Recommended</h3>
        <hr />
        <router-link @click.native="scrollToTop" to="/Terms"
          >terms & conditions</router-link
        >
        <hr />
        <a href="https://discord.gg/gs7cpMr" target="_blank">discord</a>
        <hr />
      </div>
    </div>

    <footer>
      <h4>&copy; COPYRIGHT - WRAITHSQUAD 2089</h4>
      <a href="#"><button class="fa fa-caret-up"></button></a>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
  .fa-caret-up {
    border:none;
    background-color: #2b00a6;
    color: white;
    width: 3em;
    height: 3em;
    border-radius: 4em;
    margin-top: 1.5em;
  }
</style>
