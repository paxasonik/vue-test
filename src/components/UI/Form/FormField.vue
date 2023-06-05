<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "FormField",
  props: {
    label: {
      type: String,
      default: ''
    },
  }
})
</script>

<template>
  <label class="form__inner">
    <span class="form__inner-label" v-if="label">{{ label }}</span>
    <slot/>
  </label>
</template>

<style scoped>

</style>
