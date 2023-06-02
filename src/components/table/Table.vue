<script>
import {defineComponent} from 'vue'
import TableHeader from "./TableHeader.vue";
import TableList from "./TableList.vue";

export default defineComponent({
  name: "Table",
  components: {
    TableList,
    TableHeader
  }
})
</script>

<template>
  <div class="table">
    <TableHeader/>
    <TableList/>
  </div>
</template>

<style scoped>

</style>
