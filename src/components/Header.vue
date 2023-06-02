<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Header"
})
</script>

<template>
  <header class="header">
    <div class="container header__wrap">
      <a href="" class="header__logo">
        Vue test
      </a>
      <button class="btn header__create">
        Добавить
      </button>
    </div>
  </header>
</template>

<style scoped>

</style>
