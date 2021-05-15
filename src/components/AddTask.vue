<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="text" name="text" placeholder="Add Task"/>
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input type="text" v-model="day" name="day" placeholder="Add Day & Time"/>
    </div>
    <div class="form-control-check">
      <label>Set Reminder?</label>
      <input type="checkbox" v-model="reminder" name="reminder"/>
    </div>
    <div class="form-control">
      <input class="btn" type="submit" value="Add Task"/>
    </div>
  </form>
</template>

<script>

export default {
  name: 'AddTask',
  data() {
    return {
      text: null,
      day: null,
      reminder: false
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if(!this.text) {
        alert("Please add a task")
        return
      }
      const newTask = {
        id: Math.floor(Math.random() * 100000000),
        text: this.text,
        day: this.day,
        reminder: this.reminder
      }

      this.text = null,
      this.day = null,
      this.reminder = false

      this.$emit('add-task', newTask);
    }
  }
}
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
  background: black;
}
</style>