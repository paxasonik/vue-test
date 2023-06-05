<script>
import {defineComponent} from 'vue'
import AddUser from "./modal/AddUser.vue";

export default defineComponent({
  name: "Header",
  components: {
    AddUser
  },
})
</script>

<template>
  <header class="header">
    <div class="container header__wrap">
      <a href="" class="header__logo">
        Vue test
      </a>
      <AddUser/>
    </div>
  </header>
</template>

<style scoped>

</style>
