<template>
  <div :key="task.id" v-for="task in tasks">
    <Task
      @change-reminder="$emit('change-reminder', task.id)"
      @delete-task="$emit('delete-task', task.id)"
      :task="task"
    />
  </div>
</template>

<script>
import Task from './Task'

export default {
  name: 'Tasks',
  props: {
    tasks: Array
  },
  components: {
    Task
  },
  emits: ['delete-task', 'change-reminder']
}
</script>

<style>
</style>