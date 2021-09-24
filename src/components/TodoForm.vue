<!--
  This component contains the form to display for creating new tasks.
  It emits an "addTask" event when a task is added using the form.
-->

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
/**
 * The "data" property contains the title and content of the task to create, which is bound to inputs using "v-model".
 * The "v-model" directive is meant to create a two-way data-binding, which means two things:
 *    - it listens the "change" event of an input to update its variable
 *    - if you change the variable from script, the content of the input will be updated on the interface
 */
export default {
  name: 'TodoForm',
  data() {
    return {
      title: 'Task 1',
      content: 'Description task 1'
    }
  },
  methods: {
    /**
     * This method is called when the user clicks on the "Add Task" button. Note that it's bound to the button by using the @click
     * directive in the template.
     */
    onSubmitForm: function() {
      const task = {
        title: this.title,
        content: this.content
      };
      
      // Reset the title and content of the inputs, so the user can add another task
      this.title = '';
      this.content = '';
      
      // Emit the "addTask" event and send the Task object. Since we use an event here, aything that need the information can listen an
      // react to it. In this example, the event is used by the App component to update the tasks array, but we could also make 
      // notification system to show our users that a new task has been added. In that case, it just have to listen the event too, no need
      // to update the TodoForm component.
      this.$emit('addTask', task);
    }
  }
}
</script>

<style scoped>

</style>