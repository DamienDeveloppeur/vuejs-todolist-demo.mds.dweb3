<!--
  The TodoList component is meant to display a Todo item for each task in the "tasks" array.
  It iterates over each element of the array, and bind the current task to the "task" prop of the Todo component.

  Note that the binding to key is required by VueJS, so it can know which HTML element is bound to which index of your array. This means
  that the virtual DOM can be updated correctly, so the HTML element of an item will be managed by Vue JS as expected.
-->

<template>
  <div class="todo-list">
    <Todo v-for="(t, i) in tasks" :task="t" :key="i" />
  </div>
</template>

<script>
// This import is required, since this TodoList component actually uses the Todo component in its template.
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