<template>

  <header>
    <h1>{{ title }}</h1>
    <Button
      v-show="homePage"
      @btn-click="$emit('toggle-task-form')"
      :text="showAddTask ? 'Close' : 'Add Task'"
      :color="showAddTask ? 'darkred' : 'darkgreen'"
    />
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
      },
      showAddTask: {
        type: Boolean,
        default: false
      }
    },
    components: {
      Button
    },
    computed: {
      homePage() {
        return this.$route.path === '/'
      }
    }
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
