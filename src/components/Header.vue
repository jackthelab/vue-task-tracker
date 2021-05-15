<template>

  <header>
    <h1>{{ title }}</h1>
    <Button @click="toggleTaskForm" color="green" />
    <!-- <Button text="Update Task" color="blue" />
    <Button text="Delete Task" color="red" /> -->
  </header>

</template>

<script>

import Button from './Button'

  export default {
    name: "Header",
    // could write props a number of ways
    // Array... props: ['title']
    // objectOne... props: { title: String }
    // objectTwo... below
    props: {
      title: {
        type: String,
        default: "Hello World"
      }
    },
    components: {
      Button
    },
    methods: {
      toggleTaskForm() {
        this.$emit('toggle-task-form')
      }
    },
    emits: ['toggle-task-form']
  }

</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
</style>
