<script>
import {defineComponent} from 'vue'
import {maska} from 'maska';
import {Emit,DefaultProps} from './constants';

export default defineComponent({
  name: "Input",
  directives: {
    maska
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: DefaultProps.TEXT
    },
    maska: {
      type: [Object, Array, String],
      default: ''
    },
  },
  methods: {
    onInput(event) {
      this.$emit(Emit.INPUT, event.target.value);
    }
  }
})
</script>

<template>
  <label class="input__inner">
    <span class="input__inner-label" v-if="label">{{ label }}</span>
    <input
      class="input__inner-input"
      :type="type"
      :value="value"
      @input="onInput"
      v-maska="maska"
    />
  </label>
</template>

<style scoped>

</style>
