<template>

  <header>
    <h1>{{ title }}</h1>
  </header>

</template>

<script>

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
