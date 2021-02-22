import axios from "axios";
export const user = {
  namespaced: true,
  state: {
    users: []
  },
  mutations: {
    mu_setUsers(state) {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((users) => (state.users = users.data));
    }
  },
  actions: {},
  getters: {},
  modules: {}
};
