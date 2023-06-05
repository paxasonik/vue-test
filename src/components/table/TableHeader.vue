<script>
import {defineComponent} from 'vue'
import {mapActions, mapState} from "pinia";
import {useUserStore} from "../../stores/user";

export default defineComponent({
  name: "TableHeader",
  computed: {
    ...mapState(useUserStore, ['activeSortKey', 'activeSortColumn']),
  },
  methods: {
    ...mapActions(useUserStore, ['getSortColumn']),
  }
})
</script>

<template>
<div class="table__row table__header">
  <div class="table__column" :class="[activeSortColumn === 'name' ? `name__${activeSortKey}` : '']" @click="getSortColumn('name')">
    Имя
  </div>
  <div class="table__column" :class="[activeSortColumn === 'phone' ? `phone__${activeSortKey}` : '']" @click="getSortColumn('phone')">
     Телефон
  </div>
</div>
</template>

<style scoped>

</style>
