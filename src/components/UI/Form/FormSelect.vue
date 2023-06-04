<script>
import {defineComponent} from 'vue'
import {DefaultProps, Emit} from "../constants";

export default defineComponent({
  name: "FormSelect",
  props: {
    selected: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: ''
    },
    keyValue: {
      type: String,
      default: DefaultProps.NAME
    },
    keyOption: {
      type: String,
      default: DefaultProps.NAME
    },
  },
  computed: {
    dataValue: {
      get() {
        return this.selected;
      },
      set(value) {
        this.$emit(Emit.UPDATE_VALUE, value);
      }
    }
  },
})
</script>

<template>
  <select class="select" :class="{ 'empty': !selected }" v-model="dataValue">
    <option class="placeholder" value="" v-if="placeholder" :selected="selected === ''">{{ placeholder }}</option>
    <option v-for="option in options" :key="option.id" :value="option[keyValue]" :selected="selected === option[keyValue]">
      {{ option[keyOption] }}
    </option>
  </select>
</template>

<style scoped>

</style>
