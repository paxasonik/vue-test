<script>
import {defineComponent} from 'vue'
import Table from "../components/table/Table.vue";

export default defineComponent({
  name: "Main",
  components: {Table},
})
</script>

<template>
  <main class="content__main content">
    <div class="container">
      <Table/>
    </div>
  </main>
</template>

<style scoped>

</style>
