<template>
  <div class="container">
    <Header title="Task Tracker" />
  </div>
</template>

<script>

  import Header from './components/Header'

  export default {
    name: 'App',
    components: {
      Header
    },
    data() {
      return {
        tasks: [

        ]
      }
    },
    created() {
      this.tasks = [
        {
          id:1,
          text: "Doctors Appointment",
          day: "March 1st @ 2:30pm",
          reminder: true
        },
        {
          id:2,
          text: "Meeting @ School",
          day: "March 3rd @ 1:30pm",
          reminder: true
        },
        {
          id:3,
          text: "Food Shopping",
          day: "March 3rd @ 11:00am",
          reminder: false
        }
      ]
    }
  }

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0; 
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  .container {
    max-width: 500px;
    margin: 30px auto;
    overflow: auto;
    min-height: 300px;
    border: 1px solid steelblue;
    padding: 30px;
    border-radius: 5px;
  }

  .btn {
    display: inline-block;
    background: #000;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
  }

</style>
