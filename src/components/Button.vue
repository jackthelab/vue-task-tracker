<template>
<!-- instead of @click could also have written v-on:click="onClick()" -->

  <button
    @click="btnClick()"
    :style="{background: color}"
    class="btn"
  >
    {{ text }}
  </button>

</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: "Add Task"
    },
    color: {
      type: String,
      default: null
    }
  },
  methods: {
    btnClick() {
      this.$emit('btn-click')
    }
  }
}
</script>