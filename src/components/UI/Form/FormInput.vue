<script>
import {defineComponent} from 'vue'
import {maska} from "maska";
import {DefaultProps, Emit} from "../constants";

export default defineComponent({
  name: "FormInput",
  directives: {
    maska
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: DefaultProps.TEXT
    },
    placeholder: {
      type: String,
      default: ''
    },
    maska: {
      type: [Object, Array, String],
      default: ''
    },
  },
  computed: {
    dataValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit(Emit.UPDATE_VALUE, value);
      }
    }
  },
})
</script>

<template>
  <input
    class="input"
    :type="type"
    v-model="dataValue"
    :placeholder="placeholder"
    v-maska="maska"
  />
</template>

<style scoped>

</style>
