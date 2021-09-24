<template>
  <div class="todo-item">
    <h3>{{task.title}}</h3>
    <p>{{task.content}}</p>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: [ 'task' ]
}
</script>

<style scoped>

</style>