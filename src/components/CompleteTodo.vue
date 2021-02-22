<template>
  <div>
    <h2>Completed Count : {{ completedCount }}</h2>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const todos = store.state.todo.todos;
    const completedCount = computed(
      () => todos.filter((todo) => todo.checked).length
    );

    return {
      completedCount
    };
  }
};
</script>

<style></style>
