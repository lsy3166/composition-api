<template>
  <div>
    <complete-todo :msg="msg" />
    <span>Add TODO </span>
    <input type="text" @keyup.enter="addTodo" />
    <todo-list />
    <hr />
    <user-list />
  </div>
</template>

<script>
import TodoList from "./TodoList.vue";
import { useStore } from "vuex";
import CompleteTodo from "./CompleteTodo.vue";
import UserList from "./UserList.vue";
export default {
  components: { TodoList, CompleteTodo, UserList },
  setup() {
    const store = useStore();

    const addTodo = (e) => {
      store.dispatch("todo/ac_addTodo", e.target.value);
    };
    const msg = "I can do it!";
    return {
      addTodo,
      msg
    };
  }
};
</script>

<style></style>
