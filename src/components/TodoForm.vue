<template>
  <div class="todo-form">
    <form @submit.prevent="onSubmitForm">
      <p>Taask title:</p>
      <input v-model="title">

      <p>Task content:</p>
      <input v-model="content">

      <button>Create Task</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data() {
    return {
      title: 'Task 1',
      content: 'Description task 1'
    }
  },
  methods: {
    onSubmitForm: function() {
      const task = {
        title: this.title,
        content: this.content
      };
      console.log('ON SUBMIT FORM', task);
      this.$emit('addTask', task);
    }
  }
}
</script>

<style scoped>

</style>