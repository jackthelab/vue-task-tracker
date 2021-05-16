<template>
<!-- could also use v-show="showAddTask" instead of v-if...  -->
  <div v-if="showAddTask">
      <AddTask 
        @add-task="addTask"
      />
  </div>
  <Tasks 
    @change-reminder="changeReminder"
    @delete-task="deleteTask"
    :tasks="tasks"
  />
</template>

<script>
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'
import { computed } from '@vue/runtime-core'

export default {
  
  name: 'Home',
  components: {
    Tasks,
    AddTask
  },
  props: {
    showAddTask: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tasks: []
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

</style>