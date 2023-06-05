<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TableList",
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    level: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      isShowChildren: true,
    }
  },
  methods: {
    toggleChildren() {
      this.isShowChildren = !this.isShowChildren
    },
  },
})
</script>

<template>
  <transition name="fade">
    <div class="table__inner">
      <div class="table__row" :class="{ 'dropdown': item.children.length }" @click="toggleChildren">
        <div class="table__column column" :style="{ paddingLeft: 20 + level * 25 + 'px' }">
          <span v-if="item.children.length" class="column__plus">+</span>
          <div class="column__name">
            {{ item.name }}
            <span v-if="item.children.length" class="column__notification">{{ item.children.length }}</span>
          </div>
        </div>
        <div class="table__column">
          {{ item.phone }}
        </div>
      </div>
      <transition name="fade__add">
        <div class="" v-if="isShowChildren">
          <TableList v-for="item in item.children" :key="item.id" :item="item" :level="level + 1"/>
        </div>
      </transition>
    </div>
  </transition>
</template>

<style scoped>

</style>
