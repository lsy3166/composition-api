import { createStore } from "vuex";
import user from "./modules/user";
import todo from "./modules/todo";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    todo
  }
});
