export const todo = {
  namespaced: true,
  state: {
    todos: [
      { id: 1, text: "read a book", checked: false },
      { id: 2, text: "clean a room", checked: false },
      { id: 3, text: "do work", checked: false }
    ]
  },
  mutations: {
    mu_deleteTodo(state, index) {
      state.todos.splice(index, 1);
    },
    mu_completeTodo(state, { e, index }) {
      state.todos[index].checked = e.target.checked;
    }
  },
  actions: {
    ac_addTodo({ state }, targetValue) {
      state.todos.push({
        id: 10,
        text: targetValue,
        checked: false
      });
    }
  },
  getters: {},
  modules: {}
};
