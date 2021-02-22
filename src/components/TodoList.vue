<template>
  <div>
    <hr />
    <div v-for="(todo, index) in todos" :key="index">
      {{ todo.checked }}
      <input
        type="checkbox"
        :checked="todo.checked"
        @click="completeTodo($event, index)"
      />
      <span
        :style="todo.checked ? 'color:red;text-decoration :line-through ' : ''"
        >{{ todo.text }}</span
      >
      <button style="margin:0 0 0 10px" @click="deleteTodo(index)">
        Delete
      </button>
    </div>
    {{ todos }}
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const todos = store.state.todo.todos;
    const completeTodo = (e, index) => {
      //store.state.todo.todos[index].checked = e.target.checked;
      store.commit("todo/mu_completeTodo", { e, index });
    };
    const deleteTodo = (index) => {
      store.commit("todo/mu_deleteTodo", index);
    };

    return {
      todos,
      completeTodo,
      deleteTodo
    };
  }
};
</script>

<style></style>
