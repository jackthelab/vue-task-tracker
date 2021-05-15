<template>
  <div class="container">
    <Header
      @toggle-task-form="toggleTaskForm"
      title="Task Tracker"
    />
    <div v-if="showAddTask">
      <AddTask @add-task="addTask" />
    </div>
    <Tasks 
      @change-reminder="changeReminder"
      @delete-task="deleteTask"
      :tasks="tasks"
    />
  </div>
</template>

<script>

  import Header from './components/Header'
  import Tasks from './components/Tasks'
  import AddTask from './components/AddTask'

  export default {
    name: 'App',
    components: {
      Header,
      Tasks,
      AddTask
    },
    data() {
      return {
        tasks: [],
        showAddTask: false
      }
    },
    methods: {
      deleteTask(id) {
        if(confirm('Are you sure you want to delete this task?')) {
          this.tasks = this.tasks.filter((task) => task.id !== id)
        }
      },
      changeReminder(id) {
        // let task = this.tasks.find((task) => task.id === id)
        // let alertMessage

        // if(task.reminder) {
        //   alertMessage = "Are you sure you want to remove this alert?"
        // } else {
        //   alertMessage = "Confirm adding an alert to this task."
        // }

        // if(confirm(alertMessage)) {
        //   task.reminder = !task.reminder
        // }

        // or this....

        this.tasks = this.tasks.map((task) => 
        task.id === id
        ?
          confirm("Confirm this change")
          ?
          {...task, reminder: !task.reminder}
          :
          task
        :
        task )

      },
      addTask(task) {
        this.tasks = [...this.tasks, task]
      },
      toggleTaskForm() {
        this.showAddTask = !this.showAddTask
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
