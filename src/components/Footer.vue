<template>
  <footer>
    <p>Copyright &copy; 2021</p>
    <router-link to="/about">About</router-link>
    <router-link to="/">Home</router-link>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
  a {
    color: #333;
    margin: .25rem 1rem;
  }

  footer {
    margin-top: 30px;
    text-align: center;
  }
</style>