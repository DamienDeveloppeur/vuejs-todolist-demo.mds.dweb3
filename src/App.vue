<template>
  <div id="app">
    <!-- Bind the onAddTask() method declared in the App component to the "addTask" event triggered by the TodoForm component -->
    <TodoForm @addTask="onAddTask" />
    <TodoList :tasks="tasks" />
  </div>
</template>

<script>
// These components must be imported and declared in the "components" property since they are used in this App component's template.
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoForm,
    TodoList,
  },
  data() {
    return {
      tasks: [
        { title: 'Task A', content: 'Description task A' },
        { title: 'Task B', content: 'Description task B' },
      ]
    }
  },
  methods: {
    /**
     * Called when the "addTask" event is triggered by TodoForm.
     */
    onAddTask: function(task) {
      this.tasks.push(task);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  display: flex;
  flex-direction: row;
}
</style>
