<script>
import {defineComponent} from 'vue'
import Main from './pages/Main.vue'
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    Main,
    Footer,
    Header,
  },
})
</script>

<template>
  <div id="app">
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>

<style scoped>

</style>
