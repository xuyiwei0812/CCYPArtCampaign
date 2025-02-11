<template>
  <div id="app">
    <app-header v-if="header_show"></app-header>
    <router-view v-on:header="header" v-on:footer="footer"></router-view>
    <app-footer v-if="footer_show"></app-footer>
  </div>
</template>

<script>
  import { EventBus } from "@/eventBus";
  import Header from "./components/Header";
  import Footer from "./components/Footer";

  export default {
    name: 'App',
    data(){
      return {
        header_show: true,
        footer_show: true,
        isMenuOpen: false,
      }
    },
    components: {
      "app-header": Header,
      "app-footer": Footer,
    },
    methods:{
      header: function (bool) {
        this.header_show = bool;
      },
      footer: function (bool) {
        this.footer_show = bool;
      }
    },
    mounted() {
      EventBus.$on("menuOpened", () => {
        this.isMenuOpen = true;
      });
      EventBus.$on("closeMenu", () => {
        this.isMenuOpen = false;
      });
    },
    beforeDestroy() {
      EventBus.$off("menuOpened");
      EventBus.$off("closeMenu");
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
  }
</style>
