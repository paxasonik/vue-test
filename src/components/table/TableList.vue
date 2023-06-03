<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TableList",
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
})
</script>

<template>
  <div class="table__row">
    <div class="table__column">
      {{ item.name }}
    </div>
    <div class="table__column">
      {{ item.phone }}
    </div>
  </div>
</template>

<style scoped>

</style>
