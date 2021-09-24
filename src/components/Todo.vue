<!--
  This component represent 1 Todo item, and just displays its content.
  You must pass it a task object to display.
-->

<template>
  <div class="todo-item">
    <!--
      Here, we use the {{ }} syntax to display the title and content of the task.
      The task object is declared in the "props" property of the component's script.
    -->
    <h3>{{task.title}}</h3>
    <p>{{task.content}}</p>
  </div>
</template>

<script>
/**
 * The "props" property is required for the TodoList component to pass the task object to display when it iterates over the tasks array.
 */
export default {
  name: 'Todo',
  props: [ 'task' ]
}
</script>

<style scoped>

</style>