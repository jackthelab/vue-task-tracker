<template>
  <div :class="[task.reminder ? 'reminder' : '', 'task']">
    <h3>
      {{ task.text }} 
      <div class="icons">
        <i @click="changeReminder(task.id)" class="far fa-bell"></i>
        <i @click="deleteTask(task.id)" class="fas fa-times"></i>
      </div>
      </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: Object
  },
  methods: {
    deleteTask(id) {
      this.$emit('delete-task', id)
    },
    changeReminder(id) {
      this.$emit('change-reminder', id)
    }
  }
}
</script>

<style scope>

  .fas {
    color: red;
  }
  .task {
    background: #f4f4f4;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
  }

  .task.reminder {
    border-left: solid 5px green;
  }

  .task h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .icons i {
    margin: 0 5px;
  }
</style>