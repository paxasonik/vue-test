<script>
import {defineComponent} from 'vue'
import {mapState} from 'pinia';
import TableHeader from "./TableHeader.vue";
import TableList from "./TableList.vue";
import {useUserStore} from '../../stores/user';

export default defineComponent({
  name: "Table",
  components: {
    TableList,
    TableHeader
  },
  computed: {
    ...mapState(useUserStore, [
      'getUsers',
      'usersLength'
    ]),
  }
})
</script>

<template>
  <div class="table" v-if="usersLength">
    <TableHeader/>
    <TableList v-for="item in getUsers" :key="item.id" :item="item" :level="0"/>
  </div>
  <div class="table__empty" v-else>
    Таблица пуста &#128577;
  </div>
</template>

<style scoped>

</style>
