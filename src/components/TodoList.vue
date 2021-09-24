<template>
  <div class="todo-list">
    <Todo v-for="(t, i) in tasks" :task="t" :key="i" />
  </div>
</template>

<script>
import Todo from './Todo.vue';

export default {
  name: 'TodoList',
  props: [ 'tasks' ],
  components: {
    Todo
  }
}
</script>

<style scoped>

</style>