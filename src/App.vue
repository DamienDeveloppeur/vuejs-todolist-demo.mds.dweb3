<template>
  <div id="app">
    <TodoForm @addTask="onAddTask" />
    <TodoList :tasks="tasks" />
  </div>
</template>

<script>
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
    onAddTask: function(task) {
      this.tasks.push(task);
    }
  },
  created() {
    setTimeout(() => {
      this.tasks[0].title = 'OUI';
    }, 5000);
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
