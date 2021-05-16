<template>
  <div class="container">
    <Header
      @toggle-task-form="toggleTaskForm"
      title="Task Tracker"
      :showAddTask="showAddTask"
    />
    <!-- could also use v-show="showAddTask" instead of v-if...  -->
    <div v-if="showAddTask">
      <AddTask @add-task="addTask" />
    </div>
    <Tasks 
      @change-reminder="changeReminder"
      @delete-task="deleteTask"
      :tasks="tasks"
    />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>

  import Header from './components/Header'
  import Tasks from './components/Tasks'
  import AddTask from './components/AddTask'
  import Footer from './components/Footer'

  export default {
    name: 'App',
    components: {
      Header,
      Tasks,
      AddTask,
      Footer
    },
   
    data() {
      return {
        tasks: [],
        showAddTask: false
      }
    },
    methods: {
      async deleteTask(id) {
        if(confirm('Are you sure you want to delete this task?')) {
          const res = await fetch(`api${id}`, {method: 'DELETE'})
          res.status === 200 ? this.tasks = this.tasks.filter((task) => task.id !== id) : alert(`Unable to delete. Status: ${res.status}`)
        }
      },
      async changeReminder(id) {

        // const taskToToggle = await this.fetchTask(id)

        // the above was an unnecessary fetch call
        // eliminating it by working on front end (below) eliminates half of required fetches in this method
        const taskToToggle = this.tasks.find((task) => task.id === id)

        const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

        const res = await fetch(`api${id}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(updTask)
        })

        const resData = await res.json()

        this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: resData.reminder} : task)

      },
      async addTask(task) {

        const reqObj =  await {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(task)
        }

        const res = await fetch('http://localhost:5000/tasks', reqObj)
        const taskData = await res.json()

        this.tasks = await [...this.tasks, taskData]

      },
      toggleTaskForm() {
        this.showAddTask = !this.showAddTask
      },
      async fetchTasks() {
        const res = await fetch('api');
        const tasksData = res.json();

        return tasksData;
      },
      async fetchTask(id) {
        const res = await fetch(`api${id}`);
        const taskData = res.json();

        return taskData;
      }
    },
    async created() {
      this.tasks = await this.fetchTasks()
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
