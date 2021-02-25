<template>
  <div>
    <h2>Completed Count : {{ completedCount }}</h2>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore();
    const todos = store.state.todo.todos;
    const completedCount = computed(
      () => todos.filter((todo) => todo.checked).length
    );

    const message = props.msg;
    return {
      completedCount,
      message
    };
  }
};
</script>

<style></style>
